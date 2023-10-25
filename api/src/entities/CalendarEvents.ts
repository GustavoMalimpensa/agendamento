import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user"; // Certifique-se de importar a entidade user

@Entity('calendar_event')
export class CalendarEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @ManyToOne(() => user, user => user.calendarEvents)
  user: user;

  @CreateDateColumn({ type: 'date' })
  timestamp: Date;
}
