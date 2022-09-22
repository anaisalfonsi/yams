import { find } from "../models/User.js";

export default async function (req, res) {
  
  let { userId } = req.session;

  const user = await find(userId);

  let dices = [
    { id: 1, number: null },
    { id: 2, number: null },
    { id: 3, number: null },
    { id: 4, number: null },
    { id: 5, number: null },
  ];

  const launch = async (dices) => {
    dices.map((dice) => {
      dice.number = Math.floor(Math.random() * 6) + 1;
    });
    return dices;
  };

  const dicesLaunch = await launch(dices);

  res.render("game", { dices: dicesLaunch, user: user });
}
