import { createReducer, on } from "@ngrx/store";
import { addNewCurrency, updateColBackgrounds, updateActiveCol } from "./table.actions";

export interface ITableState {
   
    data: {
       
    }[],
    colBackgrounds:{},
    activeCol:string[] 
    
}

const initialState: ITableState = {
   
    data: [
        {active: '✔', currencyId: '1', country: 'България', currencyName: 'Лев', 	currencyCode: 'BGN'},
        {active: '✔', currencyId: '1', country: 'България', currencyName: 'Лев', currencyCode: 'BGN'},
        {active: '✔', currencyId: '2', country: 'България', currencyName: 'Euro', currencyCode: 'EU'},
        {active: '✔', currencyId: '3', country: 'Великобритания', currencyName: 'British Pound', currencyCode: 'GBP'},
        {active: '✔', currencyId: '1', country: 'България', currencyName: 'Лев', currencyCode: 'BGN'},
        {active: '✔', currencyId: '1', country: 'България', currencyName: 'Лев', currencyCode: 'BGN'},
        {active: '✔', currencyId: '2', country: 'България', currencyName: 'Euro', currencyCode: 'EU'},
    ],
    colBackgrounds:{
        col1:'#ffffff',
        col2:'#ffffff',
        col3:'#dcf1fe',
        col4:'#ffffff',
        col5:'#faebd7',
    },
    activeCol:['active', 'currencyId', 'country', 'currencyName', 'currencyCode'] 
    
}

export const tableReducer = createReducer(
    initialState,
    on(addNewCurrency, (state, { data }) => ({ ...state, data})),
    on(updateColBackgrounds, (state, { colBackgrounds }) => ({ ...state, colBackgrounds })),
    on(updateActiveCol, (state, { activeCol }) => ({ ...state, activeCol })),
);
