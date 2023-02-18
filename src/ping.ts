import "whatwg-fetch";

import { CatalogObject } from "./types";

export async function getObjects(): Promise<CatalogObject[]> {
  const objects = await fetch("https://api.restful-api.dev/objects");
  return objects.json();
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
  } catch (error) {
    console.error(error);
  }
}
