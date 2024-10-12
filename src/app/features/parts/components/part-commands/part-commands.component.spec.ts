import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCommandsComponent } from './part-commands.component';

describe('PartCommandsComponent', () => {
  let component: PartCommandsComponent;
  let fixture: ComponentFixture<PartCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartCommandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
