import { Component } from '@angular/core';
import { IntegrationBoxComponent } from '../integration-box/integration-box.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [IntegrationBoxComponent,CommonModule, RouterModule],
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent {
  constructor(private router:Router){}
  activeIntegrations: Integration[] = [];
  availableIntegrations: Integration[] = [{name: 'Email', icon: ''},{name:'Slack', icon: ''}, {name:'Push', icon: ''}] ;

  handleActivate(integrationName:String):void{
    // if(integrationName.toLowerCase() === 'email'){
    //   this.router.navigate(['/integrations/email'])
    // }
    console.log(`Activated ${integrationName}`)

  }

  getRouterLink(integrationName: string): string[] {
    switch (integrationName.toLowerCase()) {
      case 'email':
        return ['/integrations/email'];
      case 'slack':
        return ['/integrations/slack'];
      case 'push':
        return ['/integrations/push'];
      default:
        return [];
    }
  }

}
interface Integration {
  name: string;
  icon: string;
}