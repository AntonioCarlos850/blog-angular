import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post = {
    title: 'Título',
    text: 'Corpo do texto'
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    alert("salvou")
  }

  cancel(){
    alert("cancelou")
  }
}
