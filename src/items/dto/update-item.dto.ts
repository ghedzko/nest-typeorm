import { IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateCommentDto } from './create-comment.dto';
export class UpdateItemDto {
  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  public: boolean;

  comments: CreateCommentDto[];
}
