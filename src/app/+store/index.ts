import { ActionReducerMap } from "@ngrx/store";
import { ITableState, tableReducer  } from "./table.reducers";

export interface IState {
    tableState: ITableState,
}

export const reducers: ActionReducerMap<IState> = {
    tableState: tableReducer
}