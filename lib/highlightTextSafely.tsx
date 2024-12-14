import { JSX } from "react";

const highlightTextSafely = (text: string, highlight: string): JSX.Element => {
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={index} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default highlightTextSafely;
