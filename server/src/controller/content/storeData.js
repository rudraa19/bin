import { BinModel } from "../../db.js";
import { generateShortId } from "../../utils/index.js";

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
    let attempts = 3;
    let existingData;
    do {
      key = generateShortId();
      existingData = await BinModel.findOne({ key });
      attempts--;
    } while (existingData && attempts > 0);

    if (attempts === 0) {
      return res.status(500).json({
        message: "Failed to generate a unique key",
      });
    }

    const expiresAt =
      expirationSeconds === 0
        ? null
        : new Date(Date.now() + expirationSeconds * 1000);

    const newData = new BinModel({
      key,
      title,
      data,
      expiresAt,
    });

    await newData.save();

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
