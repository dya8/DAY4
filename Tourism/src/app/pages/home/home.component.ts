import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }




  cimages = [{
    id: 1,
    alt: 'eastern states',
    src: 'mp.jpeg' 
  }, {
    id: 2,
    alt: 'Andra pradesh',
    src: '7sisters.jpeg'
  }, {
    id: 3,
    alt: 'bihar',
    src: 'Ap.jpeg'
  }

  ]
carousel: any;
}
