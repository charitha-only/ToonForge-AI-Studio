# Real-media production

## Operating boundary

Separate prompt planning, human-operated generation, programmatic generation, asset ingestion, review, and publishing. An asset becomes `GENERATED` only after a real tool returns it and it is saved in the project. It becomes `PASS` only after applicable inspection. A prompt passing review is not media passing review.

## ChatGPT Image workflow

Generate canonicals, expressions, environments, props, and keyframes as individual versioned assets. Inspect each result against the character packet; preserve rejected takes with a defect note, then use one targeted correction. When an active interface supports image references, provide approved canonicals and state what must remain invariant. See [OpenAI's image-generation guide](https://developers.openai.com/api/docs/guides/image-generation) for current API capabilities; verify the actual ChatGPT/Codex interface before assuming equivalent controls.

## Veo 3.1 workflow

Use [provider research](../docs/PROVIDER_RESEARCH_V1.4.md) and the dedicated adapter before planning a job. Confirm the user’s actual Google interface, project authorization, billing/quota, accepted inputs, available durations, audio setting, and output destination. If those conditions are not confirmed, create a human-operated job card and wait for the user to import a real clip. Do not make an unverified API call.

## Ingestion and review

For every file, record its asset ID, source tool, method, prompt version, references, relative path, duration where measured, review status, defects, and approver. Validate path existence and treat absent files as `NOT GENERATED`, never as failed/approved media.

## Recovery

On identity or continuity failure: preserve the rejected file, classify defect, revise the narrowest relevant prompt/reference, generate one new version, compare with canonical, then update the manifest. On access, quota, or upload failure: capture the non-secret error, mark the record pending/retry, and do not repeat a cost-bearing action without approval.
