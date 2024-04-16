import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-list-progress',
  standalone: true,
  imports: [ProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p-progressBar [value]="$progress()" [showValue]="false"></p-progressBar>
  `,
})
export class ListProgressComponent {
  protected readonly $total = signal<number>(0);
  protected readonly $page = signal<number>(0);
  protected readonly $pageSize = signal<number>(10);
  protected readonly $progress = computed<number>(() => {

    console.log(this.$page())
    if (this.$pageSize() < 1 || this.$total() < 1) {
      return 0;
    }
    const totalPages = Math.ceil(this.$total() / this.$pageSize()); // Calcula el número total de páginas redondeando hacia arriba
    if (this.$page() === totalPages) {
        return 100; // Si estamos en la última página, el progreso es 100%
    }


return 100 * (this.$page() / totalPages);
  });

  @Input({ required: true })
  set total(total: number) {
    this.$total.set(total);
  }

  @Input() set page(page: number) {
    this.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.$pageSize.set(pageSize);
  }

  @Input() disabled: boolean = false;
  
}
