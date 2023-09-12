import bcrypt from "bcrypt";
import { SignOptions, sign, verify } from "jsonwebtoken";
import { env } from "../environment";

export const hash = async (input: string): Promise<string> => {
  console.log(input);

  return await bcrypt.hash(input, 10);
};

export const compare = async (
  input: string,
  hashed: string
): Promise<Boolean> => {
  return await bcrypt.compare(input, hashed);
};

export const signJwt = (payload: object, options: SignOptions = {}): string => {
  return sign(payload, env.api.token_secret, {
    ...(options && options),
    algorithm: "HS512",
  });
};

export const verifyJwt = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    verify(token, env.api.token_secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
