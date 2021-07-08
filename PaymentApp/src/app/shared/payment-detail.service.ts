import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import{HttpClient} from"@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }
  // readonly baseURL = "http://localhost:63798//api/PaymentDetail";
  formData:PaymentDetail = new PaymentDetail();
  list:PaymentDetail[];
  readonly baseURL = 'http://localhost:63798/api/PaymentDetail';
  postPaymentDetail(){
   return this.http.post(this.baseURL, this.formData)
  }
  putPaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData)
   }

  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
