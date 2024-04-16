import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageIndicadorComponent } from '../../base/page-indicador/page-indicador.component';
import { PlanesStore } from '../planes.store';

@Component({
  selector: 'app-planes-page-indicator',
  standalone: true,
  imports: [PageIndicadorComponent],
  template: `<app-page-indicador [page]="store.$page()"/>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesPageIndicatorComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
