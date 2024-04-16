import { Component, EventEmitter, inject, Input, input, Output, output, signal } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ItemsListStore } from './items-list.store';
import { Item } from '../../types';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [AccordionModule,PaginatorModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
  providers:[ItemsListStore]
})
export class ItemsListComponent {
  protected readonly store = inject(ItemsListStore);

  @Input({ required: true })
  set allItems(allItems: Item[]) {
    this.store.$allItems.set(allItems);
  }

  @Input() set page(page: number) {
    this.store.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.store.$pageSize.set(pageSize);
  }

  @Input() displayDescriptions: boolean = false;

  @Input() disabled: boolean = false;

  @Output() pagination = new EventEmitter<any>();


  first = signal<number>(this.store.$page());

  rows = signal<number>( this.store.$pageSize());


  onPageChange(event: PaginatorState) {
      this.first.set(event.first!);
      this.rows.set(event.rows!);
      this.pagination.emit(event)
  }

  protected setSelected(item: Item, selected: boolean) {
    this.store.setSelected({ item, selected });
  }

}
