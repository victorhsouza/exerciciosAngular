import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos2',
  templateUrl: './listar-cursos2.component.html',
  styleUrls: ['./listar-cursos2.component.css']
})
export class ListarCursos2Component implements OnInit {

  cursos: any = [
    {nome: 'Curso de Angular',decricao:'Do basico ao avançado', promocao: true, id:1, preco: 300, foto:'assets/img/logo-angular.png'},
    {nome: 'Curso de Ionic',decricao:'Do basico ao avançado', promocao: false, id:1, preco: 500, foto:'assets/img/logo-ionic.png'},
    {nome: 'Curso de Bootstrap',decricao:'Do basico ao avançado', promocao: true, id:1, preco: 150,foto:'assets/img/bootstrap.png'},
    {nome: 'Curso de React', decricao:'Do basico ao avançado', promocao: false, id:1, preco: 500, foto:'assets/img/react-logo.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
