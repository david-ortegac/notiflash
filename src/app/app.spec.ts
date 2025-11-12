import { TestBed } from '@angular/core/testing';
// 💡 CORRECCIÓN: Usar el nombre de clase estándar de Angular, 'AppComponent'.
import { AppComponent } from './app'; 

describe('AppComponent', () => { // 💡 CORRECCIÓN: Describir el nombre correcto
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 💡 CORRECCIÓN: Usar el nombre de clase correcto.
      imports: [AppComponent], 
    }).compileComponents();
  });

  it('should create the app', () => {
    // 💡 CORRECCIÓN: Usar el nombre de clase correcto.
    const fixture = TestBed.createComponent(AppComponent); 
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    // 💡 CORRECCIÓN: Usar el nombre de clase correcto.
    const fixture = TestBed.createComponent(AppComponent); 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, notiflash');
  });
});