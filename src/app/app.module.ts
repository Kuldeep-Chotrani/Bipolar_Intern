import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule,} from '@angular/material/tabs';
import {  MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import {  MatListModule} from  '@angular/material/list';
import {  MatButtonModule} from  '@angular/material/button';
import { ApiService } from './api.service';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from "@angular/common/http";
import { Gallery2Component } from './gallery2/gallery2.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RandomComponent } from './random/random.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    Gallery2Component,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
