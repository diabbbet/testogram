import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder = 'enter data';
  @Input() select: string;

  @Output() changeInput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  inputChange(event) {
    this.changeInput.emit({ type: 'input', name: this.placeholder, value: event.target.value })
  }

  selectChange(event) {
    this.changeInput.emit({ type: 'input', name: this.select, value: event.target.value })
  }

  inputKeydown(event) {
    console.log(event);

    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode === 189 || event.keyCode === 187 ) {
      return false;
    }
  }

}
