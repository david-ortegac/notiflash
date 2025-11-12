import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})
export class CategoriaComponent {
  publicaciones = [
    {
      usuario: 'NotiFlash Oficial',
      avatar: 'assets/img/notiflash.png',
      hora: 'Hace 1 hora',
      texto: '🏆 ¡NotiFlash fue reconocida como la mejor empresa de noticias del país! Gracias a todos los lectores que confían en nosotros cada día. ❤️',
      imagen: 'assets/img/premiacion.jpg',
      likes: 412,
      comentarios: [],
      nuevoComentario: ''
    },
    {
      usuario: 'Canal 24 Noticias',
      avatar: 'assets/img/canal24.jpg',
      hora: 'Hace 3 horas',
      texto: 'NotiFlash recibe el premio nacional por su innovación digital en el periodismo moderno. 🎉📱',
      imagen: 'assets/img/evento-premio.jpg',
      likes: 189,
      comentarios: [],
      nuevoComentario: ''
    }
  ];

  darLike(post: any) {
    post.likes++;
  }

  agregarComentario(post: any) {
    if (post.nuevoComentario && post.nuevoComentario.trim() !== '') {
      post.comentarios.push({
        usuario: 'Tú',
        texto: post.nuevoComentario
      });
      post.nuevoComentario = '';
    }
  }
}
