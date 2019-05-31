import { BasketItem } from "./basket-item.dto";
import { ApiModelProperty } from "@nestjs/swagger";

export class UpdateBasketDto {
    @ApiModelProperty()
    readonly id: number;
    @ApiModelProperty()
    readonly items: BasketItem[];
}