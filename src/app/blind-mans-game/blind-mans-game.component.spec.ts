import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindMansGameComponent } from './blind-mans-game.component';

describe('BlindMansGameComponent', () => {
  let component: BlindMansGameComponent;
  let fixture: ComponentFixture<BlindMansGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindMansGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindMansGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
