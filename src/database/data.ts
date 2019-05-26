import { DeepPartial, Repository } from 'typeorm';

export const saveToRepArray = <T>(rep: any, target: Partial<T[]>): Promise<T[]> => rep.save(target);
// @ts-ignore
export const createAndSaveToRepArray = <T>(rep: Repository<T>, target: DeepPartial<T[]>): Promise<T[]> => saveToRepArray<T>(rep, rep.create(target));

export const migrations_mockData = {
    "customers": [
        {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 21,
            "id": 2,
            "firstName": "Larsen",
            "lastName": "Shaw",
            "email": "abc@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar3.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 89,
            "id": 4,
            "firstName": "Rosseta",
            "lastName": "Wilson",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar4.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 38,
            "id": 5,
            "firstName": "William",
            "lastName": "Carney",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar2.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 23,
            "id": 6,
            "firstName": "Sarah",
            "lastName": "Dunne",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 23,
            "id": 8,
            "firstName": "Merriana",
            "lastName": "Sean",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar5.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 26,
            "id": 9,
            "firstName": "Jubino",
            "lastName": "Gerret",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 22,
            "id": 10,
            "firstName": "Geneva",
            "lastName": "Wilson",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar2.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 38,
            "id": 11,
            "firstName": "Mark",
            "lastName": "Carney",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar5.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 27,
            "id": 12,
            "firstName": "Yann",
            "lastName": "Larrel",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": true,
            "firstName": "John",
            "lastName": "Doe",
            "mobile": "555-555-555",
            "rewards": 88,
            "email": "john.doe@test.com",
            "id": 13
        }, {
            "avatar": null,
            "firstName": "sdfsdf",
            "lastName": "sdfsdf",
            "mobile": "555-555-555",
            "rewards": 22,
            "email": "sdfsdfsdfs",
            "membership": false,
            "id": 14
        }],
    "orders": [
        {
            "id": 2,
            "reference": "Dashbouquet Development",
            "customerId": 2,
            "products": [{ "id": 1, "name": "Product HHYDP", "categoryId": 1, "unitInStock": 2, "price": 18 }, {
                "id": 2,
                "name": "Product RECZE",
                "categoryId": 1,
                "unitInStock": null,
                "price": 19
            }],
            "amount": 35000,
            "orderDate": "2017-01-01",
            "shippedDate": "2014-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 4,
            "reference": "Apple",
            "customerId": 4,
            "products": [{ "id": 3, "name": "Product IMEHJ", "categoryId": 2, "unitInStock": null, "price": 10 }, {
                "id": 4,
                "name": "Product KSBRM",
                "categoryId": 2,
                "unitInStock": null,
                "price": 22
            }, {id:6}],
            "amount": 499000,
            "orderDate": "2018-01-01",
            "shippedDate": "1985-04-12",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 5,
            "reference": "Google",
            "customerId": 5,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 399000,
            "orderDate": "2018-05-11",
            "shippedDate": "1998-04-10",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }],
    "products": [
        {
            "id": 1,
            "name": "Project HHYDP",
            "categoryId": 1,
            "unitInStock": 23,
            "price": 18000
        }, {
            "id": 2,
            "name": "Project RECZE",
            "categoryId": 1,
            "unitInStock": 10,
            "price": 19000
        }, { "id": 3, "name": "Project IMEHJ", "categoryId": 2, "unitInStock": 3, "price": 10000 }, {
            "id": 4,
            "name": "Project KSBRM",
            "categoryId": 2,
            "unitInStock": 2,
            "price": 22000
        }, { "id": 5, "name": "Project EPEIM", "categoryId": 2, "unitInStock": 333, "price": 21000 }, {
            "id": 6,
            "name": "Project VAIIV",
            "categoryId": 2,
            "unitInStock": 5,
            "price": 25000
        }, { "id": 7, "name": "Project HMLNI", "categoryId": 7, "unitInStock": 142, "price": 30000 }, {
            "id": 8,
            "name": "Project WVJFP",
            "categoryId": 2,
            "unitInStock": 22,
            "price": 40000
        }, { "id": 9, "name": "Project AOZBW", "categoryId": 6, "unitInStock": 2231, "price": 97000 }, {
            "id": 10,
            "name": "Project YHXGE",
            "categoryId": 8,
            "unitInStock": null,
            "price": 31000
        }, { "id": 11, "name": "Project QMVUN", "categoryId": 4, "unitInStock": 222, "price": 21000 }, {
            "id": 12,
            "name": "Project OSFNS",
            "categoryId": 4,
            "unitInStock": 23423,
            "price": 38000
        }, { "id": 13, "name": "Project POXFU", "categoryId": 8, "unitInStock": 33, "price": 6000 }, {
            "id": 14,
            "name": "Project PWCJB",
            "categoryId": 7,
            "unitInStock": null,
            "price": 23000
        }, { "id": 15, "name": "Project KSZOI", "categoryId": 2, "unitInStock": 33, "price": 15000 }, {
            "id": 16,
            "name": "Project PAFRH",
            "categoryId": 3,
            "unitInStock": 23,
            "price": 17000
        }, { "id": 17, "name": "Project BLCAX", "categoryId": 6, "unitInStock": 1, "price": 39000 }, {
            "id": 18,
            "name": "Project CKEDC",
            "categoryId": 8,
            "unitInStock": 22,
            "price": 62000
        }, { "id": 19, "name": "Project XKXDO", "categoryId": 3, "unitInStock": null, "price": 9000 }, {
            "id": 20,
            "name": "Project QHFFP",
            "categoryId": 3,
            "unitInStock": 23,
            "price": 81000
        }, { "id": 21, "name": "Project VJZZH", "categoryId": 3, "unitInStock": null, "price": 18000 }, {
            "id": 22,
            "name": "Project CPHFY",
            "categoryId": 5,
            "unitInStock": null,
            "price": 21000
        }, { "id": 23, "name": "Project JLUDZ", "categoryId": 5, "unitInStock": null, "price": 9000 }, {
            "id": 24,
            "name": "Project QOGNU",
            "categoryId": 2,
            "unitInStock": null,
            "price": 4000
        }, { "categoryId": 3, "name": "Project ABCD", "price": 22000, "unitInStock": 23, "id": 26 }, {
            "id": 27,
            "name": "Project ASD",
            "categoryId": 3,
            "unitInStock": "22",
            "price": "23000"
        }],
    "categories": [
        { "id": 1, "name": "HR", "description": "Human Resources projects", "picture": null }, {
            "id": 2,
            "name": "E-learning",
            "description": "E-learning projects",
            "picture": null
        }, { "id": 3, "name": "Fintech", "description": "Fintech projects", "picture": null }, {
            "id": 4,
            "name": "Sports",
            "description": "Sport projects",
            "picture": null
        }, { "id": 5, "name": "Healthcare", "description": "Healthcare projects", "picture": null }, {
            "id": 6,
            "name": "Agriculture",
            "description": "Agriculture projects",
            "picture": null
        }, { "id": 7, "name": "Logistics", "description": "Logistics projects", "picture": null }, {
            "id": 8,
            "name": "Education",
            "description": "Education projects",
            "picture": null
        }]
};

