import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export default class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    public readonly username: string;
    
    @IsNotEmpty()
    @IsEmail()
    public readonly email: string;
    
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
        message: "Password is too weak",
    })
    public readonly password: string;
}