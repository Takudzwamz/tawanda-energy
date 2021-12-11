import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private metaTagService: Meta) {}


  ngOnInit(): void {
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Tawanda Energy, Biogas, Energy, Renewable, biofuels, petrochemicals, climate, Zim, Zimbabwe, Mutare, Solar, Electricity, Power, Tawanda, Sustainable, Global warming, Recycle, Waste, Recycling, Environmental friendly',
      },
      { name: 'robots', content: 'index, follow' },
      
      {
        name: 'description',
        content:
          'Tawanda Energy is a developer, owner and operator of waste to energy renewable power assets in Zimbabwe and is positioned to become a key player in the energy transition sector in Africa, by providing services directly to the general public or as a wholesaler to public operators.',
      },
      { name: 'author', content: 'Sputnik Tech' },
      { name: 'twitter:card', content: 'Tawanda Energy' },
      {
        name: 'twitter:title',
        content:
          'Tawanda Energy',
      },
      {
        name: 'twitter:description',
        content:
          'Tawanda Energy is a developer, owner and operator of waste to energy renewable power assets in Zimbabwe and is positioned to become a key player in the energy transition sector in Africa, by providing services directly to the general public or as a wholesaler to public operators.',
      },
    ]);
  }
}
