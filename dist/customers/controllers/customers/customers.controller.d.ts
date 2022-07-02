import { createCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    searchCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    getAllCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
    createCustomer(createCustomerDto: createCustomerDto): void;
}
