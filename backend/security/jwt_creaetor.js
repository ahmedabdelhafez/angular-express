import jwt from "jsonwebtoken";

export const createToken = function(userData) {
  let token = jwt.sign(userData, process.env.secret, {
    issuer: process.env.issuer,
    algorithm: process.env.algorithm,
    expiresIn: process.env.expiresIn
  });
  return token;
};
