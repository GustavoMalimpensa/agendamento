import { Request, Response } from "express"
import { userRepository } from "../services/UserService"

export class UserPageController {

    async CreateUser(req: Request, res: Response) {
        const { name, email, password, photoUrl } = req.body; // Certifique-se de que as informações do usuário sejam enviadas no corpo da solicitação.
    
        try {
            const newuser = userRepository.create({ name, email, password, photoUrl})

            await userRepository.save(newuser)

            return res.status(201).json(newuser)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async listUser(req: Request, res: Response){
        const { idUser } = req.params
        //Listando o usuario com suas informações
        try{
            const user_id = await userRepository.findOneBy({id: Number(idUser)})

            if(!user_id) {
                return res.status(404).json({message: 'Esse usuario não existe!'})
            }

            const user =await userRepository.find({
                relations: {
                    schedulings: true,
                },
            })

            return res.json(user)
        }catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    
}


