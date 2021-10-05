"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = exports.randomNumber = void 0;
const tslib_1 = require("tslib");
const faker = (0, tslib_1.__importStar)(require("faker"));
const randomNumber = () => {
    return Math.random();
};
exports.randomNumber = randomNumber;
const randomName = () => {
    return faker.name.firstName();
};
exports.randomName = randomName;
//# sourceMappingURL=random.js.map