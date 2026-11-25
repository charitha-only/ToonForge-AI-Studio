import { existsSync } from "node:fs";
import { resolve } from "node:path";

export function validateAssetManifest(manifest, projectRoot) {
  const errors = [];
  for (const asset of manifest.assets ?? []) {
    if (!asset.assetId || !asset.status) errors.push("Each asset needs assetId and status.");
    if (asset.status === "PASS" && (!asset.file || !existsSync(resolve(projectRoot, asset.file)))) {
      errors.push(`${asset.assetId} is PASS but its file is absent.`);
    }
    if (asset.status === "NOT GENERATED" && asset.file) errors.push(`${asset.assetId} is NOT GENERATED but names a file.`);
  }
  return errors;
}
