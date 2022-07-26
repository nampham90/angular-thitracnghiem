import { NgModule } from '@angular/core';

import { MatSliderModule } from "@angular/material/slider"
import { MatPaginatorModule} from "@angular/material/paginator"
import { MatSortModule} from "@angular/material/sort"
import { MatTableModule} from "@angular/material/table"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle"
import {MatCardModule} from "@angular/material/card"
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from "@angular/material/list"
import { MatFormFieldModule } from '@angular/material/form-field';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCheckboxModule} from "@angular/material/checkbox"
import{MatChipsModule} from "@angular/material/chips"
import{MatDatepickerModule} from "@angular/material/datepicker"
import {MatDialogModule} from "@angular/material/dialog"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatInputModule} from "@angular/material/input"
import {MatMenuModule} from "@angular/material/menu"
import {MatProgressBarModule} from "@angular/material/progress-bar"
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import {MatRadioModule} from "@angular/material/radio"
import {MatSlideToggleModule} from "@angular/material/slide-toggle"
import {MatSelectModule} from "@angular/material/select"
import {MatStepperModule} from "@angular/material/stepper"
import {MatTabsModule} from "@angular/material/tabs"
import {MatSidenavModule} from "@angular/material/sidenav"
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports:[
      MatSliderModule,
      MatPaginatorModule,
      MatSortModule,
      MatTableModule,
      CdkTableModule,
      MatCardModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatIconModule,
      MatListModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatGridListModule,
      MatInputModule,
      MatMenuModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatSelectModule,
      MatStepperModule,
      MatTabsModule,
      MatSidenavModule,
	  MatToolbarModule

    ]
  })
  export class MaterialModule {}