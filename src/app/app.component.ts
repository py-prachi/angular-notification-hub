import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { InputFieldComponent } from './shared/input-field/input-field.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateOrganizationComponent,InputFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-notification-hub';
}
