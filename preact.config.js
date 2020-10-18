const { parsed } = require("dotenv-safe").config();
const { DefinePlugin } = require("webpack");

export default function (config, env, helpers) {
  // dotenv injection, local development
  const dotEnvKeys = Object.keys(parsed).reduce(
    (env, key) => ({
      ...env,
      [`process.env.${key}`]: JSON.stringify(parsed[key]),
    }),
    {}
  );

  // process.env injection, production (Netlify)
  const processEnvKeys = Object.keys(process.env).reduce(
    (env, key) => ({
      ...env,
      [`process.env.${key}`]: JSON.stringify(process.env[key]),
    }),
    {}
  );

  config.plugins.push(new DefinePlugin({ ...processEnvKeys, ...dotEnvKeys }));
}
