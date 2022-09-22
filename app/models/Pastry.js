import { PastryModel } from "./PastryModel.js";


export async function all() {

  const pastries = await PastryModel.find();

  return pastries;
}

export async function find(id) {

  const pastry = await PastryModel.findOne({ _id: id });

  return pastry;
}

