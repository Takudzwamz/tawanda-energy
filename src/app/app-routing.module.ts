import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { FooterDetailsComponent } from './footer-details/footer-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RenewableEnergyInvestmentComponent } from './renewable-energy-investment/renewable-energy-investment.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ArticlesComponent,
  },
  {
    path: 'tawanda-energy',
    component: FooterDetailsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'renewable-energy-investment',
    component: RenewableEnergyInvestmentComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
