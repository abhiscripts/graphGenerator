import {
  UPDATE_GRAPH_SELECTION,
  UPDATE_LABEL_SELECTION,
  UPDATE_FINAL_GRAPH_VALUE,
  UPDATE_CURR_GRAPH_VALUE,
  ADD_LABEL_OPTION,
  UPDATE_PREVIEW,
} from "../Actions/ActionTypes";
let initial_state = {
  selectedGraph: [],
  selectedLabels: [],
  optionLabels: [],
  currGraphData: {},
  finalData: { labels: [], data: [] },
  preview: false,
};

export const input_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case UPDATE_GRAPH_SELECTION: {
      return { ...state, selectedGraph: action.payload };
    }
    case UPDATE_LABEL_SELECTION: {
      return {
        ...state,
        selectedLabels: action.payload,
      };
    }
    case UPDATE_CURR_GRAPH_VALUE: {
      return { ...state, currGraphData: action.payload };
    }
    case UPDATE_FINAL_GRAPH_VALUE: {
      console.log("here", action.payload);
      state["finalData"] = action.payload;
      return state;
    }
    case ADD_LABEL_OPTION: {
      state["optionLabels"] = action.payload
        ? [...state.optionLabels, action.payload]
        : [];
      return state;
    }
    case UPDATE_PREVIEW: {
      return { ...state, preview: !state.preview };
    }
    default: {
      return state;
    }
  }
};
