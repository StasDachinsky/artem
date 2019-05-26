import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { env } from '../env';
import * as express from 'express';

export const homeLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if ( settings ) {
        const expressApp = settings.getData('express_app');
        expressApp.get(
            env.app.routePrefix,
            (req: express.Request, res: express.Response) => {
                return res.json({
                    name: env.app.name,
                    version: env.app.version,
                    description: env.app.description,
                });
            }
        );

    }
};
