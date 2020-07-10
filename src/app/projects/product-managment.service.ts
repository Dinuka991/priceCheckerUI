import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductManagmentService {
 

  constructor(protected httpClient: HttpClient) { }
  getAllproducts(requestObj?: any): Observable <any> {
    let params = new HttpParams();
    params = requestObj.productId ? params.append('productId' , requestObj.productId) : params;
    params = requestObj.productName ? params.append('productName' , requestObj.producteName) : params;
    return this.httpClient.get<any>( 'product-service/api/products' , { params });
  }

  getPrice(requestObj: any ): Observable<any>{
    return this.httpClient.put<any>('magnify-services/api/calculate-price'  ,  requestObj);
  }
}