export const migrations_mockDat = {
    // "token":
    //     {
    //         "access_token": "fake-token-12345789-abcdefgh",
    //         "user": { "firstName": "Admin", "lastName": "", "email": "admin@test.com", "password": "password" }
    //     },
    "customers": [
        {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 21,
            "id": 2,
            "firstName": "Larsen",
            "lastName": "Shaw",
            "email": "abc@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar3.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 89,
            "id": 4,
            "firstName": "Rosseta",
            "lastName": "Wilson",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar4.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 38,
            "id": 5,
            "firstName": "William",
            "lastName": "Carney",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar2.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 23,
            "id": 6,
            "firstName": "Sarah",
            "lastName": "Dunne",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 23,
            "id": 8,
            "firstName": "Merriana",
            "lastName": "Sean",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar5.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 26,
            "id": 9,
            "firstName": "Jubino",
            "lastName": "Gerret",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 22,
            "id": 10,
            "firstName": "Geneva",
            "lastName": "Wilson",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar2.png"
        }, {
            "membership": true,
            "mobile": "555-555-555",
            "rewards": 38,
            "id": 11,
            "firstName": "Mark",
            "lastName": "Carney",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar5.png"
        }, {
            "membership": false,
            "mobile": "555-555-555",
            "rewards": 27,
            "id": 12,
            "firstName": "Yann",
            "lastName": "Larrel",
            "email": "test@test.com",
            "avatar": "http://46.101.231.34:4000/assets/img/avatar1.png"
        }, {
            "membership": true,
            "firstName": "John",
            "lastName": "Doe",
            "mobile": "555-555-555",
            "rewards": 88,
            "email": "john.doe@test.com",
            "id": 13
        }, {
            "avatar": null,
            "firstName": "sdfsdf",
            "lastName": "sdfsdf",
            "mobile": "555-555-555",
            "rewards": 22,
            "email": "sdfsdfsdfs",
            "membership": false,
            "id": 14
        }],
    "orders": [
        {
            "id": 2,
            "reference": "order-2-2-1-2",
            "customerId": 2,
            "products": [{ "id": 1, "name": "Product HHYDP", "categoryId": 1, "unitInStock": 2, "price": 18 }, {
                "id": 2,
                "name": "Product RECZE",
                "categoryId": 1,
                "unitInStock": null,
                "price": 19
            }],
            "amount": 9.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 3,
            "reference": "order-4-3-1-2",
            "customerId": 4,
            "products": [{ "id": 1, "name": "Product HHYDP", "categoryId": 1, "unitInStock": null, "price": 18 }, {
                "id": 2,
                "name": "Product RECZE",
                "categoryId": 1,
                "unitInStock": null,
                "price": 19
            }],
            "amount": 5.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 4,
            "reference": "order-4-4-1-2",
            "customerId": 4,
            "products": [{ "id": 3, "name": "Product IMEHJ", "categoryId": 2, "unitInStock": null, "price": 10 }, {
                "id": 4,
                "name": "Product KSBRM",
                "categoryId": 2,
                "unitInStock": null,
                "price": 22
            }],
            "amount": 499.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 5,
            "reference": "order-5-5-1-2",
            "customerId": 5,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 399.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 6,
            "reference": "order-6-6-1-2",
            "customerId": 6,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 329.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 8,
            "reference": "order-8-8-1-2",
            "customerId": 8,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 89.99,
            "orderDate": "2017-01-12",
            "shippedDate": "2017-01-10",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 9,
            "reference": "order-9-9-1-2",
            "customerId": 9,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 59.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 10,
            "reference": "order-10-10-1-2",
            "customerId": 10,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 49.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 12,
            "reference": "order-2-12-1-2",
            "customerId": 2,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 49.99,
            "orderDate": "2017-01-01",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 14,
            "reference": "order-2-14-1-2",
            "customerId": 4,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }],
            "amount": 19.99,
            "orderDate": "2017-01-09",
            "shippedDate": "2017-01-01",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" }
        }, {
            "id": 15,
            "reference": "order-11-15-1-2",
            "customerId": 11,
            "products": [{ "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": null, "price": 21.5 }, {
                "id": 19,
                "name": "Product XKXDO",
                "categoryId": 3,
                "unitInStock": null,
                "price": 9.2,
                "category": { "id": 3, "name": "Confections", "description": "Desserts, candies, and sweet breads", "picture": null },
                "text": "Product XKXDO",
                "value": 19
            }],
            "amount": 222,
            "orderDate": "2017-01-19",
            "shippedDate": "2017-01-16",
            "shipAddress": { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" },
            "quantity": 12,
            "price": 33
        }, {
            "products": [{
                "id": 4,
                "name": "Product KSBRM",
                "categoryId": 2,
                "unitInStock": 2,
                "price": 22,
                "category": {
                    "id": 2,
                    "name": "Condiments",
                    "description": "Sweet and savory sauces, relishes, spreads, and seasonings",
                    "picture": null
                },
                "text": "Product KSBRM",
                "value": 4
            }, {
                "id": 6,
                "name": "Product VAIIV",
                "categoryId": 2,
                "unitInStock": null,
                "price": 25,
                "category": {
                    "id": 2,
                    "name": "Condiments",
                    "description": "Sweet and savory sauces, relishes, spreads, and seasonings",
                    "picture": null
                },
                "text": "Product VAIIV",
                "value": 6
            }],
            "customerId": 4,
            "orderDate": "2017-08-08",
            "shippedDate": "2017-08-08",
            "shipAddress": { "address": "sss", "city": "sss", "zipcode": "sss", "country": "sss" },
            "reference": "ss-2-22-22",
            "amount": 2323,
            "id": 16
        }],
    "products": [
        {
            "id": 1,
            "name": "Product HHYDP",
            "categoryId": 1,
            "unitInStock": 23,
            "price": 18
        }, {
            "id": 2,
            "name": "Product RECZE",
            "categoryId": 1,
            "unitInStock": 10,
            "price": 19
        }, { "id": 3, "name": "Product IMEHJ", "categoryId": 2, "unitInStock": 3, "price": 10 }, {
            "id": 4,
            "name": "Product KSBRM",
            "categoryId": 2,
            "unitInStock": 2,
            "price": 22
        }, { "id": 5, "name": "Product EPEIM", "categoryId": 2, "unitInStock": 333, "price": 21.5 }, {
            "id": 6,
            "name": "Product VAIIV",
            "categoryId": 2,
            "unitInStock": 5,
            "price": 25
        }, { "id": 7, "name": "Product HMLNI", "categoryId": 7, "unitInStock": 142, "price": 30 }, {
            "id": 8,
            "name": "Product WVJFP",
            "categoryId": 2,
            "unitInStock": 22,
            "price": 40
        }, { "id": 9, "name": "Product AOZBW", "categoryId": 6, "unitInStock": 2231, "price": 97 }, {
            "id": 10,
            "name": "Product YHXGE",
            "categoryId": 8,
            "unitInStock": null,
            "price": 31
        }, { "id": 11, "name": "Product QMVUN", "categoryId": 4, "unitInStock": 222, "price": 21 }, {
            "id": 12,
            "name": "Product OSFNS",
            "categoryId": 4,
            "unitInStock": 23423,
            "price": 38
        }, { "id": 13, "name": "Product POXFU", "categoryId": 8, "unitInStock": 33, "price": 6 }, {
            "id": 14,
            "name": "Product PWCJB",
            "categoryId": 7,
            "unitInStock": null,
            "price": 23.5
        }, { "id": 15, "name": "Product KSZOI", "categoryId": 2, "unitInStock": 33, "price": 15.5 }, {
            "id": 16,
            "name": "Product PAFRH",
            "categoryId": 3,
            "unitInStock": 23,
            "price": 17.5
        }, { "id": 17, "name": "Product BLCAX", "categoryId": 6, "unitInStock": 1, "price": 39 }, {
            "id": 18,
            "name": "Product CKEDC",
            "categoryId": 8,
            "unitInStock": 22,
            "price": 62.5
        }, { "id": 19, "name": "Product XKXDO", "categoryId": 3, "unitInStock": null, "price": 9.2 }, {
            "id": 20,
            "name": "Product QHFFP",
            "categoryId": 3,
            "unitInStock": 23,
            "price": 81
        }, { "id": 21, "name": "Product VJZZH", "categoryId": 3, "unitInStock": null, "price": 18 }, {
            "id": 22,
            "name": "Product CPHFY",
            "categoryId": 5,
            "unitInStock": null,
            "price": 21
        }, { "id": 23, "name": "Product JLUDZ", "categoryId": 5, "unitInStock": null, "price": 9.5 }, {
            "id": 24,
            "name": "Product QOGNU",
            "categoryId": 2,
            "unitInStock": null,
            "price": 4.5
        }, { "categoryId": 3, "name": "Product ABCD", "price": 222, "unitInStock": 23, "id": 26 }, {
            "id": 27,
            "name": "asdasd",
            "categoryId": 3,
            "unitInStock": "22",
            "price": "234"
        }],
    "categories": [
        { "id": 1, "name": "Beverages", "description": "Soft drinks, coffees, teas, beers, and ales", "picture": null }, {
            "id": 2,
            "name": "Condiments",
            "description": "Sweet and savory sauces, relishes, spreads, and seasonings",
            "picture": null
        }, { "id": 3, "name": "Confections", "description": "Desserts, candies, and sweet breads", "picture": null }, {
            "id": 4,
            "name": "Dairy Products",
            "description": "Cheeses",
            "picture": null
        }, { "id": 5, "name": "Grains/Cereals", "description": "Breads, crackers, pasta, and cereal", "picture": null }, {
            "id": 6,
            "name": "Meat/Poultry",
            "description": "Prepared meats",
            "picture": null
        }, { "id": 7, "name": "Produce", "description": "Dried fruit and bean curd", "picture": null }, {
            "id": 8,
            "name": "Seafood",
            "description": "Seaweed and fish",
            "picture": null
        }]
};

