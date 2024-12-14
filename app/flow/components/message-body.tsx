import Markdown from "@/components/markdown";
import { ReactNode } from "react";

const MessageBody = ({ children }: { children: ReactNode }) => {
  if (typeof children === "string") {
    return <Markdown>{children}</Markdown>;
  }
};

export default MessageBody;
