import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts = [
    {
      title: 'Teste 1',
      text: 'Corpo do texto do primeiro post'
    },
    {
      title: 'Teste 2',
      text: 'Corpo do texto do segundo post'
    },
    {
      title: 'Teste 3',
      text: 'Teste de corpo de texto'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
