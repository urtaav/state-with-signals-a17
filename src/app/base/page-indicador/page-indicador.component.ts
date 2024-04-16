import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-indicador',
  standalone: true,
  template: `Page: {{page()+1}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageIndicadorComponent {
  page = input.required<number>();

}
