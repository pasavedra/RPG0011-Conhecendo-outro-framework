import { Component, OnInit } from "@angular/core"
import { ControleEditoraService } from "../../controle/controle-editora.service"
import { ControleLivrosService } from "../../controle/controle-livros.service"
import { Editora } from "../../modelo/editora"
import { Livro } from "../../modelo/livro"

@Component({
  selector: "app-livro-lista",
  templateUrl: "./livro-lista.component.html",
  styleUrls: ["./livro-lista.component.css"],
})
export class LivroListaComponent implements OnInit {
  editoras: Array<Editora> = []
  livros: Livro[] = []

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
    this.livros = this.servLivros.obterLivros()
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo)
    this.livros = this.servLivros.obterLivros()
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora)
  }
}