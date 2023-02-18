import { ping } from "./ping";

ping()
  .then(() => console.log("done"))
  .catch((e) => {
    console.log(`sorry, ${e.message}`);
  });
