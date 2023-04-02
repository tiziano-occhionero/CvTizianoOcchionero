import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiconoscimentiComponent } from './riconoscimenti.component';

describe('RiconoscimentiComponent', () => {
  let component: RiconoscimentiComponent;
  let fixture: ComponentFixture<RiconoscimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiconoscimentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiconoscimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
