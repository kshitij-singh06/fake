# TruthScan

TruthScan is a Chrome extension and optional API backend for detecting AI-generated text, fake news, and suspicious content on the web. The extension can run fully offline using local ONNX models, or switch to API mode for richer fact-checking, summarization, Q&A, and image analysis.

## What This Repo Contains

- **Chrome extension** (Tools/) with local ONNX inference for AI-text and fake-news detection.
- **API server** (Kit/) that provides scraping, fact-checking, summarization, Q&A, sentiment, image detection, and a multi-signal fusion engine.
- **Web demo server** (server.js at repo root) that serves the demo UI and exposes the same API endpoints on port 5000.

## ML Models (Local ONNX)

The extension runs the following Hugging Face models converted to ONNX and quantized:

- `openai-community/roberta-base-openai-detector`
- `hamzab/roberta-fake-news-classification`

Model assets live in Tools/public/models and are loaded via onnxruntime-web with custom RoBERTa BPE tokenization.

## Project Structure

```
TruthScan/
├── Kit/                 # API server (Node.js/Express)
│   ├── controllers/     # Detection, fact-checking, QA, summarize, image, fusion
│   ├── lib/             # Fusion logic, domain credibility, model helpers
│   ├── routes/          # Express routes
│   └── server.js        # API entrypoint (default :3000)
├── Tools/               # Chrome extension (React/TypeScript)
│   ├── src/             # Popup UI, background, content scripts
│   ├── public/          # Extension assets + ONNX models
│   └── manifest.json
├── public/              # Demo web UI
├── server.js            # Demo server (default :5000)
└── README.md
```

## Setup

### 1) Chrome Extension (Local Mode Only)

This does not require any backend or API keys.

```bash
cd Tools
npm install
npm run build
```

Load the extension:

1. Open `chrome://extensions/`
2. Enable Developer mode
3. Click Load unpacked
4. Select Tools/dist

### 2) API Server (Optional)

The API server powers scraping, fact-checking, summarization, Q&A, image detection, and fusion. It runs on port 3000 by default.

```bash
cd Kit
npm install
node server.js
```

### 3) Demo Server (Optional)

The repo root server serves public/index.html and exposes the same API routes on port 5000. It reads Kit/.env for keys.

```bash
npm install
node server.js
```

## Quick Demo

Pick the flow you want:

### A) Local Extension Only (Offline)

```bash
cd Tools
npm install
npm run build
```

Load Tools/dist in Chrome and scan any page in Local mode.

### B) API Mode + Demo UI

```bash
cd Kit
npm install
node server.js
```

In another terminal:

```bash
npm install
node server.js
```

Open http://localhost:5000 for the demo UI. In the extension, switch to API mode to use the backend.

## Environment Variables (Kit/.env)

Only required if you run the API server or demo server.

```env
GEMINI_API_KEY=...
GROQ_API_KEY=...
NVIDIA_API_KEY=...
TAVILY_API_KEY=...
GOOGLE_FACT_CHECK_API_KEY=...
```

## API Endpoints

- `POST /api/scrape` - Extracts page text and images
- `POST /api/detect` - LLM-based AI text detection
- `POST /api/factcheck` - Claim extraction + verification
- `POST /api/sentiment` - Sentiment analysis
- `POST /api/summarize` - Bullet-point summarization
- `POST /api/qa` - Question answering over content
- `POST /api/image-detect-ai` - NVIDIA image AI detection
- `POST /api/fusion` - Multi-signal fake-news score (ONNX + sources + fact-check)

## Notes

- The extension defaults to **Local** mode (ONNX). **API** mode calls the Kit server at http://localhost:3000.
- The root demo server binds to http://0.0.0.0:5000 and proxies all API routes to the same Kit handlers.

## Security & Privacy

- Local mode runs entirely in the browser with no network calls.
- API mode only sends page text/URLs to your own server instance.

