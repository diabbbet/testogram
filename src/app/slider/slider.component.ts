import { Component, OnInit } from '@angular/core';
import { SliderService } from '../services/slider.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  count = '5';
  size = '120';
  cornerRadius = '12';
  cornerRadiusType = 'px';
  backgrounds = [];
  activeIndex = 0;

  controllsConfig = [
    { type: 'button', name: 'prev', half: true },
    { type: 'button', name: 'next', half: true },
    { type: 'button', name: 'add square', half: false },
    { type: 'input', name: 'size', half: false },
    { type: 'input', name: 'corner radius', half: false, select: 'select' }
  ];

  constructor(
    private sliderService: SliderService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.count) {
        this.count = params.count;
      }

      this.generateBackgrounds(this.count);
    });
  }

  actioncontroll(event) {
    if (event.type === 'button') {
      switch (event.name) {
        case 'prev':
          this.moveEvent(-1);
          break;

        case 'next':
          this.moveEvent(1);
          break;

        case 'add square':
          this.generateBackgrounds('1');
          break;
      }

    } else if (event.type === 'input') {
      switch (event.name) {
        case 'size':
          if (event.value !== '') {
            this.size = event.value;
          }
          break;

        case 'corner radius':
          if (event.value !== '') {
            this.cornerRadius = event.value;
          }
          break;

        case 'select':
          this.cornerRadiusType = event.value;
          break;
      }
    }
  }

  generateBackgrounds(count) {
    this.sliderService.getRandomPhoto(count).subscribe(res => {
      const backgrounds = res.map(item => this.sanitizer.bypassSecurityTrustStyle(`url(${item.urls.small})`));
      this.backgrounds = [...backgrounds, ...this.backgrounds];
    });
  }

  moveEvent(value) {
    let activeIndex = this.activeIndex + value;
    if (activeIndex < 0) {
      activeIndex = 0
    }
    if (activeIndex > (this.backgrounds.length - 1)) {
      activeIndex = this.backgrounds.length - 1;
    }
    this.activeIndex = activeIndex;

  }
}