import { IsOptional, IsString } from "class-validator";

export class CreatePostDTO {
  @IsString()
  description: string;

  @IsString()
  content: string;

  @IsString()
  author: string;
}

export class UpdatePostDTO {
  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  author: string;
}
