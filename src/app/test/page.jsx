// In Test.js
"use client";
import React from "react";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

export default function Test() {
  return (
    <>
      Test page
      <CodeBlock
        code={`
          function greet(name) {
            return 'Hello, ' + name + '!';
          }
          
          console.log(greet('World'));
        `}
      />
    </>
  );
}
