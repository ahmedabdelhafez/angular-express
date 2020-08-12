import * as jwt from "jsonwebtoken";

export const createToken = function (userData) {
  const token = jwt.sign(userData, process.env.SECRET, {
    issuer: process.env.ISSUER,
    algorithm: "HS512",
    expiresIn: "2m",
  });
  return token;
};
