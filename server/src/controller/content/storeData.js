import { NAMESPACE, generateShortId } from "../../utils/index.js";

const storeData = async (req, res) => {
  const data = req.body.data;
  let key;

  if (!data) {
    res.json({
      msg: "Data is required!",
    });
  }

  try {
    key = generateShortId();
    const alreadyExist = await NAMESPACE.get(key);
    if (!alreadyExist) {
      await NAMESPACE.put(key, data);
    } else {
      storeData();
    }
  } catch (error) {
    console.log(error);
  }

  res.json({
    key,
  });
};

export default storeData;
