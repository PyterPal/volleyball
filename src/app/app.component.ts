import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn();
  mobile = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.mobile = document.documentElement.clientWidth <= 1024 ? true : false;
  }

  logout() {
    this.authService.logout();
  }
}
