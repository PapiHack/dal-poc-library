import { Author } from "./author.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => Author, (author) => author.posts)
  author: Author;
}
