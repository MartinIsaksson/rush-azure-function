import * as faker from "faker";


export const randomNumber = () => {
    return Math.random();
}

export const randomName = () => {
    return faker.name.firstName() + " " + faker.name.lastName() + " " + faker.name.suffix();
}

export const randomFileName = () => {
    return faker.system.fileName();
}