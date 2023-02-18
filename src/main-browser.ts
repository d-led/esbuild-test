import { getObjects } from "./ping";
import { CatalogObject } from "./types";

$(async function () {
  console.log("ready");
  try {
    const objects = await getObjects();
    fillObjects(objects);

    const delayedResponse = await tryJQueryHttp();
    showText(`your IP is ${delayedResponse.origin}`);
  } catch (e) {
    showText(`sorry, ${e.message ?? "an error happened"}`);
  }

  hideSpinner();

  console.log("done");
});

function fillObjects(objects: CatalogObject[]) {
  const objectsEl = $("#objects");

  objects.forEach((o, _) => {
    objectsEl.append(`
            <tr>
                <th scope="row">${o.id}</th>
                <td>${o.name}</td>
            </tr>
        `);
  });

  $("#objects-table").show();
}

function hideSpinner() {
  $("#spinner").hide();
}

async function tryJQueryHttp(): Promise<any> {
  const url = "https://httpbin.org/delay/1";
  return $.getJSON(url)
    .catch((r) => {
      throw new Error(`${r.statusText}, requesting ${url}`);
    })
    .promise();
}

function showText(text: string) {
  $("#delayed-text").text(text);
}
