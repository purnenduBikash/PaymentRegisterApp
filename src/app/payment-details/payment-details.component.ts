import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from '../payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent,CommonModule],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{
  constructor(public service:PaymentDetailService){

}
  ngOnInit(): void {debugger;
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){debugger;
    if(confirm('Are you sure that you want to delete'))
    this.service.deletePaymentDetail(id)
      .subscribe({
        next:res=>{
          this.service.list = res as PaymentDetail[];
          
        },
        error:err=>{
          console.log(err);
        }
      })
  }
}
