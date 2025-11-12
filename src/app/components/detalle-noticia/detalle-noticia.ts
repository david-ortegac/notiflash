import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-detalle-noticia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  // ¡IMPORTANTE! Nombre del archivo HTML y CSS sin .component
  templateUrl: './detalle-noticia.html', 
  styleUrls: ['./detalle-noticia.css']
})
export class DetalleNoticiaComponent implements OnInit {
  
  noticia: any = null;
  noticiaId: string | null = null;

  // Simulación de datos
  articulosEjemplo = [
    { id: 1, titulo: 'Gran Avance en IA: El modelo que supera expectativas', cuerpo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [MÁS TEXTO DE RELLENO AQUÍ]', categoria: 'Tecnología', autor: 'Eduar Fabian', imagen: 'tecnologia-big.jpg', fecha: '05 Nov 2025' },
    { id: 2, titulo: 'Triunfo en las Eliminatorias: Clasificación histórica', cuerpo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [MÁS TEXTO DE RELLENO AQUÍ]', categoria: 'Deportes', autor: 'Max', imagen: 'deportes-big.jpg', fecha: '04 Nov 2025' },
    { id: 3, titulo: 'Nueva Ley de Economía Circular', cuerpo: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. [MÁS TEXTO DE RELLENO AQUÍ]', categoria: 'Economía', autor: 'Mauricio Yate', imagen: 'economia-big.jpg', fecha: '06 Nov 2025' },
    // Añade más artículos aquí...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.noticiaId = params.get('id');
      
      if (this.noticiaId) {
        this.noticia = this.articulosEjemplo.find(
          a => a.id === parseInt(this.noticiaId!) 
        );
      }
    });
  }
}