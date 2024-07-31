import { article1 } from "./article1.js";
import { article2 } from "./article2.js";
import { article3 } from "./article3.js";

export const smi2023 = () => {
  const smi = {
    year: "2023",
    articles: [article1(), article2(), article3()],
  };

  return smi;
};
