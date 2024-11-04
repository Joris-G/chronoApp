import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoContentComponent } from './chrono-content.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ChronoContentComponent', () => {
  let component: ChronoContentComponent;
  let fixture: ComponentFixture<ChronoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChronoContentComponent, HttpTestingController],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChronoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
