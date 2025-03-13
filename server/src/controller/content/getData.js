import { BinModel } from "../../db.js";

const getData = async (req, res) => {
  const key = req.query.key;

  if (!key) {
    return res.status(400).json({
      message: "Key is required!",
    });
  }

  try {
    const result = await BinModel.findOne({ key });

    if (!result) {
      return res.status(404).json({
        message: "Data not found!",
      });
    }

    res.json({
      title: result.title,
      content: result.data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default getData;
