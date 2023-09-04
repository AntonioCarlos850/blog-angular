import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API = 'http://localhost:3000/posts'

  constructor(
    private http: HttpClient
  ) { }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.API, post)
  }

  edit(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.API}/${post.id}`, post)
  }

  all(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API)
  }

  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.API}/${id}`)
  }

  find(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API}/${id}`)
  }
}
