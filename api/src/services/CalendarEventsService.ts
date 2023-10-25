import { AppDataSource } from "../data-source";
import { CalendarEvent } from "../entities/CalendarEvents";

export const calendareventsRepository = AppDataSource.getRepository(CalendarEvent)

