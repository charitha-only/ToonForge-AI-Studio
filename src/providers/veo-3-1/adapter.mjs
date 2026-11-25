const supportedMethods = new Set(["text-to-video", "image-to-video", "first-last-frame", "reference-guided"]);

export function createVeoJobCard({ shotId, prompt, method, referenceAssets = [], capabilities = {} }) {
  if (!shotId || !prompt) throw new Error("shotId and prompt are required.");
  if (!supportedMethods.has(method)) throw new Error(`Unsupported Veo planning method: ${method}`);
  if (method !== "text-to-video" && referenceAssets.length === 0) {
    throw new Error(`${method} requires at least one approved reference asset.`);
  }
  return {
    shotId,
    provider: "Google Veo 3.1",
    method,
    prompt,
    referenceAssets,
    execution: capabilities.apiAccess === true ? "API_NOT_IMPLEMENTED_REQUIRES_EXPLICIT_AUTHORIZATION" : "HUMAN_OPERATED_PENDING_VERIFIED_ACCESS",
    requestedDurationSeconds: capabilities.durationSeconds ?? null,
    audioRequested: capabilities.audio === true,
    status: "NOT GENERATED"
  };
}
