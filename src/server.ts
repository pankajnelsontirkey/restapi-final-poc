import { config } from 'dotenv';
import { App } from './app';

config();

const PORT = +process.env.PORT;

const AppInstance = new App();

AppInstance.app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
