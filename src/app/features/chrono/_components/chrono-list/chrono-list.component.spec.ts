import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoListComponent } from './chrono-list.component';

describe('ChronoListComponent', () => {
  let component: ChronoListComponent;
  let fixture: ComponentFixture<ChronoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
