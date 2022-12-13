import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDerivativeComponent } from './engineer-derivative.component';

describe('EngineerDerivativeComponent', () => {
  let component: EngineerDerivativeComponent;
  let fixture: ComponentFixture<EngineerDerivativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerDerivativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerDerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
