import {
  Node,
  Edge,
  OnSelectionChangeFunc,
  useOnSelectionChange,
} from "@xyflow/react";
import { useCallback, useState } from "react";

const useSelected = (): {
  selectedNodes: Node[];
  selectedEdges: Edge[];
  selectedNode?: Node;
  selectedEdge?: Edge;
  onChange: OnSelectionChangeFunc;
} => {
  const [selectedNodes, setSelectedNodes] = useState<Array<Node>>([]);
  const [selectedEdges, setSelectedEdges] = useState<Array<Edge>>([]);

  const onChange: OnSelectionChangeFunc = useCallback(({ nodes, edges }) => {
    console.log("log: useSelected -> onChange", { nodes, edges });
    setSelectedNodes(nodes);
    setSelectedEdges(edges);
  }, []);

  useOnSelectionChange({
    onChange,
  });

  return {
    selectedNodes,
    selectedEdges,
    selectedNode: selectedNodes[0],
    selectedEdge: selectedEdges[0],
    onChange,
  };
};

export default useSelected;
