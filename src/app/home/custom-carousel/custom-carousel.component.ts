import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css']
})
export class CustomCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // slider
    $(function () {
      'use strict';
      const wing = $(window).height(),
        upperh = $('.navbar').innerHeight();
      $('.slider , .carousel-item').height(wing - upperh);
    });
    // End Slider
  }


}
