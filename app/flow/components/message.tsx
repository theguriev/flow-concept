import { ReactNode } from "react";
import MessageCornerIcon from "./message-corener-icon";

const Message = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-3 bg-gray-100 rounded">
      <div className="bg-white rounded p-1 relative flex flex-col gap-2">
        <div className="absolute top-0 left-[-8px] text-white">
          <MessageCornerIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Message;
