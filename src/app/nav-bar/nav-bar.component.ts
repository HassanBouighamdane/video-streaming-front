import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  search() {

  }

  toggleSearch() {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.classList.toggle('d-none');
      }
  }
}
