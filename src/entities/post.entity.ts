import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Author } from "./author.entity";

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
export class Post extends Document {
  @Prop()
  description: string;

  @Prop()
  content: string;

  @Prop({ type: Types.ObjectId, ref: "Author" })
  author: Author;
}

export const PostSchema = SchemaFactory.createForClass(Post);
