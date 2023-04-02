import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioeditorialeComponent } from './portfolioeditoriale.component';

describe('PortfolioeditorialeComponent', () => {
  let component: PortfolioeditorialeComponent;
  let fixture: ComponentFixture<PortfolioeditorialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioeditorialeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioeditorialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
