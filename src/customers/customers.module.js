"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomersModule = void 0;
var common_1 = require("@nestjs/common");
var customers_controller_1 = require("./controllers/customers/customers.controller");
var customers_service_1 = require("./services/customers/customers.service");
var validate_customers_middleware_1 = require("./middlewares/validate-customers.middleware");
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule.prototype.configure = function (consumer) {
        consumer.apply(validate_customers_middleware_1.ValidateCustomerMiddleware).forRoutes(customers_controller_1.CustomersController);
    };
    CustomersModule = __decorate([
        (0, common_1.Module)({
            controllers: [customers_controller_1.CustomersController],
            providers: [customers_service_1.CustomersService]
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
function forRoutes(arg0) {
    throw new Error('Function not implemented.');
}
