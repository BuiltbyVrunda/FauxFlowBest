# FauxFlow – AI-Powered Misinformation Detection Tool 🕵️‍♀️🔍

FauxFlow is an interactive AI prototype that scans text, images, and videos to detect misinformation. It’s fast, privacy-first, and multilingual, providing credibility scores, pattern tags, and explanations.

---

## Core Idea
- Quick-toggle tool (like turning on Wi-Fi) to instantly scan content
- Shows credibility scores: ✅ Authentic, ⚠ Suspicious, ❌ Fake
- Provides pattern tags and one-line explanations (Reason Generator)
- Simplifies complex/legal content into plain language
- Supports English + regional Indian languages
- Privacy-first design

---

## Website Prototype

### Landing Page
- Clean hero section with tagline: “Misinformation Detection. As Easy as Switching On Wi-Fi.”
- Call-to-action button: Try FauxFlow Prototype

### Interactive Quick-Toggle
- Mobile UI toggle (OFF → ON)
- Ripple, glow, and pulse animations
- ON state shows: “🔍 Scanning in progress…” (3–5s animation)
- Automatically transitions to Results Page

### Scanning & Results Page
- Highlights content with colors:
  - ✅ Verified (green)
  - ⚠ Suspicious (yellow)
  - ❌ Fake (red)
- Analysis summary (example): Verified:2, Suspicious:1, Fake:1, Score:79%
- Shows Pattern Tag + Explanation
- Advanced Edit Detection card (metadata, reverse-image, synthetic score)
- Modal with sources + one-line explanations

### Features Section
- Real-time multimodal scanning (text, image, video)
- AI-powered fact verification
- Credibility scoring
- Simplification engine
- Multi-language support
- Privacy-first

### How It Works
- Flow: User → Toggle ON → Extraction → AI Analysis → Score → Explainable Output

### Architecture
- Vertex AI NLP, Vision, Media Translation
- Gemini Pro
- Google Fact Check API
- Firebase, BigQuery, Cloud Run

---

## Reason Generator (Pattern Tags)
- Out-of-Context Image/Video
- Edited or Cropped Media
- Wrong Numbers / Fake Statistics
- Emotion-bait Language
- Old Event Shared as New
- Manipulated Audio
- Synthetic Media
- Misattributed Quote

**Example:**
- ⚠ Misleading – Reason: Out-of-Context Image
  > This photo was first published in 2016 and is being shared as if it is current.

---

## Implementation Notes
- Mock responses used for text, image, and video scans
- Wire mock APIs for interactive prototype feel
- Code hooks ready for Gemini, Fact Check API, and reverse-image search

---


## Deliverable
- Working toggle with animations
- Scan progress → automatic results display
- Credibility score, highlights, pattern tag, explanation, and mock sources
- Advanced Edit Detection card
- Features, How It Works, and Architecture sections styled (static)

---

## Author
- Vrunda C
- GitHub: [BuiltbyVrunda](https://github.com/BuiltbyVrunda)
- Prathiksha Holla
- Github:[prathikshaholla](https://github.com/prathikshaholla)
- Abhiraam Adiga
- Github:[abhiraamadiga](https://github.com/abhiraamadiga)
- Srinidhi P
- GitHub:[srinidhi406](https://github.com/srinidhi406)
- Sakshi Shetty
- GitHub

