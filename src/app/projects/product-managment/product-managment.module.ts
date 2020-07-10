import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductManagmentComponent } from './product-managment.component';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductManagmentService } from '../product-managment.service';
import { PriceCheckerComponent } from './price-checker/price-checker.component';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [ProductManagmentComponent, PriceCheckerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatRadioModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ProductManagmentComponent
      }
    ])
    
  ],
  providers: [
    {
      provide: 'app-employee-managment',
      useValue: ProductManagmentComponent
    },
    ProductManagmentService,
  ],
  exports: [ProductManagmentComponent],
  entryComponents: [PriceCheckerComponent],

})
export class ProductManagmentModule { }
