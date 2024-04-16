import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsListComponent } from './ships-list.component';

describe('ShipsListComponent', () => {
  let component: ShipsListComponent;
  let fixture: ComponentFixture<ShipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
