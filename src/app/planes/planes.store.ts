import { inject, Injectable, signal } from "@angular/core";
import { createEffect } from "../create-effect";
import { debounceTime, tap } from "rxjs";
import { AppStore } from "../app.store";
import { PaginatorState } from "primeng/paginator";

@Injectable()
export class PlanesStore {
  private readonly appStore = inject(AppStore);
  private readonly state = {
    $page: signal<number>(0),
    $pageSize: signal<number>(10),
    $displayDescriptions: signal<boolean>(false),
  } as const;

  public readonly $items = this.appStore.$planes;
  public readonly $loading = this.appStore.$loadingPlanes;
  public readonly $page = this.state.$page.asReadonly();
  public readonly $pageSize = this.state.$pageSize.asReadonly();
  public readonly $displayDescriptions = this.state.$displayDescriptions.asReadonly();

  public readonly paginated = createEffect<any>(_ => _.pipe(
    debounceTime(200),
    tap((event:PaginatorState) => {
      this.state.$page.set(event.page!);
      this.state.$pageSize.set(event.rows!);
    })
  ));

  setDisplayDescriptions(display: boolean) {
    this.state.$displayDescriptions.set(display);
  }
}