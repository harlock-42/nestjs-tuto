"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var User_1 = require("../../types/User");
var UsersController = /** @class */ (function () {
    function UsersController(userService) {
        this.userService = userService;
    }
    UsersController.prototype.getUsers = function () {
        return this.userService.getUsers();
    };
    UsersController.prototype.getByUsername = function (username) {
        var user = this.userService.getUserByUsername(username);
        if (user)
            return new User_1.SerializedUser(user);
        else
            throw new common_1.HttpException('User not found', common_1.HttpStatus.BAD_REQUEST);
    };
    __decorate([
        (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
        (0, common_1.Get)('')
    ], UsersController.prototype, "getUsers");
    __decorate([
        (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
        (0, common_1.Get)('/:username'),
        __param(0, (0, common_1.Param)('username'))
    ], UsersController.prototype, "getByUsername");
    UsersController = __decorate([
        (0, common_1.Controller)('users'),
        __param(0, (0, common_1.Inject)('USER_SERVICE'))
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
