import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoItemComponent } from './chrono-item.component';

describe('ChronoItemComponent', () => {
  let component: ChronoItemComponent;
  let fixture: ComponentFixture<ChronoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
