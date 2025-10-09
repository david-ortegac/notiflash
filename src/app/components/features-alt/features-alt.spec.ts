import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAlt } from './features-alt';

describe('FeaturesAlt', () => {
  let component: FeaturesAlt;
  let fixture: ComponentFixture<FeaturesAlt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesAlt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesAlt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
