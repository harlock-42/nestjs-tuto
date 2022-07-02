import { createCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
export declare class CustomersService {
    private customers;
    findCustomerById(id: number): {
        id: number;
        email: string;
        name: string;
    };
    createCustomer(customerDto: createCustomerDto): void;
    getCustomers(): {
        id: number;
        email: string;
        name: string;
    }[];
}
