import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";


class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    
    try {
      const { user_id } = request.params
      const id = user_id.toString()
      return response.json(this.turnUserAdminUseCase.execute({user_id: id}))
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export { TurnUserAdminController };
