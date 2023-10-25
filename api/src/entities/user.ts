import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { scheduling } from "./scheduling";
import { CalendarEvent } from "./CalendarEvents"; // Certifique-se de importar a entidade CalendarEvent


@Entity('user')
export class user {
    //ID  auto incremento 
    @PrimaryGeneratedColumn()
    id: number
    //Declarando que o nome do usuário é um texto
    @Column({type: 'text' })
    name: string
    // Adicione um campo para o email do usuário
    @Column({ type: 'text', unique: true }) // Suponhamos que o email deve ser único
    email: string;
    // Adicione um campo para o número de usurario
    @Column({ type: 'number', unique: true }) // Suponhamos que o email deve ser único
    number: number;
    // Adicione um campo para a senha do usuário
    @Column({ type: 'text' })
    password: string;
    // Adicione um campo para a foto do usuário (pode ser um URL da imagem)
    @Column({ type: 'text', nullable: true }) // Permite que o campo seja nulo, pois nem todos os usuários podem ter uma foto
    photoUrl: string | null;
    //Decorator responsavel por criar automaticamente a data da criação
    @CreateDateColumn({type:'date'})
    timestamp: Date
    //Um user vai ser associado a várias schedulingagens
    @OneToMany(() => scheduling, scheduling => scheduling.user)
    //Uma array de scheduling, pois tem varios schedulings para um usuario.
    schedulings:scheduling[]

    @OneToMany(() => CalendarEvent, event => event.user)
    calendarEvents: CalendarEvent[];
    
}
