import { nanoid } from "nanoid";

const generateShortId = () => {
  return nanoid(6);
};

export default generateShortId;
