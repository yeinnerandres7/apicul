import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail({}, {
        message: 'Formato de email invalido'
    })
    email: string
    @MinLength(10,{
        message: 'Minimo 10 Caracteres'
    })
    @MaxLength(15,{
        message: 'Maximo 15 Caracteres'
    })
    firstName: string
    @IsNotEmpty()
    lastName: string
}

