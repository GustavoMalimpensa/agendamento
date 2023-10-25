import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AgendamentoService } from 'src/services/AgendamentoService';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  modalRef?: BsModalRef;
  title: any;
  successMessage: string = ''; // Mensagem de sucesso
  errorMessage: string = '';   // Mensagem de erro
  agendamento: any = {
    content: '',
    date: '',
    time: '',
    service: '',
    user_id: '1', // Certifique-se de definir o user_id conforme necessário
  };

  constructor(
    private modalService: BsModalService,
    private agendamentoService: AgendamentoService // Injete o serviço aqui
  ) {}

  ngOnInit(): void {}

  openModal(buttonNumber: number) {
    this.title = `Agendar Horário `;
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

  agendar() {
    this.agendamentoService.agendar(this.agendamento).subscribe(
      (response) => {
        console.log('Agendamento enviado com sucesso:', response);
        this.successMessage = 'Agendamento realizado com sucesso.';
        this.errorMessage = ''; // Limpa qualquer mensagem de erro anterior
        // Lógica adicional após o agendamento bem-sucedido, se necessário
        // Lógica adicional após o agendamento bem-sucedido, se necessário
      },
      (error) => {
        console.error('Erro ao enviar o agendamento:', error);
        this.errorMessage = 'Erro no agendamento. Tente novamente.';
        this.successMessage = ''; // Limpa qualquer mensagem de sucesso anterior
        // Lógica de tratamento de erro, se necessário
      }
    );
  }
  
  @ViewChild('modalTemplate') modalTemplate!: string;
}
