import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsProgressComponent } from './ships-progress.component';

describe('ShipsProgressComponent', () => {
  let component: ShipsProgressComponent;
  let fixture: ComponentFixture<ShipsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
