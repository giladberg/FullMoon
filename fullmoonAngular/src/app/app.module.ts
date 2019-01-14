import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';
import { EventsComponent } from './events/events.component';
import { EquipmentForRentComponent } from './equipment-for-rent/equipment-for-rent.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './dannyinterface/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderPictureSectionComponent,
    EventsComponent,
    EquipmentForRentComponent,
    CustomersComponent,
    AboutUsComponent,
    GalleryComponent,
    HomeComponent,
    ContactUsComponent,
    AlbumComponent,
    PhotosComponent,
    LoginComponent,

   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'fullmoon-angular' })

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
