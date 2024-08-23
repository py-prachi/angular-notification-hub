import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericButtonComponent } from '../generic-button/generic-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-integration-box',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, RouterModule],
  templateUrl: './integration-box.component.html',
  styleUrls: ['./integration-box.component.css']
})
export class IntegrationBoxComponent {
 @Input() icon: string | undefined
 @Input() name: string = '';
 @Input() routerLink?:string[];

 @Output() activate = new EventEmitter<void>();

 onActivate():void{
  this.activate.emit();
 }




}
