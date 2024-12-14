import markdownToHtml from "@/lib/markdownToHtml";
import React, { useState, useEffect } from "react";

const Markdown = ({ children }: { children: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    async function renderMarkdown() {
      if (!children) return;

      const result = await markdownToHtml(children);
      setHtmlContent(result);
    }

    renderMarkdown();
  }, [children]);

  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default Markdown;
