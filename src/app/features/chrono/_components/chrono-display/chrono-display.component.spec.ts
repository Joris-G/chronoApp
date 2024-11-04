import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoDisplayComponent } from './chrono-display.component';

describe('ChronoDisplayComponent', () => {
  let component: ChronoDisplayComponent;
  let fixture: ComponentFixture<ChronoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
