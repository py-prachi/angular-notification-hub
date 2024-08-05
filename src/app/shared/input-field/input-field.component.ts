import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
@Input() label: string  = '';
@Input() id: string='';
@Input() placeholder: string='';
@Input() value: string='';
@Input() required: boolean = false;
@Output() valueChange:EventEmitter<string> = new EventEmitter<string>();

onInputChange(value: string) {
  this.valueChange.emit(value);
}

}
