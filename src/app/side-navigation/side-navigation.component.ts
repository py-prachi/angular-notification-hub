import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { IntegrationsComponent } from '../integrations/integrations.component';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [RouterModule,CommonModule, IntegrationsComponent],
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  companyName: string = '';
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('org').subscribe((orgState) => {
      this.companyName = orgState.orgName;
    });
  }

}
