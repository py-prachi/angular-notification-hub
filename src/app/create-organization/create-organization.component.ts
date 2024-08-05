import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from "../shared/input-field/input-field.component";


@Component({
  selector: 'app-create-organization',
  standalone: true,
  imports: [CommonModule, FormsModule, InputFieldComponent],
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css'] 
 
})
export class CreateOrganizationComponent {

  firstName: string = '';
  lastName: string = '';
  companyName :string ='';
  constructor(private http: HttpClient,private snackBar: MatSnackBar){}

  handleSubmit(){
    console.log("Submit button clicked!")
    if (!this.firstName || !this.companyName) {
      alert('First Name and Company Name are required!');
      return;
    }
    const payload = { name: this.companyName };
    console.log("data from screen",this.firstName,this.lastName,this.companyName)

    const headers = new HttpHeaders({
      'X-ADMIN-KEY': 'wHd/pKirYoOa0WoHt2nJOQ=='
    });

    this.http.post('http://localhost:4000/api/organisation', payload, { headers }).subscribe({
      next: (response) => {
        console.log('Response:', response);
        if (response) {
          this.snackBar.open('Organization created successfully!', 'Close', {
            duration: 3000,
          });
         // this.orgForm.resetForm();
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.snackBar.open('Failed to create organization.', 'Close', {
          duration: 3000,
        });
      },
      complete: () => {
        console.log('Request completed.');
      }
    });

  }

}
