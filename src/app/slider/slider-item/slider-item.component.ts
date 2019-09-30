import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnChanges {

  @Input() background: string;
  @Input() size: string;
  @Input() cornerRadius: string;
  @Input() cornerRadiusType: string;

  constructor() { }

  ngOnChanges() {
  }

}
