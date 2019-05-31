import { ApiModelProperty } from '@nestjs/swagger';
import { BasketItem } from "./basket-item.dto";

export class CreateBasketDto {
    @ApiModelProperty()
    readonly buyerId: string;
    @ApiModelProperty()
    readonly items: BasketItem[];
}