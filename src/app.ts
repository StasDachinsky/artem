import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework-w3tec';

import { banner } from './lib/banner';
import { Logger } from './lib/logger';
import { expressLoader } from './loaders/expressLoader';
import { homeLoader } from './loaders/homeLoader';
import { iocLoader } from './loaders/iocLoader';
import { publicLoader } from './loaders/publicLoader';
import { typeormLoader } from './loaders/typeormLoader';

const log = new Logger(__filename);

bootstrapMicroframework({
    loaders: [
        iocLoader,
        typeormLoader,
        expressLoader,
        homeLoader,
        publicLoader,
    ],
})
    .then(() => banner(log))
    .catch(error => console.log("ERR", error));
