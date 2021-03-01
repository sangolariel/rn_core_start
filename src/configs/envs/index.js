import * as developmentEnv from './development';
import * as productionEnv from './production';

const env = {
  development: developmentEnv,
  production: productionEnv,
}

export default env[process.env];