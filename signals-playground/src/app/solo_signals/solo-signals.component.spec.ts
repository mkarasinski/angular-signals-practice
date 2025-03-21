import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloSignalsComponent } from './solo-signals.component';

describe('SoloSignalsComponent', () => {
  let component: SoloSignalsComponent;
  let fixture: ComponentFixture<SoloSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoloSignalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SoloSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
