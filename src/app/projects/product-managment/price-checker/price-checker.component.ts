import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ProductManagmentService } from '../../product-managment.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './price-checker.component.html',
  styleUrls: ['./price-checker.component.css']
})
export class PriceCheckerComponent implements OnInit {
  
  productName: string;
  productList: string [] = ['Penguin-ears' , 'Horseshoe'];
  employeeFname: string;
  employeeLname: string;
  priceForm: FormGroup;
  saveInProcess: boolean;
  showProgressBar: boolean;
  showFormContent: boolean;
  priceData: any;
  totalPrice: any;

  constructor(private fb: FormBuilder , private productManagmentService: ProductManagmentService ,  
              private dialogRef: MatDialogRef<PriceCheckerComponent>
            ) {
      this.priceForm = fb.group({
         productName: [''],
         productId: [''],
         numberOfCarton: [''],
         numberOfUnits: [''],       
      });
   }

  ngOnInit() {

  }
  findPrice() {

    const requestObj = {
      productId: this.priceForm.value.productId,
      appointmentId: this.priceForm.value.numberOfUnits,
      numberOfCarton: this.priceForm.value.numberOfCarton
      
    };
    this.saveInProcess = true;
    this.showProgressBar = true;
    this.showFormContent = false;

    this.productManagmentService.getPrice(requestObj)
      .subscribe((response: any) => {
        this.saveInProcess = false;
        this.priceData = response.response;
        this.totalPrice = this.priceData.totalPrice;
      
    
        this.showProgressBar = false;
        this.showFormContent = true;
      },
        error => {
          this.saveInProcess = false;
          this.showProgressBar = false;
          this.showFormContent = true;

        });
  }
  cancel() {
    this.dialogRef.close();
  }

}
