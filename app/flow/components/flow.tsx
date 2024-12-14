"use client";

import React, { ComponentProps, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  OnConnect,
  Background,
} from "@xyflow/react";

import "@xyflow/react/dist/base.css";
import RootNode from "./root-node";
import MessageNode from "./message-node";

const initNodes = [
  {
    type: "FLOW_OBJECT_TYPE_CUSTOM_SEND_SENDOUT",
    id: "0193c24b-d890-cceb-5ad9-3abdf8ca28c7",
    position: {
      x: 200,
      y: 500,
    },
  },
  {
    data: {
      body: {
        text: {
          text: "🌟 *Exclusive Offer Just for You!* 🌟\n\nUnlock your special discount now! Tap here 👉 [Link] to save big! Hurry, limited time only! 💸",
        },
      },
      header: {
        media: {
          example: [
            "https://cdn.dev.connectly.ai/38a6/38a6107c-c81a-4027-8fd5-74e52d3c2fce",
          ],
          type: "TYPE_IMAGE",
        },
      },
      footer: {
        text: {
          text: "this is footer",
        },
      },
    },
    id: "0193c24b-e969-67d3-8e43-fddbfd0a6470",
    position: {
      x: 660,
      y: 450,
    },
    type: "FLOW_OBJECT_TYPE_SEND_CONNECTLY_TEMPLATE_MESSAGE",
  },
];

const initEdges = [
  {
    id: "0193c24b-ebee-4b52-5b1f-288bed7954df",
    source: "0193c24b-d890-cceb-5ad9-3abdf8ca28c7",
    sourceHandle: "0193c24b-d890-cceb-5ad9-3abdf8ca28c7:send",
    target: "0193c24b-e969-67d3-8e43-fddbfd0a6470",
    targetHandle: "0193c24b-e969-67d3-8e43-fddbfd0a6470:on-execute",
    type: "FLOW_OBJECT_TYPE_SIMPLE_EDGE",
  },
];

const nodeTypes = {
  FLOW_OBJECT_TYPE_CUSTOM_SEND_SENDOUT: (
    props: ComponentProps<typeof RootNode>
  ) => <RootNode {...props} />,
  FLOW_OBJECT_TYPE_SEND_CONNECTLY_TEMPLATE_MESSAGE: (
    props: ComponentProps<typeof MessageNode>
  ) => <MessageNode {...props} />,
};

const Flow = () => {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      selectNodesOnDrag={false}
      snapToGrid={true}
      deleteKeyCode={null}
      minZoom={0.1}
      maxZoom={2.5}
      selectionKeyCode={null}
      multiSelectionKeyCode={null}
    >
      <Background />
      <Controls showInteractive={false} />
      <div className="absolute top-2 right-2 font-bold text-xs">v4</div>
    </ReactFlow>
  );
};

export default Flow;
