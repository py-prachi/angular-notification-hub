import { Component, OnInit } from '@angular/core';
import { InputFieldComponent } from "../shared/input-field/input-field.component";
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-email-integration',
  standalone: true,
  imports: [CommonModule, InputFieldComponent,FormsModule,ReactiveFormsModule, MatInputModule,MatFormFieldModule, MatButtonModule],
  templateUrl: './email-integration.component.html',
  styleUrls: ['./email-integration.component.css']
})
export class EmailIntegrationComponent implements OnInit {
  emailForm!:FormGroup ;

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      hostName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      port: new FormControl('', [Validators.required, Validators.maxLength(4)]),

    })
  }

  onSubmit():void {
    if(this.emailForm?.valid){
      console.log(this.emailForm.value);
    }
  }

}
