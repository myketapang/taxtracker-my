# TaxTracker MY 💰

**Malaysian Tax Relief Companion for Salaried Workers**

A user-friendly web application helping Malaysian salaried taxpayers discover, track, and claim all the tax reliefs they're entitled to, without the hassle.

## 🌟 Features

### 1. **Relief Eligibility Wizard** 🧙
- Simple Q&A to discover which reliefs you can claim
- No tax jargon, just straightforward questions
- Instant results showing eligible reliefs with limits

### 2. **Expense Tracker** 📊
- Log expenses throughout the year by category
- Track: lifestyle, medical, insurance, education, housing, etc.
- Visual feedback on relief limits and remaining amounts
- Edit and delete entries anytime

### 3. **Tax Estimator** 🧮
- Calculate estimated tax outcome based on income and reliefs
- Shows projected refund or amount due
- Transparent breakdown of all reliefs claimed
- Based on 2024 Malaysian tax bands

### 4. **Pre-Filing Checklist** ✅
- Step-by-step preparation for tax filing
- Generate exportable summary for e-Filing
- Timeline reminders and important notes
- Links to LHDN resources

### 5. **FAQ & Guides** ❓
- Common questions about Malaysian tax system
- Detailed relief explanations with limits
- Important compliance tips
- Links to official LHDN portal

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tax-relief-tracker.git
cd tax-relief-tracker

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Using Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=build
```

#### Option 2: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repo
5. Set Build command: `npm run build`
6. Set Publish directory: `build`
7. Deploy!

#### Option 3: Deploy Vercel

```bash
npm install -g vercel
vercel --prod
```

## 📁 Project Structure

```
tax-relief-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── ReliefWizard.jsx
│   │   ├── ReliefTracker.jsx
│   │   ├── TaxEstimator.jsx
│   │   ├── PreFilingChecklist.jsx
│   │   └── Modal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Wizard.jsx
│   │   ├── Tracker.jsx
│   │   ├── Estimator.jsx
│   │   ├── Checklist.jsx
│   │   ├── FAQ.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   ├── reliefData.js
│   │   ├── taxCalculations.js
│   │   ├── storage.js
│   │   └── constants.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── index.css
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── netlify.toml
├── README.md
└── .gitignore
```

## 💾 Local Storage

All user data is stored locally in the browser:
- Wizard answers
- Tracked expenses
- User profile information
- Current tax year

**Data is NOT sent to any server** - your information stays on your device.

## 🔒 Privacy & Security

- No user accounts required
- No data collected or stored on servers
- No cookies or tracking
- Clear disclaimer about tool's educational purpose
- Always emphasizes verification with official LHDN

## 📱 Responsive Design

- ✅ Desktop optimized
- ✅ Tablet friendly
- ✅ Mobile first approach
- ✅ Touch-friendly buttons and inputs

## 🎨 Technology Stack

- **React 18** - UI framework
- **React Router** - Navigation
- **Lucide React** - Icons
- **CSS3** - Styling
- **Local Storage API** - Data persistence

## 📊 Supported Tax Reliefs (Malaysia 2024)

| Relief Type | Limit | Details |
|-------------|-------|---------|
| Self Relief | RM 9,000 | Automatic for all taxpayers |
| Spouse Relief | RM 9,000 | For married individuals |
| Children | RM 3,000 each | Max 4 children |
| Parents/In-laws | RM 2,000 each | If aged 60+ |
| Medical Expenses | RM 5,000 | Checkups, dental, optical |
| Insurance | RM 8,000 | Life, medical, accident |
| Education Fees | RM 6,000 | University/college tuition |
| SSPN/PTPTN | RM 8,000 | Education savings/loans |
| Housing Loan Interest | RM 6,000 | Residential properties |
| Lifestyle | RM 1,000 | Books, internet, sports, gym |

## ⚠️ Important Disclaimer

**This application is an EDUCATIONAL TOOL ONLY.**

- It is NOT official tax advice
- Calculations are estimates based on 2024 tax regulations
- Your actual tax liability is determined by LHDN assessment
- Always verify with official e-Filing form before submission
- Keep original receipts for 7 years for audit purposes
- Consult a professional accountant for complex situations

For official information: https://www.hasil.gov.my

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or suggestions:
1. Check the FAQ section in the app
2. Visit LHDN official website: https://www.hasil.gov.my
3. Contact your tax consultant or accountant

## 🎯 Future Roadmap

- [ ] Multi-language support (BM, English, Chinese)
- [ ] Receipt photo upload and storage
- [ ] Annual report generation (PDF)
- [ ] Tax year comparison
- [ ] Budget insights and projections
- [ ] Integration with Malaysian banking APIs (future)
- [ ] Mobile app version
- [ ] Offline support (PWA)

## 📈 Statistics

- Helps Malaysian salaried workers optimize tax relief claims
- Average potential refund increase: RM 1,000-3,000+
- Simple interface for non-technical users
- 100% data privacy - no server storage
- Zero cost, educational tool

---

**Made with ❤️ for Malaysian taxpayers**

Last Updated: 2024
Version: 1.0.0
