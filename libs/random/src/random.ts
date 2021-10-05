import * as faker from "faker";


export const randomNumber = () => {
    return Math.random();
}

export const randomName = () => {
    return faker.name.firstName();
}