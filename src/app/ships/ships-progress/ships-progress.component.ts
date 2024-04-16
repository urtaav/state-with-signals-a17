import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListProgressComponent } from '../../base/list-progress/list-progress.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-progress',
  standalone: true,
  imports: [ListProgressComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-list-progress [page]="store.$page()" [pageSize]="store.$pageSize()" [total]="store.$items().length"
    [disabled]="store.$loading()" />
  `
})
export class ShipsProgressComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
