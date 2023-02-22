const userCollection = require("../model/model");

exports.create = async (req, res) => {
  try {
    const newCollection = new userCollection({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
    });

    const newData = await newCollection.save();
    res.status(201).send(newData);
  } catch (error) {
    // console.log("object");
    res.status(500).send({
      message: error.message,
    });
  }
};
exports.find = async (req, res) => {
  const id = req.query.id;
  try {
    if (id) {
      const data = await userCollection.findById(id);
      res.send({
        data: data,
        message: "Single data is found.",
      });
    } else {
      const data = await userCollection.find();
      res.send({
        data: data,
        message: "All data is found.",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "The data did not found.",
    });
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    await userCollection.updateOne({ _id: id }, req.body).then((data) => {
      console.log("result:", data);
      if (!data) {
        res.status(400).send({
          message: `Cannot update user with ${id}. user not found.`,
        });
      } else {
        res.status(200).send({
          data: data,
          result: req.body,
          message: "The data is updated successfully.",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userCollection.deleteOne({ _id: id });
    if (result.deletedCount != 0) {
      res.status(201).send({
        success: true,
        message: "user deleted successfully.",
        data: result,
      });
    } else {
      res.status(201).send({
        success: false,
        message: "user is not found.",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
