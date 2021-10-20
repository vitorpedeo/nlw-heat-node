import { serverHttp } from './app';

serverHttp.listen(5000, () => {
  console.log('App listening on port 5000');
});
