import {
  UPDATE_GRAPH_SELECTION,
  UPDATE_LABEL_SELECTION,
  UPDATE_FINAL_GRAPH_VALUE,
  UPDATE_CURR_GRAPH_VALUE,
} from "../Actions/ActionTypes";
let initial_state = {
  selectedGraph: [],
  selectedLabels: [],
  currGraphData: {},
  finalData: {"labels":[],"data":[]},
};

export const input_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_SELECTION: {
      return { ...state, selectedGraph: action.payload };
    }
    case UPDATE_LABEL_SELECTION: {
      return { ...state, selectedLabels: action.payload };
    }
    case UPDATE_CURR_GRAPH_VALUE: {
      return { ...state, currGraphData: action.payload };
    }
    case UPDATE_FINAL_GRAPH_VALUE: {
      return { ...state, finalData: action.payload };
    }
    default: {
      return state;
    }
  }
};
