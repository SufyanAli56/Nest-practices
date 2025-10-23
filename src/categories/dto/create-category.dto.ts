import { CreateProductDto } from './create-product.dto';

export class CreateCategoryDto {
  readonly name: string;
  readonly products?: CreateProductDto[];
}
