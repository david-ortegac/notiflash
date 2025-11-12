import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Necesario para [(ngModel)]

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, DatePipe, FormsModule],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class NoticiasComponent implements OnInit {

  noticias: any[] = [];   
  noticiasFiltradas: any[] = []; 
  terminoBusqueda: string = ''; // 👈 Campo del buscador

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.noticias = [
      {
        id: 1,
        categoria: 'deportes',
        titulo: 'Colombia en el Campeonato Mundial de Ciclismo de Ruta 2025...',
        extracto: 'Del 21 al 28 de septiembre de 2025 se celebró en Kigali (Ruanda) el Campeonato Mundial...',
        autor: 'Redacción Deportes',
        fecha: new Date('2025-11-04'),
        imagenUrl: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf'
      },
      {
        id: 2,
        categoria: 'Politica',
        titulo: 'Colombia impulsa reformas políticas para fortalecer la democracia...',
        extracto: 'El gobierno colombiano ha anunciado una serie de reformas políticas que buscan fortalecer la democracia...',
        autor: 'Redacción Politica',
        fecha: new Date('2025-11-03'),
        imagenUrl: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea'
      },
      {
        id: 3,
        categoria: 'Cultura',
        titulo: 'La riqueza cultural de Colombia: tradiciones que nos unen...',
        extracto: 'Colombia es un país lleno de color, tradición y diversidad. Su cultura es el reflejo de una mezcla de raíces...',
        autor: 'Redacción Cultura',
        fecha: new Date('2025-11-01'),
        imagenUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 4,
        categoria: 'Economia',
        titulo: 'El crecimiento económico de Colombia impulsa nuevas oportunidades...',
        extracto: 'Colombia ha mostrado un crecimiento sostenido en los últimos años, impulsado por sectores...',
        autor: 'Redacción Economía',
        fecha: new Date('2025-10-28'),
        imagenUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 5,
        categoria: 'Tecnologia',
        titulo: 'Colombia destaca en la Cumbre Mundial de Innovación y Tecnología 2025...',
        extracto: 'Del 10 al 14 de octubre de 2025, Bogotá fue la sede de la Cumbre Mundial de Innovación...',
        autor: 'Redacción Tecnologico',
        fecha: new Date('2025-10-20'),
        imagenUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd'
      },
      {
        id: 9,
        categoria: 'Sobre el Mundo',
        titulo: 'Ciudades del mundo avanzan hacia la movilidad eléctrica...',
        extracto: 'En diferentes partes del mundo, las ciudades están adoptando la movilidad eléctrica...',
        autor: 'Redacción Nacional',
        fecha: new Date('2025-09-21'),
        imagenUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      }
    ];

    this.noticiasFiltradas = this.noticias;
  }

  // 🔍 Filtrar por texto ingresado
  filtrarNoticias() {
    const termino = this.terminoBusqueda.toLowerCase().trim();
    if (termino === '') {
      this.noticiasFiltradas = this.noticias;
    } else {
      this.noticiasFiltradas = this.noticias.filter(n =>
        n.titulo.toLowerCase().includes(termino) ||
        n.categoria.toLowerCase().includes(termino) ||
        n.extracto.toLowerCase().includes(termino) ||
        n.autor.toLowerCase().includes(termino)
      );
    }
  }

  // 📂 Filtrar por categoría (mantiene tu función original)
  filtrarNoticiasPorCategoria(categoria: string) {
    if (categoria === 'todas') {
      this.noticiasFiltradas = this.noticias;
    } else {
      this.noticiasFiltradas = this.noticias.filter(n => n.categoria.toLowerCase() === categoria.toLowerCase());
    }
  }

  // 📰 Navegación por categoría
  verDetalle(noticia: any) {
    const categoria = noticia.categoria.toLowerCase();

    if (categoria === 'deportes') {
      this.router.navigate(['/deportes']);
    } else if (categoria === 'tecnologia') {
      this.router.navigate(['/tecnologia']);
    } else if (categoria === 'politica') {
      this.router.navigate(['/politica']);
    } else if (categoria === 'cultura') {
      this.router.navigate(['/cultura']);
    } else if (categoria === 'economia') {
      this.router.navigate(['/economia']);
    } else if (categoria === 'sobre el mundo') {
      this.router.navigate(['/mundo']); // ✅ Nueva vista "Mundo"
    } else {
      this.router.navigate(['/noticia', noticia.id]);
    }
  }
}
