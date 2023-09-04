import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post: Post = {
    title: 'Título',
    text: 'Corpo do texto'
  }

  constructor(
    private service: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.service.create(this.post).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }
}
