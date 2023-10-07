import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectColBackgrounds } from '../+store/table.selectors';
import { updateColBackgrounds } from '../+store/table.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  colBackgrounds$!: any;

  constructor(
    private store: Store<any>,
  ) {
    this.store.select(selectColBackgrounds)
      .subscribe(data => this.colBackgrounds$ = data);
  }

  onUpdateBackgrounds(colIndex: HTMLInputElement): void {

    let colBackgrounds: any = {
      ...this.colBackgrounds$
    }
    colBackgrounds[colIndex.name] = colIndex.value;
    this.store.dispatch(updateColBackgrounds({ colBackgrounds }));
  }


  //TODO: unsubscribe

}
