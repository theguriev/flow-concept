import { ReactNode } from "react";

const MessageFooter = ({ children }: { children: ReactNode }) => {
  if (!children) {
    return null;
  }
  return <span className="text-gray-300">{children}</span>;
};

export default MessageFooter;
