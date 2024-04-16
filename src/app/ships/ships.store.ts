import { inject, Injectable, signal } from "@angular/core";
import { AppStore } from "../app.store";
import { createEffect } from "../create-effect";
import { PaginatorState } from "primeng/paginator";
import { debounceTime, tap } from "rxjs";

@Injectable()
export class ShipsStore {
  private readonly appStore = inject(AppStore);
  private readonly state = {
    $page: signal<number>(0),
    $pageSize: signal<number>(10),
    $displayDescriptions: signal<boolean>(false),
  } as const;

  public readonly $items = this.appStore.$ships;
  public readonly $loading = this.appStore.$loadingShips;
  public readonly $page = this.state.$page.asReadonly();
  public readonly $pageSize = this.state.$pageSize.asReadonly();
  public readonly $displayDescriptions = this.state.$displayDescriptions.asReadonly();

  public readonly paginated = createEffect<any>(_ => _.pipe(
    debounceTime(250),
    tap((event:PaginatorState) => {
      this.state.$page.set(event.page!);
      this.state.$pageSize.set(event.rows!);
    })
  ));
}