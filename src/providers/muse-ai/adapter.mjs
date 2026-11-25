export function prepareManualMuseUpload({ assetId, filename, localPath }) {
  if (!assetId || !filename || !localPath) throw new Error("assetId, filename, and localPath are required.");
  return {
    assetId,
    filename,
    localPath,
    provider: "muse.ai",
    automation: "MANUAL_ONLY_UNTIL_SERVICE_URL_ACCESS_AND_API_ARE_VERIFIED",
    uploadStatus: "PENDING_USER_AUTHORIZED_UPLOAD",
    mediaId: null,
    playbackUrl: null,
    error: null
  };
}
