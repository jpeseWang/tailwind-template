"use client";
import CodePreview from "./components/CodePreview";

export default function Code() {
  return (
    <>
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
          </div>
        </div>
      </div>
    </>
  );
}
