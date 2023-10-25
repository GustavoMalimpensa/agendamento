import { Request, Response } from "express"
import { calendareventsRepository } from "../services/CalendarEventsService"

export class CalendarEventsController {

    async listEvents(req: Request, res: Response){
        const { idUser } = req.params
        //Listando os agendamentos
        try{
            const user_id = await calendareventsRepository.findOneBy({id: Number(idUser)})

            if(!user_id) {
                return res.status(404).json({message: 'Não existe agendamentos!'})
            }

            return res.json()
        }catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    
}


