import 'whatwg-fetch';

import { CatalogObject } from './types';


export async function ping() {
    const f = async (param: any) => console.log(`ping ${param}`);

    console.log('starting ping');
    await f(1);
    await f(2);

    try {
        const objects = await fetch('https://api.restful-api.dev/objects');

        (await objects.json() as CatalogObject[]).forEach((obj: CatalogObject) => {
            console.log(`${obj.id}: ${obj.name}`);
        });
    } catch (error) {
        console.error(error);
    }
}
