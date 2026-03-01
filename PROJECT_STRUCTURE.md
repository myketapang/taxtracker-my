# TaxTracker MY - Folder Structure & Setup Guide

```
tax-relief-tracker/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── ReliefWizard.jsx
│   │   ├── ReliefTracker.jsx
│   │   ├── TaxEstimator.jsx
│   │   ├── PreFilingChecklist.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Modal.jsx
│   │   └── ReceiptUpload.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Wizard.jsx
│   │   ├── Tracker.jsx
│   │   ├── Estimator.jsx
│   │   ├── Checklist.jsx
│   │   ├── FAQ.jsx
│   │   └── NotFound.jsx
│   │
│   ├── utils/
│   │   ├── reliefData.js
│   │   ├── taxCalculations.js
│   │   ├── storage.js
│   │   └── constants.js
│   │
│   ├── styles/
│   │   ├── App.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
│
├── .gitignore
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
└── vercel.json (optional for Vercel deployment)
```

## Setup Instructions

1. **Clone repository**
```bash
git clone https://github.com/yourusername/tax-relief-tracker.git
cd tax-relief-tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Run locally**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

5. **Deploy to Netlify**
```bash
# Via CLI
npm install -g netlify-cli
netlify deploy --prod --dir=build

# Or connect GitHub repo directly to Netlify dashboard
```

## Netlify Configuration
See `netlify.toml` for production deployment settings.
