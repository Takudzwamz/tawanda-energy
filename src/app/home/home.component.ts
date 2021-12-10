import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CanonicalService } from '../services/canonical.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORIES_QUERY from '../apollo/queries/category/categories';
import { Subscription } from 'rxjs';

// import * as dataJSON from './carousel_images.json';
/**
 * @title Basic cards
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  private queryCategories: Subscription;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    config: NgbCarouselConfig,
    private title: Title,
    private apollo: Apollo,
    private canonicalService: CanonicalService
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.interval = 8000; // images change in 8sec //
    config.wrap = true; // autometically redirect to first image //
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public images = [
    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639135303/1639134625414_alauuv.png',

    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639135303/1639134777604_dywlbp.png',

    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639134249/1639134109178_zabd4y.png',

    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639135302/1639134745907_brrc8u.png',
  ];
  titles = ['iOS', 'Android', 'Web Apps', 'Cross-platform Apps'];
  discription = [
    'iOS mobile applications',
    'Android mobile applications',
    'Any type of website',
    'Same app working on iOS, Android and Web ',
  ];
  public foto = [
    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639156332/khumba-energy-innovation-meets-sustainable-energy_uofgyd.png',

    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639156332/khumba-energy-360-sustainable-solutions_b8ouha.png',
    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639157125/kisspng-recycling-symbol-reuse-waste-minimisation-energy-and-environmental-protection-5a92ced8e34617.1049894015195706489309_1_l4diwe.png',

    'https://res.cloudinary.com/sputnik-tech/image/upload/v1639156887/5a28c3c29baeb2.6895204515126209946377_rqpq5x.png',

    
  ];
  zaglavanie = ['iOS', 'Android', 'Web Apps', 'Cross-platform Apps'];
  opisaniye = [
    'iOS mobile applications',
    'Android mobile applications',
    'Any type of website',
    'Same app working on iOS, Android and Web ',
  ];

 

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Takudzwa Mupanesure (Sputnik Tech)');
    this.queryCategories = this.apollo
      .watchQuery({
        query: CATEGORIES_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  ngOnDestroy() {
    this.queryCategories.unsubscribe();
  }
}




