import { NAMESPACE } from "../../utils/index.js";

const getData = async (req, res) => {
  const key = req.query.key;

  if (!key) {
    return res.status(400).json({
      message: "Key is required!",
    });
  }

  try {
    const result = await NAMESPACE.get(key);

    if (!result) {
      return res.status(404).json({
        message: "Data not found!",
      });
    }
    let parseResult = JSON.parse(result);

    res.json({
      title: parseResult.title,
      content: parseResult.data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default getData;
