import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { RandomComponent } from './random/random.component';
const routes: Routes = [ {path: '', redirectTo: '/gallery', pathMatch: 'full'},
{ path: 'gallery', component: GalleryComponent },
{ path: 'gallery2', component: Gallery2Component },
{ path: 'gallery3', component: RandomComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
