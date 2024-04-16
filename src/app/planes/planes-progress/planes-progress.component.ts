import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlanesStore } from '../planes.store';
import { ListProgressComponent } from '../../base/list-progress/list-progress.component';

@Component({
  selector: 'app-planes-progress',
  standalone: true,
  imports: [ListProgressComponent],
  templateUrl: './planes-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesProgressComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
