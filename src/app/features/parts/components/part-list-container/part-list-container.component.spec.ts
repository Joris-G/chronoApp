import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListContainerComponent } from './part-list-container.component';

describe('PartListContainerComponent', () => {
  let component: PartListContainerComponent;
  let fixture: ComponentFixture<PartListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
