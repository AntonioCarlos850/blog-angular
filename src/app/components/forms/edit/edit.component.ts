import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post: Post = {
    id: 0,
    text: '',
    title: ''
  }

  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!
    this.service.find(parseInt(id)).subscribe((post) => {
      this.post = post
    })
  }

  save(){
    this.service.edit(this.post).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

}
