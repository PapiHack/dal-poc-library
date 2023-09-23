import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
export class Author extends Document {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

AuthorSchema.virtual("posts", {
  localField: "_id",
  foreignField: "author",
  ref: "Post",
});
