import * as fs from 'fs';
import * as path from 'path';

/**
 * Reads the base URL from env.json
 * @returns baseUrl string
 */
export function getBaseUrl(): string {
  const envPath = path.resolve(__dirname, '../env.json');
  const data = fs.readFileSync(envPath, 'utf-8');
  const json = JSON.parse(data);
  if (!json.baseUrl) throw new Error('baseUrl not found in env.json');
  return json.baseUrl;
}
