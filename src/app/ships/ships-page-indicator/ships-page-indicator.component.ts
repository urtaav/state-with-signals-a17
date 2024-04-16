import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageIndicadorComponent } from '../../base/page-indicador/page-indicador.component';
import { ShipsStore } from '../ships.store';

@Component({
  selector: 'app-ships-page-indicator',
  standalone: true,
  imports: [PageIndicadorComponent],
  template: `<app-page-indicador [page]="store.$page()"/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsPageIndicatorComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
