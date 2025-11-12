import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Paginate } from '../models/Paginate';
import { News } from '../models/News';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private readonly http: HttpClient){}

  getAllNews(): Observable<Paginate<News>>{
    return this.http.get<Paginate<News>>(environment.apiUrl + "/news");
  }

  getById(id: number): Observable<Response<News>>{
    return this.http.get<Response<News>>(environment.apiUrl+"/news/"+id)
  }

  save(news: News){
    return this.http.post(environment.apiUrl+"/news", news);
  }
  
}
