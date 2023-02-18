import "whatwg-fetch";

import { CatalogObject } from "./types";

export async function getObjects(): Promise<CatalogObject[]> {
  const url = "https://api.restful-api.dev/objects";
  try {
    const objects = await fetch(url);
    return objects.json();
  } catch (e) {
    throw new Error(`${e.message} ${url}`);
  }
}

export async function ping() {
  const f = async (param: any) => console.log(`ping ${param}`);

  console.log("starting ping");
  await f(1);
  await f(2);

  try {
    (await getObjects()).forEach((obj: CatalogObject) => {
      console.log(`${obj.id}: ${obj.name}`);
    });
  } catch (e) {
    throw e;
  }
}
