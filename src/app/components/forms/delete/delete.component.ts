import { Post } from 'src/app/interfaces/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  post: Post = {
    id: 0,
    title: '',
    text: ''
  }
  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.service.find(parseInt(id)).subscribe((post)=>{
      this.post = post
    })
  }

  delete(){
    if (this.post.id) {
      this.service.delete(this.post.id).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/'])
  }

}
