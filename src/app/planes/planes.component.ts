import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PlanesListComponent } from './planes-list/planes-list.component';
import { PlanesStore } from './planes.store';
import { InputSwitchChangeEvent, InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, NgModel } from '@angular/forms';
import { PlanesPageIndicatorComponent } from './planes-page-indicator/planes-page-indicator.component';
import { PlanesProgressComponent } from './planes-progress/planes-progress.component';
@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [
    FormsModule,
    CardModule, 
    PlanesListComponent,
    InputSwitchModule,
    PlanesPageIndicatorComponent,
  PlanesProgressComponent],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PlanesStore
  ]
})
export class PlanesComponent {
  protected readonly store = inject(PlanesStore);

  public checked = false;

  displayDescriptions = ({checked}:InputSwitchChangeEvent) => {
    this.store.setDisplayDescriptions(checked);
  }
}
