import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, validate, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class createCustomerDto {
	@IsEmail()
	@IsNotEmpty()
	email: string;
	@IsNumber()
	@IsNotEmpty()
	id: number;
	@IsNotEmpty()
	name: string;

	@ValidateNested()
	@Type(() => CreateAddressDto)
	@IsNotEmptyObject()
	address: CreateAddressDto;
}