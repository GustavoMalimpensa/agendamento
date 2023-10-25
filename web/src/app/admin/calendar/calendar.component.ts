import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  semanaAtual: number = 0;
  agendamentosDaSemana: any[] = [];

  agendamento: any = {
    content: '',
    date: '',
    time: '',
    service: '',
    user_id: '1', // Certifique-se de definir o user_id conforme necessário
  };

  user: any = {
    name: '',
    number: '',
  }

  agendamentos = [
    {
      horario: '09:00',
      imagem: '../assets/img/pessoa.jpg',
      nome: 'João',
      servico: 'Cortar o cabelo',
      observacao: 'Com tesoura'
    },
    {
      horario: '10:00',
      imagem: '../assets/img/pessoa.jpg',
      nome: 'Maria',
      servico: 'Fazer a sombrancelha',
      observacao: 'Com pinça'
    },
    {
      horario: '11:00',
      imagem: '../assets/img/pessoa.jpg', 
      nome: 'Pedro',
      servico: 'Fazer a barba',
      observacao: 'Com navalha'
    },
    {
      horario: '14:00',
      imagem: '../assets/img/pessoa.jpg',
      nome: 'Ana',
      servico: 'Cortar o cabelo',
      observacao: 'Com tesoura'
    },
    {
      horario: '15:00',
      imagem: '../assets/img/pessoa.jpg',
      nome: 'Lucas',
      servico: 'Fazer a sombrancelha',
      observacao: 'Com pinça'
    }
  ];

  modalRef?: BsModalRef;
  title: any;
  presentDays: number = 0;
  abstractDays: number = 0;
  events: any = [
    { title: 'nome', date: '2023-07-07', colr: '#0000FF' },
    // Adicione outros eventos conforme necessário
  ];

  entrarEmContato(agendamento: any) {
    // Verifique se o agendamento possui um número de telefone
    if (agendamento.telefone) {
      // Crie uma URL para o WhatsApp com o número de telefone e a mensagem
      const mensagem = 'Olá, Tudo bem? ' + agendamento.nome + 'Quero falar referente ao seu agendamento.';
      const urlWhatsApp = `https://wa.me/${agendamento.telefone}?text=${encodeURIComponent(mensagem)}`;

      // Abra a URL no navegador para iniciar uma conversa no WhatsApp
      window.open(urlWhatsApp, '_blank');
    } else {
      console.log('Número de telefone não encontrado.');
    }
  }

  carregarAgendamentosDaSemana() {}

  mudarSemana(delta: number) {
    // Atualize a semana atual adicionando ou subtraindo o delta
    this.semanaAtual += delta;

    // Chame uma função para carregar os agendamentos da nova semana
    this.carregarAgendamentosDaSemana();
  }

  config = {
    animated: true
  };

  @ViewChild('template') template!: string;

  constructor(
    private modalService: BsModalService,
    private agendamentoService: AgendamentoService // Injete o serviço real aqui
  ) {
    defineLocale('pt-br', ptBrLocale);
  }

  atualizarAgendamentosDaSemana() {
    // Defina a data de início da semana com base na semana atual
    const inicioDaSemana = new Date();
    inicioDaSemana.setDate(inicioDaSemana.getDate() + (this.semanaAtual * 7));

    // Defina a data de final da semana (7 dias depois do início)
    const finalDaSemana = new Date(inicioDaSemana);
    finalDaSemana.setDate(finalDaSemana.getDate() + 7);

    // Use o serviço para buscar os agendamentos do usuário atual
    this.agendamentoService.getAgendamentosDoUsuario().subscribe(agendamentos => {
      // Filtrar os agendamentos para exibir apenas aqueles que ocorrem na semana atual
      this.agendamentosDaSemana = agendamentos.filter(agendamento => {
        // Converta a string de data e hora em uma data completa
        const dataHoraAgendamento = new Date(`${agendamento.date}T${agendamento.time}`);
        
        // Verifique se o agendamento está dentro da semana atual
        return dataHoraAgendamento >= inicioDaSemana && dataHoraAgendamento < finalDaSemana;
      });
    });
  }

  ngOnInit(): void {
    // Chame a função para atualizar os agendamentos da semana inicialmente
    this.atualizarAgendamentosDaSemana();
  }

  handleDateClick(arg: any) {
    console.log(arg);
    console.log(arg.event._def.title);
    this.title = arg.event._def.title;
    this.modalRef = this.modalService.show(this.template, this.config);
  }
}
