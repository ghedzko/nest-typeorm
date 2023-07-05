import { IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateListingDto } from './create-listing.dto';
import { CreateTagDto } from '../entities/create-tag.dto';

export class CreateItemDto {
  @IsString()
  name: string;

  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  public: boolean;

  listing: CreateListingDto;

  tags: CreateTagDto[];
}
