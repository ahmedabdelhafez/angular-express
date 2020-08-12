import * as passportjwt from "passport-jwt";
import * as passport from "passport";
import { Users } from "../model/usersModel";

const jwtstrategy = passportjwt.Strategy;
const extractjwt = passportjwt.ExtractJwt;
const jwtoptions = Object.create({});

jwtoptions.jwtFromRequest = extractjwt.fromAuthHeaderAsBearerToken();
// #########################################################################
jwtoptions.secretOrKey = "mysecret";
jwtoptions.issuer = process.env.issuer;
jwtoptions.algorithm = process.env.algorithm;
jwtoptions.ignoreExpiration = false;

export const passportconfig = passport.use(
  new jwtstrategy(jwtoptions, function (jwtpayload, done) {
    console.log("all payloads ar comming here");
    Users.findOne({
      email: jwtpayload.email,
    })
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false, {
            errors: {
              msg: "username or password are invalid",
            },
          });
        }
      })
      .catch((err) => {
        return done(err, false);
      });
  })
);
