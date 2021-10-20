import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error_code: 'token.invalid' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET as string);

    request.user_id = sub as string;

    return next();
  } catch (error) {
    return response.status(401).json({ error_code: 'token.expired' });
  }
};
