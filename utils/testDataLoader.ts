import * as fs from 'fs';
import * as path from 'path';

/**
 * Loads product names from a JSON file.
 * @param jsonFilePath Path to the JSON file (relative or absolute)
 * @returns Array of product names
 */
export function loadProductNames(jsonFilePath: string): string[] {
  const absolutePath = path.isAbsolute(jsonFilePath)
    ? jsonFilePath
    : path.resolve(__dirname, jsonFilePath);
  const data = fs.readFileSync(absolutePath, 'utf-8');
  const json = JSON.parse(data);
  if (Array.isArray(json)) {
    return json;
  }
  if (Array.isArray(json.productNames)) {
    return json.productNames;
  }
  throw new Error('Invalid product names JSON format');
}
