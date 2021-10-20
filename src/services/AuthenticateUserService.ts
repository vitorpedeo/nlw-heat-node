import axios from 'axios';
import jwt from 'jsonwebtoken';

import { prismaClient } from '../prisma';

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserInfoResponse {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const accessTokenUrl = 'https://github.com/login/oauth/access_token';
    const userInfoUrl = 'https://api.github.com/user';

    const accessTokenResponse = await axios.post<IAccessTokenResponse>(
      accessTokenUrl,
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const { access_token } = accessTokenResponse.data;

    const userInfoResponse = await axios.get<IUserInfoResponse>(userInfoUrl, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    const { id, login, avatar_url, name } = userInfoResponse.data;

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id,
      },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id,
          avatar_url,
          login,
          name,
        },
      });
    }

    const token = jwt.sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { token, user };
  }
}

export { AuthenticateUserService };
