import { config } from 'dotenv';
import { App } from './app';

config();

const PORT = +process.env.PORT;

const APPINSTANCE = new App();

APPINSTANCE.app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
