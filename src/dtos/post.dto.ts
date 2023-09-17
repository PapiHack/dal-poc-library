import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDTO {
  @IsString()
  description: string;

  @IsString()
  content: string;

  @IsNumber()
  author: number;
}

export class UpdatePostDTO {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsNumber()
  @IsOptional()
  author: number;
}
