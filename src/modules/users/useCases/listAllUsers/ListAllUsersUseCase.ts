import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userbyId = this.usersRepository.findById(user_id)

    if (!userbyId.admin) throw new Error("Action not allowed for your user!")

    const allUsers = this.usersRepository.list()

    return allUsers
  }
}

export { ListAllUsersUseCase };
