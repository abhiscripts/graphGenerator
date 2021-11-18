import {
  UPDATE_GRAPH_SELECTION,
  UPDATE_LABEL_SELECTION,
} from "../Actions/ActionTypes";
let initial_state = { selectedGraph: [], selectedLabels: [] };

export const input_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_SELECTION: {
      return { ...state, selectedGraph: action.payload };
    }
    case UPDATE_LABEL_SELECTION: {
      return { ...state, selectedLabels: action.payload };
    }
    default: {
      return state;
    }
  }
};
