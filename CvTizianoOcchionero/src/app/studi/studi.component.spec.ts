import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiComponent } from './studi.component';

describe('StudiComponent', () => {
  let component: StudiComponent;
  let fixture: ComponentFixture<StudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
