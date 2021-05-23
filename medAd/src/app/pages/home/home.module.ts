import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { RekordCardModule } from '../rekord/card/rekord-card.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SplashScreenModule,
    RekordCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
