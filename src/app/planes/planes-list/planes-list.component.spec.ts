import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesListComponent } from './planes-list.component';

describe('PlanesListComponent', () => {
  let component: PlanesListComponent;
  let fixture: ComponentFixture<PlanesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
