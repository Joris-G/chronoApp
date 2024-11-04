import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoCommandsComponent } from './chrono-commands.component';

describe('ChronoCommandsComponent', () => {
  let component: ChronoCommandsComponent;
  let fixture: ComponentFixture<ChronoCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoCommandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronoCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
