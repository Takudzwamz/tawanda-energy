import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


  constructor(private title: Title,
              private metaTagService: Meta,
              private canonicalService: CanonicalService) { }

  ngOnInit(): void {
    this.canonicalService.setCanonicalURL();
    this.title.setTitle('About Us');
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Learn more about us',
    });
  }

}
