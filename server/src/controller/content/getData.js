import { NAMESPACE } from "../../utils/index.js";

const getData = async (req, res) => {
  const key = req.body.key;
  let result;

  try {
    result = await NAMESPACE.get(key);
  } catch (error) {
    console.log(error);
  }

  res.json({
    result,
  });
};

export default getData;
