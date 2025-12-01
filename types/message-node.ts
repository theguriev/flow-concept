import { NodeProps, Node } from "@xyflow/react";

type DataType = {
  data: {
    body?: {
      text: {
        text: string;
      };
    };
    header?: {
      media: {
        example: string[];
        type: "TYPE_IMAGE";
      };
    };
    footer?: {
      text: {
        text: string;
      };
    };
  };
};

export type MessageNodeProps = NodeProps & DataType;

export type MessageNode = Node & DataType;
