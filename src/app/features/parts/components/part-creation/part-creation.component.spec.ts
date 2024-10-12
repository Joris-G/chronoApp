import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCreationComponent } from './part-creation.component';

describe('PartCreationComponent', () => {
  let component: PartCreationComponent;
  let fixture: ComponentFixture<PartCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
