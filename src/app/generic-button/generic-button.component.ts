import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [],
  templateUrl: './generic-button.component.html',
  styleUrl: './generic-button.component.css'
})
export class GenericButtonComponent {
  @Input() text:string ='';
  @Output() click: EventEmitter<void> = new EventEmitter<void> ();

  onClick():void{
    this.click.emit();
  }}
