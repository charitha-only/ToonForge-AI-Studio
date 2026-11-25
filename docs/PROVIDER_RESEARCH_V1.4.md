# Provider research — v1.4

**Research date:** 2026-11-25  
**Purpose:** record only provider facts that can safely inform an optional ToonForge adapter. This is not evidence of access for any particular user, project, account, or region.

## Google Veo 3.1 — verified

Google's current documentation lists the GA Standard and Fast model IDs as `veo-3.1-generate-001` and `veo-3.1-fast-generate-001`. In the documented Google Cloud environment, both support text-to-video, image-to-video, first-and-last-frame generation, video extension, reference images, sound generation, and C2PA Content Credentials. The Lite variant does **not** support reference images. See Google's [Veo 3.1 capability table](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/veo/3-1-generate).

For Standard/Fast, the documented clip durations are 4, 6, or 8 seconds; reference-image-to-video is limited to 8 seconds. The same table documents up to four outputs per prompt, `16:9` or `9:16`, 24 fps MP4 output, English prompts, and US `us-central1` availability. Treat those as interface-specific constraints, not a guarantee that an individual account can use every option.

Google documents a programmatic Vertex/Agent Platform path: authenticated requests start a long-running operation and write results to a caller-specified Cloud Storage location. First/last-frame generation is explicitly documented for the Standard and Fast model IDs. See [first/last-frame generation](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/video/generate-videos-from-first-and-last-frames) and the [official image-to-video sample](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/samples/googlegenaisdk-videogen-with-img).

### Veo-safe adapter boundary

- A `veo-3-1` adapter may prepare requests and ingest completed outputs only after the operator has configured Google Cloud authentication, a permitted project/location, output storage, and billing/quota as required by Google.
- It must treat generation as pending until the long-running operation reports completion and the output object is retrievable. A submitted request, model name, or prompt is not a generated clip.
- It must record the model, interface, prompt revision, references, job/operation ID (when available), output URI, and actual inspected duration. Preserve C2PA metadata when it is present; do not claim it is present without inspecting the delivered file/metadata.
- It must not assume that Google Flow, the Gemini Developer API, and Google Cloud expose the same models or controls. Google’s release information should be checked again before implementation because model lifecycle and interface availability change. See [Google Cloud Vertex AI release notes](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/release-notes).

### Not verified for this project/account

No credentials, billing status, Google Cloud project, region, quota, Storage bucket, policy eligibility, or approved interface were provided during this audit. Therefore this package must provide a human-operated path and must not make a live Veo call or claim Veo access or media generation.

## `muse.ai` — verified scope is insufficient for a media adapter

The request identifies an earlier/other video-hosting product named “muse.ai” and explicitly says not to confuse it with Meta's separate Muse agent. At the research date, the public `muse.ai` domain resolves to Meta's personal AI-agent product; its public page describes a secure VM, browser use, connected apps, and user approval for important actions—not a cartoon-video hosting, upload, playback-library, or media-management API. See [Muse’s public product page](https://muse.ai/).

Meta's public connector guidance describes how **third-party services** can expose their own endpoints, OAuth/API-key setup, scopes, permissions, and review materials to the Muse agent. It does not document a Muse-owned media upload API for ToonForge. See [Muse Connector guidelines](https://platform.muse.ai/docs).

### Muse-safe adapter boundary

- Do **not** implement automated upload, authentication, or publishing against `muse.ai` from these findings.
- Do **not** describe Meta Muse as the user-selected video-hosting service, nor infer it is the historical/unrelated product intended by the request.
- Use an editor-neutral manual media-management workflow: prepare a manifest, filename, checksum/size, source path, review status, and blank `media_id`/`playback_url` fields. Populate upload status only after the operator confirms it in the intended service.
- An optional provider adapter may be designed only after the user supplies the exact service URL and official API documentation, and after account authorization is independently verified. Credentials must remain outside the repository and logs.

### Not verified for this project/account

No account, plan, workspace, upload endpoint, public API documentation, OAuth flow, API key, rate limit, or authorization for the requested non-Meta `muse.ai` media host was available. Accordingly, no upload or sharing capability is verified, and no upload should be attempted.

## Implementation decision

ToonForge should remain tool-agnostic by default. It can supply prompt packs, manifests, asset ingestion, continuity records, and QC gates now; real provider execution stays explicitly human-operated until the capability and authorization checks above succeed.
