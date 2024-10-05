import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public constructor(private authService:AuthService){}

  search() {

  }

  toggleSearch() {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.classList.toggle('d-none');
      }
  }
  logout(){
    this.authService.logout();
  }
}
