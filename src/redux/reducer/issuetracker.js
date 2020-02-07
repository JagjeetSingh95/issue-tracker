import types from "../types";

let initialState = {
  type: "",
  message: "",
  issues: [
    {"status": "Done", "id": 1, "title": "Create login page"}, 
    {"status": "Not started", "id": 2, "title": "Store encrypted passwords"}, 
    {"status": "Not started", "id": 3, "title": "Design database tables for User models"}, 
    {"status": "Done", "id": 4, "title": "Fix the UI issue on Login page"}, 
    {"status": "In progress", "id": 5, "title": "Display data in tabular format"}
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_COMMON_LOADING:
      return { ...state, message: action.payload, type: "success" };
    case types.UPDATE_ISSUES:
      return { ...state, issues: action.payload }
    default:
      return state;
  }
}
