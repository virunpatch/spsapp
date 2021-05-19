import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slides') slides: IonSlides;
  slideOptions = {
    initialSlide: 1,
    speed: 600,
  };

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  constructor() {}
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
