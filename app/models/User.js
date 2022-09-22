import { UserModel } from "./UserModel.js";


export async function all() {

  const users = await UserModel.find();

  return users;
}

export async function find(id) {

  const user = await UserModel.findOne({ _id: id }, { password: 0 });

  return user;
}

export async function userFind(email) {

  const user = await UserModel.findOne({
    email: email,
  });

  return user;
}

export async function insertOne(user) {

  await UserModel.create(user);

  return;
}

export async function updateOne(userId, pastriesCount) {

  await UserModel.updateOne({ _id: userId }, { pastriesCount: pastriesCount });

  return;
}

export async function updatePastries(userId, pastries) {

  await UserModel.updateOne({ _id: userId }, { pastries: pastries });

  return;
}

export async function updateWonPastries(userId, pastry) {

  await UserModel.updateOne(
    { _id: userId },
    { $push: { wonPastries: pastry } }
  );

  return;
}

