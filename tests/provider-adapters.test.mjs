import assert from "node:assert/strict";
import { createVeoJobCard } from "../src/providers/veo-3-1/adapter.mjs";
import { prepareManualMuseUpload } from "../src/providers/muse-ai/adapter.mjs";
import { validateAssetManifest } from "../src/pipeline/asset-manifest.mjs";

const card = createVeoJobCard({shotId: "SH-010-010", prompt: "test", method: "image-to-video", referenceAssets: ["REF-ELIO-CANON-01"]});
assert.equal(card.execution, "HUMAN_OPERATED_PENDING_VERIFIED_ACCESS");
assert.equal(card.status, "NOT GENERATED");
assert.throws(() => createVeoJobCard({shotId: "SH", prompt: "test", method: "image-to-video"}), /requires at least one/);
const upload = prepareManualMuseUpload({assetId: "SB-020-020", filename: "frame.png", localPath: "assets/images/storyboard/frame.png"});
assert.equal(upload.uploadStatus, "PENDING_USER_AUTHORIZED_UPLOAD");
assert.throws(() => prepareManualMuseUpload({assetId: "A"}), /required/);
assert.deepEqual(validateAssetManifest({assets: [{assetId: "A", status: "NOT GENERATED", file: null}]}, process.cwd()), []);
assert.match(validateAssetManifest({assets: [{assetId: "A", status: "NOT GENERATED", file: "unexpected.mp4"}]}, process.cwd())[0], /NOT GENERATED/);
console.log("Provider adapter tests passed (mock-free planning and error paths).");
