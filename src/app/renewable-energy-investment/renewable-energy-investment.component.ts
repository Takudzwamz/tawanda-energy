import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-renewable-energy-investment',
  templateUrl: './renewable-energy-investment.component.html',
  styleUrls: ['./renewable-energy-investment.component.scss']
})
export class RenewableEnergyInvestmentComponent implements OnInit {

  constructor(private title: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('Renewable Energy Investment');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Renewable Energy Investment',
    });
  }

}
