import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProductManagmentService } from '../product-managment.service';
import { PriceCheckerComponent } from './price-checker/price-checker.component';

@Component({
  selector: 'app-product-managment',
  templateUrl: './product-managment.component.html',
  styleUrls: ['./product-managment.component.css']
})
export class ProductManagmentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  empForm: FormGroup;
  productName: string;
  productList: string [] = ['Penguin-ears' , 'Horseshoe'];
  employeeName: string;
  employeeMobile: string;
  productId: number;
  employeeEmail: string;
  employeeDate: Date;
  displayedColumns: string[] = ['productId', 'productName', 'cartonSize' , 'cartonPrice' , 'unitPrice'];
  dataSource = new MatTableDataSource<Product>();
  showProgressBar: boolean;
  totalCount: number;
  searchResultMessage: any;
  constructor(public dialog: MatDialog ,private fb: FormBuilder , private productManagmentService: ProductManagmentService) {
      this.empForm = fb.group({
        productId: null,
        productName: null,
       
      });
   }
  ngOnInit() {
    console.log('dd');
    this.empForm.get('productId').setValue('');
    this.empForm.get('productName').setValue('');
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 10;
    this.load();
  }
  load() {
    this.getObnContacts();
  }
  getObnContacts() {
    this.dataSource.data = [];
    this.showProgressBar = true;

    const requestObj = {
      first:  this.paginator.pageIndex + '',
      maxResult: this.paginator.pageSize + '',
    };

    if (this.empForm.value.employeeName) {
      requestObj["productName"] = this.empForm.get('productName').value.trim();
    }
    if (this.empForm.value.employeeMobile) {
      requestObj["productId"] = this.empForm.get('productId').value.trim();
    }
    this.productManagmentService.getAllproducts(requestObj)
      .subscribe((data: any) => {
        if (data) {
            if (data.totalElements === 0) {
               this.totalCount = 0;
               this.showProgressBar = false;
            } else {
            this.dataSource.data = data.content as Product[];
            this.totalCount = data.totalElements || this.totalCount;
            console.log(this.totalCount);
            this.showProgressBar = false;
            }
        }
      },
        error => {
          this.totalCount = 0;
          this.searchResultMessage = error.message ? error.message : JSON.stringify(error);
        });
  }
  openCreateDialog(): void{
    const dialogRef = this.dialog.open(PriceCheckerComponent, {
      width: '95%',
      maxWidth: '95vw',
      maxHeight: '95vh',
      disableClose: true,
     
    });
    dialogRef.afterClosed().subscribe(result => {
    } )
  }

}
export interface Product{

  productId: number;
  productName: string;
  cartonSize: number;
  cartonPrice: number;
  unitPrice: number;
}