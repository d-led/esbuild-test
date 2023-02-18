import { getObjects } from "./ping";
import { CatalogObject } from "./types";

$(async function () {
  console.log("ready");

  const objects = await getObjects();
  fillObjects(objects);

  const delayedResponse = await tryJQueryHttp();
  showText(`your IP is ${delayedResponse.origin}`);

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
  return $.getJSON("https://httpbin.org/delay/1").promise();
}

function showText(text: string) {
  $("#delayed-text").text(text);
}
