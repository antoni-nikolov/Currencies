import { createSelector } from "@ngrx/store";
import { IState } from ".";

export const selectData = (state: IState) => state.tableState;
 
export const selectTableData = createSelector(
    selectData,
    state => state.data
);

export const selectColBackgrounds = createSelector(
    selectData,
    state => state.colBackgrounds
);

export const selectActiveCols = createSelector(
    selectData,
    state => state.activeCol
);
