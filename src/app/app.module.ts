import { appRoutes } from './route';
import { RouterModule } from '@angular/router';
import { ErrorInterceptor } from './services/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuesComponent } from './values/values.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';
import { NavbarComponent } from './navbar/navbar.component';
/* START home */
import { HomeComponent } from './home/home.component';

import { IntroCardsComponent } from './home/intro-cards/intro-cards.component';
import { FooterCustomComponent } from './home/footer-custom/footer-custom.component';
import { CustomCarouselComponent } from './home/custom-carousel/custom-carousel.component';
/* END home */
@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent, IntroCardsComponent, CustomCarouselComponent, FooterCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService, ErrorInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
