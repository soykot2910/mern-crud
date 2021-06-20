import User from "../models/userModel.js";

const addUser = async (req, res) => {
  const { name, username, email, phone, website } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    username,
    email,
    phone,
    website,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const getUser = async (req, res) => {
  console.log(req.params.id);
  const user = await User.findById(req.params.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.website = req.body.website || user.website;
    const updateUserData = await user.save();
    res.json({
      _id: updateUserData._id,
      name: updateUserData.name,
      username: updateUserData.username,
      email: updateUserData.email,
      phone: updateUserData.phone,
      website: updateUserData.website,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User remvoed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

export { addUser, getUser, getUsers, updateUser, deleteUser };
