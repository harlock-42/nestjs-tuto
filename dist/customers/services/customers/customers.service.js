"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
let CustomersService = class CustomersService {
    constructor() {
        this.customers = [{
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
    }
    findCustomerById(id) {
        return this.customers.find((user) => user.id === id);
    }
    createCustomer(customerDto) {
        this.customers.push(customerDto);
    }
    getCustomers() {
        return this.customers;
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)()
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map