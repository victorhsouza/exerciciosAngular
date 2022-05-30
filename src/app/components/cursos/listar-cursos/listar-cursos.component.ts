import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  id: number = 1
  nome: string = 'Curso de Angular avançado'
  descricao:string = 'Curso do basico ao essencial'
  preco: number = 500.60078
  promocao: boolean = true
  foto: string = 'assets/img/logo-angular.png'
  data: string = '2022-12-31'


  constructor() { }

  ngOnInit(): void {
  }

  clicar(){
    alert('Clicou!')
  }

}
