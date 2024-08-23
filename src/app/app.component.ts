import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { OrgSettingComponent } from './org-setting/org-setting.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, CreateOrganizationComponent, OrgSettingComponent, HeaderComponent, SideNavigationComponent, IntegrationsComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-notification-hub';
  isCreateOrganisationPage: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCreateOrganisationPage = event.urlAfterRedirects === '/create-organisation';
      }
    });
  }

}
