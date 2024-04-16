import { ChangeDetectionStrategy, Component, inject, SkipSelf } from '@angular/core';
import { ItemsListComponent } from '../../base/items-list/items-list.component';
import { PlanesStore } from '../planes.store';

@Component({
  selector: 'app-planes-list',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './planes-list.component.html',
  styleUrl: './planes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesListComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
