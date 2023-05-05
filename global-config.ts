import { ConfigModule } from '@nestjs/config';

let configPath: string;

switch (process.env.NODE_ENV) {
  case 'production':
    configPath = '.env.prod';
    break;
  case 'test':
    configPath = '.env.test';
    break;
  default:
    configPath = '.env';
    break;
}

ConfigModule.forRoot({
  envFilePath: configPath,
});

const checkEnvironmentFor = (variable: string) => {
  if (process.env.hasOwnProperty(variable)) return process.env[variable];

  throw `MISSING ${variable} VARIABLE IN PROCESS ENVIRONMENT`;
};

export const NODE_ENV = process.env.NODE_ENV;
export const APP_NAME = checkEnvironmentFor('APP_NAME');
export const APP_DESCRIPTION = checkEnvironmentFor('APP_DESCRIPTION');
export const APP_VERSION = checkEnvironmentFor('APP_VERSION');
export const POSTGRES_PORT = Number(checkEnvironmentFor('POSTGRES_PORT'));
export const POSTGRES_USER = checkEnvironmentFor('POSTGRES_USER');
export const POSTGRES_HOST = checkEnvironmentFor('POSTGRES_HOST');
export const POSTGRES_PASSWORD = checkEnvironmentFor('POSTGRES_PASSWORD');
export const POSTGRES_DB = checkEnvironmentFor('POSTGRES_DB');
export const PORT = Number(checkEnvironmentFor('PORT'));
export const LOG_LEVEL = process.env.LOG_LEVEL
  ? process.env.LOG_LEVEL
  : 'default';
export const RECORDS_ON_REQUEST = 50;
export const HISTORY_DATA_LIMIT = 50;

