import { UPDATE_GRAPH_SELECTION, UPDATE_LABEL_SELECTION } from "./ActionTypes";

export const graph_selector = (payload) => {
  return { type: UPDATE_GRAPH_SELECTION, payload };
};

export const label_selector = (payload) => {
  return { type: UPDATE_LABEL_SELECTION, payload };
};
