import { PessoasService } from 'src/app/pessoas.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Pessoa';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  formulario: any;
  tituloFormulario: any;
  tituloFeriados: any;
  pessoas: Pessoa[] = [];
  nomePessoa: any;
  pessoaId: any;


  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  modalRef: BsModalRef | undefined;

  constructor(private pessoasService: PessoasService,
    private modalService: BsModalService) {}

  ngOnInit(): void {

    this.pessoasService.PegarTodos().subscribe(resultado => {

      this.pessoas = resultado
    });

    this.tituloFormulario = 'Registro de Eventos';
    this.tituloFeriados = 'Campos/Feriado';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null),
      date: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null),
      legislation: new FormControl(null),
      type: new FormControl(null),
      startTime: new FormControl(null),
      endTime: new FormControl(null),
      variableDates: new FormControl(null),
    });
  }


  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Registro de Eventos';
    this.tituloFeriados = 'Campos/Feriado';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      profissao: new FormControl(null),
      date: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null),
      legislation: new FormControl(null),
      type: new FormControl(null),
      startTime: new FormControl(null),
      endTime: new FormControl(null),
      variableDates: new FormControl(null),
    });
  }

  ExibirFormularioAtualizado(pessoaId: any): void{
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.pessoasService.PegarPeloId(pessoaId).subscribe(resultado =>{
      this.tituloFormulario = `Atualizar ${resultado.nome} ${resultado.sobrenome}`;

      this.formulario = new FormGroup ({
        pessoaId: new FormControl(resultado.pessoaId),
        nome: new FormControl(resultado.nome),
        sobrenome: new FormControl(resultado.sobrenome),
        idade: new FormControl(resultado.idade),
        profissao: new FormControl(resultado.profissao),
        date: new FormControl(resultado.date),
        title: new FormControl(resultado.title),
        description: new FormControl(resultado.description),
        legislation: new FormControl(resultado.legislation),
        type: new FormControl(resultado.type),
        startTime: new FormControl(resultado.startTime),
        endTime: new FormControl(resultado.endTime),
        variableDates: new FormControl(resultado.variableDates),
      })
    })
  }

  EnviarFormulario(): void {
    const pessoa : Pessoa = this.formulario.value;

    if(pessoa.pessoaId > 0){
      this.pessoasService.AtualizarPessoa(pessoa).subscribe(resultado => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Cadastro Atualizado com sucesso');
      this.pessoasService.PegarTodos().subscribe(registros => {
      this.pessoas = registros;
      });
    });
    } else {
      this.pessoasService.SalvarPessoa(pessoa).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Cadastro realizado com sucesso');
        this.pessoasService.PegarTodos().subscribe(registros => {
          this.pessoas = registros;
        });
      });
    }
  }
  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao( pessoaId: any, nome: any, conteudoModal: TemplateRef<any>): void {
    this.pessoaId = pessoaId;
    this.nomePessoa = this.nomePessoa;
  }

  ExcluirPessoa(pessoaId: number){
    this.pessoasService.ExcluirPessoa(pessoaId).subscribe(resultado => {
     alert('Pessoa Excluida com sucesso');
     this.pessoasService.PegarTodos().subscribe(registros => {
       this.pessoas = registros;
      });
    });
  }
}
