import { Router } from "express"
import { UserPageController } from "./controllers/UserPageController"
import { SchedulingPageController } from "./controllers/SchedulingPageController"
import { CalendarEventsController } from "./controllers/CalendarEventsController"


const routes = Router()

//responsavel por criar usuario  
routes.post('/user-page', new UserPageController().CreateUser)
//consultar todos os dados do usuario
routes.get('/user-page/:idUser/listUser', new UserPageController().listUser)
//responsavel pelas criações de evento no calendario e consultar    
routes.post('/user-page/:idUser/CreateScheduling', new SchedulingPageController().CreateScheduling)
//Listando todos os agendamentos
routes.get('/calendar/listEvents', new CalendarEventsController().listEvents)

export default routes