import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty() // 빈문자열일 수 없다.
  title: string;
  @IsNotEmpty()
  description: string;
}