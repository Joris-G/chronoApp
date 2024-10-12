import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListFilterComponent } from './part-list-filter.component';

describe('PartListFilterComponent', () => {
  let component: PartListFilterComponent;
  let fixture: ComponentFixture<PartListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartListFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
