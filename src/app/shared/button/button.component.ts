import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text;

  @Output() clickBtn = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  click() {
    this.clickBtn.emit({ type: 'button', name: this.text });
  }

}
