import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }
  

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailId == 0){
      this.insertRecord(form)
    }
    else{
      this.updateRecord(form)
    }
    
  }
  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{
               this.resetForm(form),
               this.toastr.success("Payment Submitted Successfully",'Payment')
               this.service.refreshlist()
      },
      err =>{console.log("there eerror",err);}
    );
  }

  updateRecord(form:NgForm){
    this.service.putPaymentDetail().subscribe(
      res=>{
               
               this.resetForm(form)
               this.toastr.info("Payment Updated Successfully",'Payment')
               this.service.refreshlist()
               
      },
      err =>{console.log("there eerror",err);}
    );
  }

  resetForm(form:NgForm){
    form:form.reset();
    this.service.formData = new PaymentDetail();
  }

}
