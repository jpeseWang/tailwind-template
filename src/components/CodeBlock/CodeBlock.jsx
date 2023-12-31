/* eslint-disable react/jsx-key */
"use client";
import { Highlight, themes } from "prism-react-renderer";
import customTheme from "@/styles/customeTheme";
import "./styles.css";

export default function CodePreview({ code }) {
  return (
    <div>
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
