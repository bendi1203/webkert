import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { RekordCardModule } from '../rekord/card/rekord-card.module';
import { FavoriteCardModule } from '../favorite/card/favorite-card/favorite-card.module';
import { ElsoCardModule } from '../elso/card/elso-card.module';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { NavModule } from '../nav/nav.module';
import { DetailsModule } from '../details/details.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SplashScreenModule,
    RekordCardModule,
    FavoriteCardModule,
    ElsoCardModule,
    LoginModule,
    RegisterModule,
    NavModule,
    DetailsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
