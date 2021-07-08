import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  populateForm(selectRecord:PaymentDetail){
    this.service.formData = Object.assign({}, selectRecord);
  }

  deleteRecord(id:number){
    if(confirm("Are you sure you want to delete this")){
      this.service.deletePaymentDetail(id)
    .subscribe(
      res =>{    
        console.log("hi ")    
        this.toastr.error("Deleted Successfully", "Payment")
        this.service.refreshlist()
      },
      err=>{
        console.log("hi2 ")  
        console.log(err)
      }
    )
    }

  }

}
