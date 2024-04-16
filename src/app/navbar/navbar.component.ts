import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppStore } from '../app.store';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected readonly store = inject(AppStore);
  
  protected reset() {
    this.store.generateAll();
  }
}
