import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAnalyseComponent } from './step-analyse.component';

describe('StepAnalyseComponent', () => {
  let component: StepAnalyseComponent;
  let fixture: ComponentFixture<StepAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
