import { UPDATE_ISSUES } from "../types/issuetracker";

export const updateIssues = (issues) => {
    return dispatch => {
        dispatch({
            type: UPDATE_ISSUES,
            payload: issues
        });
    }
}