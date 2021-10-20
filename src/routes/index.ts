import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import { CreateMessageController } from '../controller/CreateMessageController';
import { GetLast3MessagesController } from '../controller/GetLast3MessagesController';
import { ProfileUserController } from '../controller/ProfileUserController';

const router = Router();

router.get('/github', (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});
router.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  return response.json({ code });
});

router.post('/authenticate', new AuthenticateUserController().handle);
router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle,
);
router.get('/messages/last3', new GetLast3MessagesController().handle);
router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
