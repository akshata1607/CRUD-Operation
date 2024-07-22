const userModel = require("./userModel");

module.exports.getDataFromDBService = async () => {
  try {
    const result = await userModel.find({});
    return result;
  } catch (error) {
    return false;
  }
};

module.exports.createUserDBService = async (userDetails) => {
  try {
    const userModelData = new userModel();

    userModelData.name = userDetails.name;
    userModelData.address = userDetails.address;
    userModelData.phone = userDetails.phone;

    await userModelData.save();
    return true;
  } catch (error) {
    return false;
  }
};

module.exports.updateUserDBService = async (id, userDetails) => {
  try {
    const result = await userModel.findByIdAndUpdate(id, userDetails, {
      new: true,
    });
    return result;
  } catch (error) {
    return false;
  }
};

module.exports.removeUserDBService = async (id) => {
  try {
    const result = await userModel.findByIdAndDelete(id);
    return result;
  } catch (error) {
    return false;
  }
};
