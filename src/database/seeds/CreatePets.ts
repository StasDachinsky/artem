// import { Connection } from 'typeorm';
// import { Factory, Seed, times } from 'typeorm-seeding';
//
// import { Product } from '../../api/models/Product';
// import { User } from '../../../src/api/models/User';
//
// export class Createproducts implements Seed {
//
//     public async seed(factory: Factory, connection: Connection): Promise<any> {
//         const em = connection.createEntityManager();
//         await times(10, async (n) => {
//             const product = await factory(Product)().seed();
//             const user = await factory(User)().make();
//             // user.products = [product];
//             return await em.save(user);
//         });
//     }
//
// }
