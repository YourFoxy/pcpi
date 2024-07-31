import { article1 } from "./article1.js";
import { article2 } from "./article2.js";

export const smi2014 = () => {
  const smi = {
    year: "2014",
    articles: [article1(), article2()],
  };

  return smi;
};
