import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { selectTableData } from '../+store/table.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { addNewCurrency } from '../+store/table.actions';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit, OnDestroy {

  tableData$!: any;

  newCurrencyModel = [
    {
      active: '✔', 
      currencyId: '4', 
      country: 'Япония', 
      currencyName: 'Japanese Yen', 	
      currencyCode: 'JPY'
    },
    {
      active: '✔', 
      currencyId: '5', 
      country: 'Швейцария', 
      currencyName: 'Swiss Franc', 	
      currencyCode: 'CHF'
    }
  ]

  constructor(
    private store: Store<any>,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
  ) {
    this.store.select(selectTableData).subscribe(data => this.tableData$ = new MatTableDataSource(data));
   }

  ngOnInit(): void {
  }

  onAddNewCurrency(event: MouseEvent, currencyCode: string): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    
    let newCurrency = currencyCode == 'JPY' ? this.newCurrencyModel[0] : this.newCurrencyModel[1] 
    let data: any = [
      newCurrency,
      ...this.tableData$.filteredData,
    ];

    this.store.dispatch(addNewCurrency({data}));
  }

  ngOnDestroy(): void {
    //TODO: Destroy subscriptions!!!
  }

}
