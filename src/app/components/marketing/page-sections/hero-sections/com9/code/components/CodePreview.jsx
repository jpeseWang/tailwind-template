/* eslint-disable react/jsx-key */
"use client";
import { create } from "zustand";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "@/app/components/codePreview/CopyButton";
import SnippetLang from "@/app/components/codePreview/SnippetLang";
import htmlCode from "../resources/html-code";
import reactCode from "../resources/react-code";
import vueCode from "../resources/vue-code";
import customTheme from "@/styles/customeTheme";
import "@/styles/codePreview.css";

const useStore = create((set, get) => ({
  lang: "html",
  setLang: (lang) => set(() => ({ lang })),
  getCode: () => {
    const currentLang = get().lang;
    if (currentLang === "react") {
      return reactCode;
    } else if (currentLang === "vue") {
      return vueCode;
    } else if (currentLang === "html") {
      return htmlCode;
    }
    return "";
  },
}));

export default function Com9() {
  const { lang, setLang, getCode } = useStore();
  const code = getCode();

  return (
    <div>
      <div className="flex justify-end items-center my-2 mr-2">
        <div className="mr-2">
          <SnippetLang lang={lang} setLang={setLang} />
        </div>
        <CopyButton code={code} />
      </div>

      <div className="code-highlight-container rounded-md">
        <Highlight code={code} language="tsx" theme={customTheme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{ ...style, position: "relative", borderRadius: "10px" }}
            >
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
              <div className="snippet-container"></div>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
