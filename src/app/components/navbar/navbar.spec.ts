import { ComponentFixture, TestBed } from '@angular/core/testing';

// CAMBIO 1: Importar el nombre correcto (NavbarComponent)
import { NavbarComponent } from './navbar';

// CAMBIO 2: Describir el nombre correcto (aunque esto es opcional, es buena práctica)
describe('NavbarComponent', () => {
  // CAMBIO 3: Usar el tipo de dato correcto
  let component: NavbarComponent;
  // CAMBIO 4: Usar el tipo de dato correcto en ComponentFixture
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CAMBIO 5: Importar la clase correcta
      imports: [NavbarComponent]
    })
    .compileComponents();

    // CAMBIO 6: Crear el componente correcto
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});