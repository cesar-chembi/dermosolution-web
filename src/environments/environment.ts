// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const host = '157.253.238.75';
const port = '8084';
const appName = 'frontstepbystep-api';
const rootApi = 'api';

export const environment = {
  production: false,
  baseUrl: `http://${host}:${port}/${appName}/${rootApi}/`

  //http://127.0.0.1:8000/api/v1/medicos/1/casos-medicos/
};

