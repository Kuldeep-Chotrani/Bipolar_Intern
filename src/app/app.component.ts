import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bipolar-intern';
  navLinks: any[];
activeLinkIndex = -1;
constructor(private router: Router) {
this.navLinks = [
{
label: 'ROSES',
link: './gallery',
index: 0
}, {
label: 'CATS',
link: './gallery2',
index: 1
},
{
  label: 'Random',
  link: './gallery3',
  index: 2
  },];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
  this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }  
  
}
