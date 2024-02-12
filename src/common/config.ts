function getNumberEnv(key: string, defaultValue: number): number {
  const value = process.env[key];
  if (value === undefined || value.length === 0) {
    return defaultValue;
  }

  const parsed = parseInt(value, 10);
  if (isNaN(parsed) || !isFinite(parsed)) {
    return defaultValue;
  }

  return parsed;
}
export const NODE_ENV: string = process.env['NODE_ENV'] || 'development';
export const DATABASE_URL: string | undefined = process.env['DATABASE_URL'];
export const DATABASE_SSL: string | undefined = process.env['DATABASE_SSL'];
export const DATABASE_MIN_POOL_SIZE: number = getNumberEnv('DATABASE_MIN_POOL_SIZE', 10);
export const DATABASE_MAX_POOL_SIZE: number = getNumberEnv('DATABASE_MAX_POOL_SIZE', 50);
export const API_PORT: number = getNumberEnv('PORT', 4000);
// export const API_CORS_ORIGIN: RegExp = new RegExp(
//   process.env['API_CORS_ORIGIN'] ||
//     '^(https:\\/\\/app\\.beefy\\.(com|finance)|http:\\/\\/localhost(:[0-9]+)?|http:\\/\\/127.0.0.1(:[0-9]+)?)$'
// );
export const API_CORS_ORIGIN = ['circut.farm', 'www.circut.farm', 'localhost'];
export const API_RANGE_KEY: string | undefined = process.env['API_RANGE_KEY'];
export const SNAPSHOT_INTERVAL: number = getNumberEnv('SNAPSHOT_INTERVAL', 15 * 60);
export const SNAPSHOT_RETRY_DELAY: number = getNumberEnv('SNAPSHOT_RETRY_DELAY', 60);
export const SNAPSHOT_RETRY_MAX: number = getNumberEnv('SNAPSHOT_RETRY_MAX', 5);
