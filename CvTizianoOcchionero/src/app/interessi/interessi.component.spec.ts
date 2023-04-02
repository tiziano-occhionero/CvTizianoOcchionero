import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteressiComponent } from './interessi.component';

describe('InteressiComponent', () => {
  let component: InteressiComponent;
  let fixture: ComponentFixture<InteressiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteressiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteressiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
