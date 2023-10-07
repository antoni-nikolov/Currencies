import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActiveCols, selectColBackgrounds, selectTableData } from './+store/table.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { updateActiveCol } from './+store/table.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

  tableData$!: any;
  activeCols$!: string[];
  colBackgrounds$!: any;
  btnsBackground = '#3f51b5';

  constructor(
    private store: Store<any>,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    ) {
    this.onRunApp();
  }

  onRunApp(): void {
    this.store.select(selectTableData)
        .subscribe(data => this.tableData$ = new MatTableDataSource(data));
    this.store.select(selectColBackgrounds)
        .subscribe(data => this.colBackgrounds$ = data);
    this.store.select(selectActiveCols)
        .subscribe(data => this.activeCols$ = data);
  }

  onApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData$.filter = filterValue.trim().toLowerCase();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  drop(event: CdkDragDrop<string[]>) {

    let activeCol: any = [
      ...this.activeCols$
    ]
    moveItemInArray(activeCol, event.previousIndex, event.currentIndex);
    this.store.dispatch(updateActiveCol({activeCol}));
  }

  onChangeBtnColor(color: HTMLInputElement): void{
    this.btnsBackground = color.value;    
  }

  ngOnDestroy(): void {
    //TODO: Destroy subscriptions!!!
  }

}
