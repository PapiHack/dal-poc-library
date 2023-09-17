import { IsOptional, IsString } from "class-validator";

export class CreateAuthorDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  email: string;
}

export class UpdateAuthorDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  email: string;
}
