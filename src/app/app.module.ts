import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './+store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    DialogComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatBottomSheetModule,
    MatListModule,
    MatDialogModule,
    DragDropModule,
    MatSlideToggleModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
