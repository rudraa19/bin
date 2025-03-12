import { NAMESPACE, generateShortId } from "../../utils/index.js";

const storeData = async (req, res) => {
  const data = req.body.data;

  if (!data) {
    return res.json({
      message: "Data is required!",
    });
  }

  try {
    let key;
    let alreadyExist;
    let attempts = 3;

    do {
      key = generateShortId();
      alreadyExist = await NAMESPACE.get(key);
      attempts--;
    } while (alreadyExist && attempts > 0);

    if (alreadyExist) {
      return res
        .status(500)
        .json({ message: "Failed to generate a unique key" });
    }

    await NAMESPACE.put(key, data);

    res.json({
      key,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default storeData;
