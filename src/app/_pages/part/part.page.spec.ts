import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartPage } from './part.page';

describe('PartPage', () => {
  let component: PartPage;
  let fixture: ComponentFixture<PartPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
