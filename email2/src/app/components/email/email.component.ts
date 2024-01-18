import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { log } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  flag:boolean=true;



  data={
    receiver:"",
    subject:"",
    message:""
  }

  constructor(private email:EmailService, private snack: MatSnackBar){}

  doSubmitForm(){
    console.log("trying to submit form");
    console.log("DATA",this.data);

    if(this.data.receiver=='' || this.data.message=='' || this.data.subject==''){
      this.snack.open("Cannot be empty! ","OK");
      return;
    }

    this.flag=false;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=true;
        this.snack.open("Sent success! ","OK");
      },
      error=>{
        console.log(error);
        this.flag=true;
        this.snack.open("Error !!!","cancle");
      }
    )
  }

}
