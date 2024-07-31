import { smi2003 } from "~/content/smi/2003/smi.js";
import { smi2009 } from "~/content/smi/2009/smi.js";
import { smi2010 } from "~/content/smi/2010/smi.js";
import { smi2011 } from "~/content/smi/2011/smi.js";
import { smi2013 } from "~/content/smi/2013/smi.js";
import { smi2014 } from "~/content/smi/2014/smi.js";
import { smi2021 } from "~/content/smi/2021/smi.js";
import { smi2022 } from "~/content/smi/2022/smi.js";
import { smi2023 } from "~/content/smi/2023/smi.js";

export const smiInfo = () => {
  return [
    smi2023(),
    smi2022(),
    smi2021(),
    smi2014(),
    smi2013(),
    smi2011(),
    smi2010(),
    smi2009(),
    smi2003(),
  ];
};
