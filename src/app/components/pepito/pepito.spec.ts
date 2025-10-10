import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pepito } from './pepito';

describe('Pepito', () => {
  let component: Pepito;
  let fixture: ComponentFixture<Pepito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pepito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pepito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
