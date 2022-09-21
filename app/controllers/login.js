import session from "express-session";
import { userFind } from "../models/User.js";
import bcrypt from "bcrypt";


export default async function (req, res) {
  const testReact = "React c'est cool";

  const { email, password } = req.body;

  let { message } = req.session;

    if (email && password) {

      const user = await userFind(email);

      if (user) {
        const match = await bcrypt.compare(password, user.password);

        if (match) {
          req.session.userId = user._id;
          res.redirect("/play");
        } else {
          message = "Mot de passe incorrect";
          res.redirect("/login");
        }
      } else {
        message = "Pas d'utilisateur trouvé avec cette adresse email";
      }
    } else if (email === "" || password === "") {
      message = "Veuillez remplir tous les champs";
    }
    
  res.send({ message, testReact: testReact });
}
