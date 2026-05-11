# Redaction Report

## Scan Terms Used

The redaction scan checks for these prohibited examples:

- 2OPMD
- 2ndOpinionMD
- CipherOS
- OGrE
- Ollama
- PubMed
- patient
- diagnosis
- treatment
- HIPAA
- clinical
- medical advice
- backend contract
- private schema
- funding
- A16Z
- YC
- Claude prompt
- receipt
- private repo path
- collaborator names
- private founder story

## Files Scanned

All repo text files were scanned outside `.git/` and `node_modules/`. `PUBLIC_BOUNDARY.md` and this report are allowed to contain the scan terms as prohibited examples.

## Findings

- Initial broad scan found allowed prohibited-example lists in `PUBLIC_BOUNDARY.md` and `REDACTION_REPORT.md`.
- Initial broad scan also found package metadata using the word `funding`.
- Acronym-shaped false positives inside unrelated words were ignored by the exact-term scan.

## Fixes Made

- Removed package-lock funding metadata from `site/package-lock.json`.
- Re-ran the scan with exact word and phrase matching.

## Final Result

Pass. No prohibited exact terms appear outside `PUBLIC_BOUNDARY.md` and `REDACTION_REPORT.md`.
