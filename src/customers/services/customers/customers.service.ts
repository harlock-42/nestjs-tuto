import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';

@Injectable()
export class CustomersService {

	private customers	= [{
		id: 1,
		email: 'harlock@gmail.com',
		name: 'Harlock',
	},
	{
		id: 2,
		email: 'mazone@gmail.com',
		name: 'Mazone',
	},
	{
		id: 3,
		email: 'jean@gmail.com',
		name: 'Jean'
	}];

	findCustomerById(id: number) {
		return this.customers.find((user) => user.id === id);

	}
	createCustomer(customerDto: createCustomerDto) {
		this.customers.push(customerDto);
	}
	getCustomers() {
		return this.customers;
	}
}