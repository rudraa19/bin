import { NAMESPACE, generateShortId } from "../../utils/index.js";

const storeData = async (req, res) => {
  const { title, data, expiration } = req.body;

  if (!data || !title || !expiration) {
    return res.json({
      message: "Please provide all the required data",
    });
  }

  const expirationDict = {
    "0n": 0,
    "10m": 600,
    "1h": 3600,
    "1d": 86400,
    "1w": 604800,
    "2w": 1209600,
    "1M": 2592000,
  };
  const expirationSeconds = expirationDict[expiration];

  if (expirationSeconds === undefined) {
    return res.json({
      message: "Please enter valid expiration",
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
      return res.status(500).json({
        message: "Failed to generate a unique key",
      });
    }
    const value = { title, data };
    await NAMESPACE.put(
      key,
      value,
      expirationSeconds === 0 ? {} : { expirationTtl: expirationSeconds }
    );

    setTimeout(() => {
      res.json({
        key,
      });
    }, 1000 * 3);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default storeData;
