import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { RekordCardModule } from '../rekord/card/rekord-card.module';
import { FavoriteCardModule } from '../favorite/card/favorite-card/favorite-card.module';
import { ElsoCardModule } from '../elso/card/elso-card.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { NavModule } from '../nav/nav.module';
import { DetailsModule } from '../details/details.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RekordAddModule } from '../rekord/add/rekord-add/rekord-add.module';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';




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
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RekordAddModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
