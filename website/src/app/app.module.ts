import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

/* Directives */

//import { VegaliteDirective } from './directives/vegalite.directive';

/* Material components */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MastComponent } from './components/mast/mast.component';
import { AsctbCompareComponent } from './components/asctb-compare/asctb-compare.component';
import { AsctbCompareSidebarComponent } from './components/asctb-compare/asctb-compare-sidebar/asctb-compare-sidebar.component';
import { AsctbTableViewComponent } from './components/asctb-compare/asctb-table-view/asctb-table-view.component';
import { AsctbTreeViewComponent } from './components/asctb-compare/asctb-tree-view/asctb-tree-view.component';
import { AsctbScatterplotViewComponent } from './components/asctb-compare/asctb-scatterplot-view/asctb-scatterplot-view.component';
import { AsctbTreemapViewComponent } from './components/asctb-compare/asctb-treemap-view/asctb-treemap-view.component';
import { ColorLegendComponent } from './components/asctb-compare/color-legend/color-legend.component';
import { AsctbGenerateComponent } from './components/asctb-generate/asctb-generate.component';
import { DatasetLinkagesComponent } from './components/dataset-linkages/dataset-linkages.component';
import { ApiKeyComponent } from './components/api-key/api-key.component';

@NgModule({
  declarations: [
    AppComponent,
    MastComponent,
    AsctbCompareComponent,
    AsctbCompareSidebarComponent,
    AsctbTableViewComponent,
    AsctbTreeViewComponent,
    AsctbScatterplotViewComponent,
    AsctbTreemapViewComponent,
    ColorLegendComponent,
    AsctbGenerateComponent,
    DatasetLinkagesComponent,
    ApiKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,

    /* Material modules */
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
