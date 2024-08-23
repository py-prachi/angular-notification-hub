
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-org-setting',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './org-setting.component.html',
  styleUrls: ['./org-setting.component.css']
})
export class OrgSettingComponent implements OnInit {
  orgName:string  = ''
  orgKey:string  = '';
  isKeyVisible:boolean = false;

constructor(private store: Store<AppState> ,private snackBar: MatSnackBar){}

ngOnInit(): void {
  this.store.select('org').subscribe((orgState)=>{
   this.orgName = orgState.orgName
   this.orgKey = orgState.orgKey
  })
}

toggleKeyVisibility(){
  this.isKeyVisible = !this.isKeyVisible;
}

copyOrgKey() {
  navigator.clipboard.writeText(this.orgKey).then(() => {
    this.snackBar.open('Org Key copied', 'Close', {
      duration: 3000,
    });
  });
}

}
