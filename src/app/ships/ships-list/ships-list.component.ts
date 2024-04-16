import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemsListComponent } from '../../base/items-list/items-list.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-list',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './ships-list.component.html',
  styleUrl: './ships-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
