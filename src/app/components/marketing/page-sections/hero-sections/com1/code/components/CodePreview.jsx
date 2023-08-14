/* eslint-disable react/jsx-key */
"use client";
import { create } from "zustand";
import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";
import SnippetLang from "./SnippetLang";
import javascriptCode from "../resources/javascript-code";
import typescriptCode from "../resources/typescript-code";
import customTheme from "../resources/customeTheme";
import "../styles.css";

//   plain: {
//     color: "white",
//     backgroundColor: "#1D293B",
//   },
//   styles: [
//     {
//       types: ["prolog", "keyword", "builtin"],
//       style: {
//         color: "#CBD5E1",
//       },
//     },
//     {
//       types: ["attr-name"],
//       style: {
//         color: "#CBD5E1",
//       },
//     },
//     {
//       types: ["attr-value", "string"],
//       style: {
//         color: "#7DD3FC",
//       },
//     },
//     {
//       types: ["tag", "function"],
//       style: {
//         color: "#F472B6",
//       },
//     },
//     {
//       types: ["boolean"],
//       style: {
//         color: "#F87171",
//       },
//     },
//     {
//       types: ["operator"],
//       style: {
//         color: "inherit",
//         backgroundColor: "transparent",
//       },
//     },
//   ],
// };

const useStore = create((set, get) => ({
  lang: "javascript",
  setLang: (lang) => set(() => ({ lang })),
  getCode: () =>
    get().lang === "javascript" ? javascriptCode : typescriptCode,
}));

export default function CodePreview() {
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
