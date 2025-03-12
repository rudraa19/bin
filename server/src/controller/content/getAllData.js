import { NAMESPACE } from "../../utils/index.js";

const getAllData = async (req, res) => {
  try {
    const { keys } = await NAMESPACE.list();

    const data = [];

    for (let key of keys) {
      try {
        let value = await NAMESPACE.get(key.name);
        value = JSON.parse(value);
        data.push({
          key: key.name,
          title: value.title,
        });
      } catch (parseError) {
        console.error(`Failed to parse value for key: ${key.name}`, parseError);
        data.push({
          key: key.name,
          title: "Invalid or corrupted data",
        });
      }
    }

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
