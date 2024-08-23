import { Routes } from '@angular/router';
import { OrgSettingComponent } from './org-setting/org-setting.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { EmailIntegrationComponent } from './email-integration/email-integration.component';

export const routes: Routes = [
    { path: '', redirectTo: '/create-organization', pathMatch: 'full' },
    { path: 'create-organisation', component: CreateOrganizationComponent},
    { path: 'org-setting', component: OrgSettingComponent },
    { path: 'integrations', component: IntegrationsComponent },
    { path: 'integrations/email', component: EmailIntegrationComponent}
    
];
