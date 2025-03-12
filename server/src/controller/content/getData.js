import { NAMESPACE } from "../../utils/index.js";

const getData = async (req, res) => {
  const key = req.body.key;

  if (!key) {
    return res.status(400).json({
      messge: "Key is required!",
    });
  }

  try {
    const result = await NAMESPACE.get(key);

    if (!result) {
      return res.status(404).json({
        messge: "Data not found!",
      });
    }

    res.json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      messge: "Internal server error",
    });
  }
};

export default getData;
