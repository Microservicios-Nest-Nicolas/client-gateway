import * as joi from 'joi';

try {
  process.loadEnvFile();
} catch (error) {
  console.log(
    'No .env file found, using environment variables from the system',
  );
}

interface EnvVars {
  PORT: number;
  NATS_SERVERS: Array<string>;
}
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string().required()).required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  natsServers: envVars.NATS_SERVERS,
};
