import { Request, Response } from "express"
import { schedulingRepository } from "../services/SchedulingService"

export class SchedulingPageController {

    async CreateScheduling(req: Request, res: Response) {
        const { content, user_id, date, time, service } = req.body
      
        //Criando Agendamento com o user_id e o conteúdo
        if (!content) {
            return res.status(400).json({ message: 'Campo observação está vazio!'})
        }

        if (content.length > 777) {
            return res.status(400).json({ message: 'A observação deve ter no máximo 777 caracteres!' })
        }

        if (!date) {
            return res.status(400).json({ message: 'Dia do agendamento está vazio!'})
        }
       
        if (!time) {
            return res.status(400).json({ message: 'Horario do agendamento está vazio!'})
        }

        if (!time) {
            return res.status(400).json({ message: 'Serviço não está selecionado!'})
        }

        if (!user_id) {
            return res.status(400).json({ message: 'Informe o usuario!'})
        }

        try {
            const newscheduling = schedulingRepository.create({content, date, time, service, user_id})

            await schedulingRepository.save(newscheduling)

            return res.status(201).json(newscheduling)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }

    } 

}


