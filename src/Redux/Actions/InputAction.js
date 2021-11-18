import {
  UPDATE_GRAPH_SELECTION,
  UPDATE_LABEL_SELECTION,
  UPDATE_CURR_GRAPH_VALUE,
  UPDATE_FINAL_GRAPH_VALUE,
} from "./ActionTypes";

export const graph_selector = (payload) => {
  return { type: UPDATE_GRAPH_SELECTION, payload };
};
export const label_selector = (payload) => {
  return { type: UPDATE_LABEL_SELECTION, payload };
};
export const update_graph_value = (payload) => {
  return { type: UPDATE_FINAL_GRAPH_VALUE, payload };
};
export const update_curr_graph_value = (payload) => {
  return { type: UPDATE_CURR_GRAPH_VALUE, payload };
};
