import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoHeaderComponent } from './chrono-header.component';

describe('ChronoHeaderComponent', () => {
  let component: ChronoHeaderComponent;
  let fixture: ComponentFixture<ChronoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
