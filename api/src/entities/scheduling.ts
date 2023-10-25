import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";

@Entity('scheduling')
export class scheduling {

    //Chave estrangeira
    @PrimaryGeneratedColumn()
    id: number
    //Declarando o schedulingagem como texto e fala que pode ter 777 caracteris (Observação)
    @Column({type: 'text'})
    content: string
    // Adicione um campo para a data do agendamento
    @Column({ type: 'date' })
    date: Date;
    // Adicione um campo para o horário do agendamento
    @Column({ type: 'time' })
    time: string;
    // Adicione um campo para o serviço desejado
    @Column({ type: 'text' })
    service: string;
    //Decorator responsavel por criar automaticamente a data da criação
    @CreateDateColumn({type:'date'})
    timestamp: Date
    //Declarando para ficar mais fácil
    @Column({type: 'number'})
    user_id: number
    //Vão ter muitos scheduling para um autor
    @ManyToOne(() => user, user => user.schedulings)
    //Passo qual coluna na tabela de user vou estar referenciando  
    @JoinColumn({name: "user_id"})
    //Uma ray de scheduling, pois tem varios schedulings para um usuario
    user: user
}
  