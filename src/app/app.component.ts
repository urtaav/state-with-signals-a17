import { Component, inject } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AppStore } from './app.store';
import { PlanesComponent } from './planes/planes.component';
import { ShipsComponent } from './ships/ships.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    TabViewModule,
    NavbarComponent,
    PlanesComponent,
    ShipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly store = inject(AppStore);
}
