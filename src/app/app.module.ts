import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTableModule } from '@angular/material/table';

import { ArticlesComponent } from './articles/articles.component';
import { GraphQLModule } from './graphql.module';

import { MarkdownModule } from 'ngx-markdown';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterDetailsComponent } from './footer-details/footer-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RenewableEnergyInvestmentComponent } from './renewable-energy-investment/renewable-energy-investment.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,

    NavBarComponent,
    ContactUsComponent,

    ArticlesComponent,

    FooterDetailsComponent,
    AboutUsComponent,
    RenewableEnergyInvestmentComponent,

  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 47,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showTitle : true,
    }),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    GraphQLModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
