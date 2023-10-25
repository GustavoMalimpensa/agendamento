import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = 'http://localhost:3000'; // Substitua pela URL do seu servidor back-end

  constructor(private http: HttpClient) {}

  criarAgendamento(agendamento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user-page/1/CreateScheduling`, agendamento);
  }

  agendar(agendamento: any) {
    // Envie os dados do agendamento para o servidor
    return this.http.post(`${this.apiUrl}/user-page/1/CreateScheduling`, agendamento);
  }

  // Adicione outros métodos para interagir com seu servidor conforme necessário
}
