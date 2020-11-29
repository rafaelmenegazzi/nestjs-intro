import { IsNotEmpty } from 'class-validator';

export class Signup {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  password: string;
}
