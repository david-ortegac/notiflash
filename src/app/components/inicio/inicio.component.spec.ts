import { ComponentFixture, TestBed } from '@angular/core/testing';

// CORRECCIÓN: La clase se llama InicioComponent
import { InicioComponent } from './inicio.component'; 

// CORRECCIÓN: Usa 'InicioComponent' para la descripción
describe('InicioComponent', () => { 
  let component: InicioComponent;
  // CORRECCIÓN: Usa 'InicioComponent'
  let fixture: ComponentFixture<InicioComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // CORRECCIÓN: Importa la clase correcta
      imports: [InicioComponent] 
    })
    .compileComponents();

    // CORRECCIÓN: Usa la clase correcta
    fixture = TestBed.createComponent(InicioComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});