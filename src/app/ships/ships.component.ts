import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ShipsListComponent } from './ships-list/ships-list.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ShipsPageIndicatorComponent } from './ships-page-indicator/ships-page-indicator.component';
import { ShipsProgressComponent } from './ships-progress/ships-progress.component';
import { ShipsStore } from './ships.store';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    InputSwitchModule,
    ShipsListComponent,
    ShipsPageIndicatorComponent,
    ShipsProgressComponent

  ],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ShipsStore,
  ]
})
export class ShipsComponent {}
