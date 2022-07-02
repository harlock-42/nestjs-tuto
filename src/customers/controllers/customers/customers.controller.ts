import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

	constructor(private customersService: CustomersService) {}

	@Get('/search/:id')
	searchCustomerById(@Param('id', ParseIntPipe) id: number) {
		const customer = this.customersService.findCustomerById(id);
		if (customer) return customer;
		else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
	}

	@Get('')
	getAllCustomers() {
		return this.customersService.getCustomers();
	}

	@Post('create')
	@UsePipes(ValidationPipe)
	createCustomer(@Body() createCustomerDto: createCustomerDto) {
		console.log(createCustomerDto);
		this.customersService.createCustomer(createCustomerDto);
	}
}