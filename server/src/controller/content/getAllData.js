import { BinModel } from "../../db.js";

const getAllData = async (req, res) => {
  try {
    const bins = await BinModel.find();

    const data = bins.map((bin) => ({
      key: bin.key,
      title: bin.title,
    }));

    res.json({
      data,
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default getAllData;
