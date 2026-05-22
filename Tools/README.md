# TruthScan Chrome Extension

This package contains the TruthScan browser extension UI and local inference pipeline. It can run fully offline using ONNX models, or switch to API mode to call the backend in Kit/.

## What The Extension Does

- **Local AI-text detection** using ONNX (RoBERTa) with custom BPE tokenization.
- **Local fake-news detection** using ONNX (RoBERTa) on the page text.
- **Optional API mode** for scraping, fact-checking, summarization, Q&A, sentiment, image AI detection, and fusion scoring.

## Local ML Models

The extension loads quantized ONNX versions of:

- `openai-community/roberta-base-openai-detector`
- `hamzab/roberta-fake-news-classification`

Model files live in Tools/public/models and are fetched via `chrome.runtime.getURL`.

## Tech Stack

- React 18 + TypeScript
- Vite + Tailwind CSS
- onnxruntime-web
- Chrome Extension Manifest V3

## Project Structure

```
Tools/
├── src/
│   ├── popup/          # Extension popup UI
│   ├── background/     # Service worker
│   ├── content/        # Content script
│   └── lib/            # Local inference + API client
├── public/             # Static assets + ONNX models
├── dist/               # Build output
└── manifest.json
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Dev Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Load The Extension

1. Build: `npm run build`
2. Open `chrome://extensions/`
3. Enable Developer mode
4. Click Load unpacked and select Tools/dist

## API Mode

API mode calls the backend server at http://localhost:3000 (see Tools/src/lib/api.ts). It unlocks:

- Scraping and extraction
- Fact-checking and fusion scoring
- Summarization and Q&A
- Sentiment analysis
- Image AI detection

Start the API server:

```bash
cd Kit
npm install
node server.js
```

API mode requires keys in Kit/.env. See the root README for the full list.

If you are running the demo UI, use the root server (port 5000) and switch the extension to API mode.

## Quick Demo

### Local Extension Only (Offline)

```bash
npm install
npm run build
```

Load Tools/dist in Chrome and scan any page in Local mode.

### API Mode + Demo UI

```bash
cd ..\Kit
npm install
node server.js
```

In another terminal:

```bash
cd ..
npm install
node server.js
```

Open http://localhost:5000 for the demo UI. Switch the extension to API mode for server-powered features.

## Notes

- Local mode is the default and does not send any data off-device.
- If you only want local ONNX inference, you do not need any API keys.