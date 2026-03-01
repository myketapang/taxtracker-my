# TaxTracker MY - Complete Wireframe & Design Guide

## 🎨 WIREFRAME OVERVIEW

### Page Layout Structure

```
┌─────────────────────────────────────────────────┐
│         NAVBAR (Sticky Top)                     │
│  💰 TaxTracker MY | Home Wizard Tracker...     │
└─────────────────────────────────────────────────┘
│                                                   │
│    HEADER SECTION (Hero/Page Title)             │
│    ═════════════════════════════════             │
│    Title | Subtitle | Icon                      │
│                                                   │
├─────────────────────────────────────────────────┤
│                                                   │
│    MAIN CONTENT AREA                            │
│    ═══════════════════════════════              │
│                                                   │
│    [Cards] [Cards] [Cards]  (Responsive Grid)   │
│    [Cards] [Cards] [Cards]                      │
│                                                   │
│                                                   │
├─────────────────────────────────────────────────┤
│    FOOTER                                        │
│    © 2024 TaxTracker MY | Disclaimer            │
└─────────────────────────────────────────────────┘
```

---

## 📱 PAGE WIREFRAMES

### 1. HOME PAGE
```
┌─────────────────────────────────────┐
│        HOME HEADER                   │
│  Welcome to TaxTracker MY           │
│  "Maximize your tax reliefs"        │
│  [Start the Wizard Button]          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  HOW IT WORKS SECTION               │
├─────────────────────────────────────┤
│ [Icon] Relief Wizard    [Icon] Tracker
│ Description             Description
│
│ [Icon] Estimator        [Icon] Checklist
│ Description             Description
│
│ [Icon] FAQ              [Icon] Insights
│ Description             Description
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  PAIN POINTS / WHY USE              │
├─────────────────────────────────────┤
│ 🤔 "I'm not sure what I can claim"
│    → We'll guide you through it
│
│ 📝 "I can't remember all expenses"
│    → Track them all year round
│
│ 💸 "What's my refund?"
│    → Get a clear estimate
│
│ 😰 "Am I claiming too much?"
│    → We show you the limits
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  CTA SECTION                        │
│  Ready to Maximize Your Refund?    │
│  [Start Now] [Learn More]          │
└─────────────────────────────────────┘
```

### 2. RELIEF WIZARD PAGE
```
┌─────────────────────────────────────┐
│  WIZARD HEADER                      │
│  Relief Eligibility Wizard          │
│  Discover which reliefs apply       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  PROGRESS BAR                       │
│  [████░░░░░░░░░░░░░░░░]            │
│  Question 3 of 10                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  QUESTION                           │
│  "Are you married?"                 │
│                                     │
│  [  NO  ]  [  YES  ]               │
│                                     │
│  [← Back]  [Skip →]                │
└─────────────────────────────────────┘

RESULTS VIEW:
┌─────────────────────────────────────┐
│  YOUR ELIGIBLE RELIEFS              │
├─────────────────────────────────────┤
│ ┌─────────────────┐ ┌──────────────┐
│ │ Self Relief     │ │ Spouse Relief│
│ │ RM 9,000        │ │ RM 9,000     │
│ │ Automatic       │ │ If married   │
│ └─────────────────┘ └──────────────┘
│
│ ┌─────────────────┐ ┌──────────────┐
│ │ Medical Exp.    │ │ Insurance    │
│ │ RM 5,000        │ │ RM 8,000     │
│ │ Checkups, etc   │ │ Life/Medical │
│ └─────────────────┘ └──────────────┘
│
│ [Start Over]
└─────────────────────────────────────┘
```

### 3. EXPENSE TRACKER PAGE
```
LEFT SIDEBAR:
┌──────────────────────┐
│  ADD EXPENSE         │
├──────────────────────┤
│ Amount: [________]   │
│                      │
│ Category:            │
│ [Dropdown ▼]        │
│ - Books             │
│ - Internet          │
│ - Medical           │
│ - Insurance         │
│                      │
│ Description:        │
│ [________________]  │
│                      │
│ Date: [__/__/____]  │
│                      │
│ [Add Expense]       │
│ [Cancel]            │
└──────────────────────┘

MAIN AREA:
┌────────────────────────────────┐
│  YOUR EXPENSES                  │
├────────────────────────────────┤
│ [All] [Lifestyle] [Medical]... │
├────────────────────────────────┤
│ ┌──────────────────────────────┐
│ │ Books & Materials | RM 250   │
│ │ Annual gym membership        │
│ │ 2024-01-15    [Edit] [Delete]│
│ └──────────────────────────────┘
│
│ ┌──────────────────────────────┐
│ │ Medical Checkup | RM 150     │
│ │ Annual physical screening    │
│ │ 2024-02-20    [Edit] [Delete]│
│ └──────────────────────────────┘
│
│ No expenses recorded yet...
└────────────────────────────────┘

BOTTOM SUMMARY:
┌────────────────────────────────┐
│  SUMMARY BY RELIEF TYPE         │
├────────────────────────────────┤
│ Lifestyle Expenses              │
│ Claimed: RM 700 of RM 1,000    │
│ Remaining: RM 300              │
│                                 │
│ Medical Expenses                │
│ Claimed: RM 150 of RM 5,000    │
│ Remaining: RM 4,850            │
└────────────────────────────────┘
```

### 4. TAX ESTIMATOR PAGE
```
FORM SECTION:
┌────────────────────────────────┐
│  TAX ESTIMATOR                  │
├────────────────────────────────┤
│ Gross Annual Income (RM)       │
│ [_________________] RM 60,000  │
│ Your total employment income   │
│                                 │
│ Total PCB Deducted (RM)        │
│ [_________________] RM 2,400   │
│ Sum of all 12 monthly payslips │
│                                 │
│ [Calculate Tax Outcome]        │
└────────────────────────────────┘

RESULTS SECTION:
┌────────────────────────────────┐
│  YOUR TAX ESTIMATE              │
├────────────────────────────────┤
│                                 │
│ Gross Income      RM 60,000    │
│ Total Reliefs  (- RM 18,500)   │
│ ──────────────────────────      │
│ Taxable Income    RM 41,500    │
│                                 │
│ Estimated Tax     RM 1,545     │
│ PCB Deducted   (- RM 2,400)    │
│ ══════════════════════════════  │
│ 💰 EXPECTED REFUND RM 855      │
│                                 │
│ ⚠️ Disclaimer: Estimate only   │
└────────────────────────────────┘

BREAKDOWN TABLE:
┌────────────────────────────────┐
│ RELIEFS BREAKDOWN               │
├────────────────────────────────┤
│ Self Relief      | RM 9,000    │
│ Spouse Relief    | RM 9,000    │
│ Medical Exp.     | RM 500      │
│ Insurance        | RM 2,000    │
│ ──────────────────────────────  │
│ TOTAL RELIEFS    | RM 20,500   │
└────────────────────────────────┘
```

### 5. CHECKLIST PAGE
```
┌────────────────────────────────┐
│  PRE-FILING CHECKLIST           │
│  7 Steps to File Successfully   │
├────────────────────────────────┤
│
│ ☐ 1. Received EA Form          │
│   "Your employer sent this"    │
│                                 │
│ ☐ 2. Gathered All Receipts     │
│   "Insurance, medical, etc"    │
│                                 │
│ ☑ 3. Recorded Expenses         │
│   ✓ 5 expenses recorded        │
│                                 │
│ ☐ 4. Calculated Reliefs        │
│   "Use the Estimator tool"     │
│                                 │
│ ☐ 5. Total PCB Ready           │
│   "From all 12 payslips"       │
│                                 │
│ ☐ 6. Reviewed Everything       │
│   "Double-check amounts"       │
│                                 │
│ ☐ 7. Ready to File             │
│   "Go to e-Filing portal"      │
│
├────────────────────────────────┤
│ Progress: 2 of 7 completed     │
├────────────────────────────────┤
│ [Download Summary]             │
│ [Important Notes]              │
│ [LHDN Links]                   │
└────────────────────────────────┘
```

### 6. FAQ PAGE
```
┌────────────────────────────────┐
│  FREQUENTLY ASKED QUESTIONS     │
├────────────────────────────────┤
│
│ ▼ What is this app for?        │
│   Full answer shown...
│   [...less]
│
│ ► Who can use this?            │
│   Click to expand
│
│ ► What are tax reliefs?        │
│   Click to expand
│
│ ▼ How accurate are estimates?  │
│   Full answer shown...
│   [Disclaimer box with warning]
│
│ ► What receipts do I need?     │
│   Click to expand
│
│ ► When should I file?          │
│   Click to expand
│
└────────────────────────────────┘

┌────────────────────────────────┐
│  RELIEF BREAKDOWN               │
├────────────────────────────────┤
│ 👤 PERSONAL                    │
│    Self: RM 9,000              │
│    Spouse: RM 9,000            │
│    Children: RM 3,000 each     │
│                                 │
│ 🏥 HEALTH                      │
│    Medical: RM 5,000           │
│    Insurance: RM 8,000         │
│                                 │
│ 📚 EDUCATION                   │
│    Tuition: RM 6,000           │
│    SSPN: RM 8,000              │
│                                 │
│ 🏠 HOUSING                     │
│    Loan Interest: RM 6,000     │
│                                 │
│ 🎯 LIFESTYLE                   │
│    Books/Internet: RM 1,000    │
│                                 │
└────────────────────────────────┘
```

---

## 🎨 COLOR SCHEME

```
Primary Blue:     #2563eb (Buttons, Links, Headers)
Dark Blue:        #1e40af (Hover States)
Success Green:    #10b981 (Checkmarks, Positive)
Warning Orange:   #f59e0b (Alerts, Warnings)
Danger Red:       #ef4444 (Errors, Over Limits)
Light Gray:       #f9fafb (Background)
Border Gray:      #e5e7eb (Borders)
Text Dark:        #1f2937 (Main Text)
Text Light:       #6b7280 (Secondary Text)
```

---

## 📐 TYPOGRAPHY

```
Headers:
  H1: 2.25rem (36px), Bold
  H2: 1.875rem (30px), Bold
  H3: 1.5rem (24px), Bold
  H4: 1.25rem (20px), SemiBold

Body:
  Base: 1rem (16px), Regular
  Small: 0.875rem (14px), Regular
  Tiny: 0.75rem (12px), Regular

Font Family: System fonts (SF Pro, Segoe UI, Roboto)
```

---

## 🎯 COMPONENT PATTERNS

### Buttons
```
PRIMARY BUTTON:
  Color: #2563eb (Blue)
  Text: White
  Padding: 0.5rem 1rem
  Hover: Dark Blue background + Shadow

SECONDARY BUTTON:
  Color: #10b981 (Green)
  Text: White
  Padding: 0.5rem 1rem
  Hover: Dark Green

OUTLINE BUTTON:
  Color: Transparent
  Border: 2px #2563eb
  Text: #2563eb
  Hover: Blue background

DANGER BUTTON:
  Color: #ef4444 (Red)
  Text: White
  Hover: Dark Red
```

### Cards
```
CARD STRUCTURE:
┌──────────────────────┐
│  CARD TITLE          │
│                      │
│  Card content here   │
│  Multiple lines      │
│                      │
│  [Action Button]     │
└──────────────────────┘

Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))
Border: Light gray (1px)
Padding: 1.5rem
Border Radius: 0.75rem
```

### Forms
```
INPUT FIELD:
┌──────────────────────┐
│ Label                │
│ [Input Field...]     │
│ Helper text optional │
└──────────────────────┘

SELECT DROPDOWN:
┌──────────────────────┐
│ Label                │
│ [Option     ▼]       │
│ - Option 1           │
│ - Option 2           │
│ - Option 3           │
└──────────────────────┘

CHECKBOX/RADIO:
☐ Checkbox label text
⊙ Radio label text
```

### Alerts/Messages
```
SUCCESS (Green):
┌──────────────────────────────┐
│ ✓ Expense added successfully │
└──────────────────────────────┘

WARNING (Orange):
┌──────────────────────────────┐
│ ⚠ You've exceeded RM 1,000   │
└──────────────────────────────┘

ERROR (Red):
┌──────────────────────────────┐
│ ✗ Please fill all fields     │
└──────────────────────────────┘

INFO (Blue):
┌──────────────────────────────┐
│ ℹ Keep receipts for 7 years  │
└──────────────────────────────┘
```

---

## 📱 RESPONSIVE BREAKPOINTS

```
Desktop: 1200px+
  - Full sidebar layout
  - 3-column grids
  - All features visible

Tablet: 768px - 1199px
  - Narrower layout
  - 2-column grids
  - Simplified sidebar

Mobile: < 768px
  - Single column
  - Stacked layout
  - Hamburger menu
  - Touch-friendly buttons (44px+)
```

---

## 🎨 VISUAL HIERARCHY

```
MOST IMPORTANT:
- Large headers (H1, H2)
- Primary buttons (Blue)
- Key numbers (Refund amount)
- Action items

SECONDARY:
- Subheadings (H3, H4)
- Secondary buttons
- Form labels
- Card titles

TERTIARY:
- Supporting text
- Helper text
- Placeholder text
- Secondary info
```

---

## ✨ INTERACTION PATTERNS

### Hover States
```
Buttons:    Background color + Shadow
Cards:      Box shadow increase + Border color change
Links:      Color change + Underline
Inputs:     Border color change + Focus ring
```

### Loading States
```
Buttons:    Show loading spinner
Forms:      Disable inputs
Cards:      Skeleton loading
```

### Empty States
```
Title:      "No expenses recorded yet"
Icon:       Relevant emoji or icon
Action:     "Add your first expense"
```

---

## 🔄 USER FLOW

```
NEW USER:
1. Land on Home Page
2. Click "Start the Wizard"
3. Answer eligibility questions
4. See eligible reliefs
5. Navigate to Tracker
6. Add first expense
7. Go to Estimator
8. Calculate refund
9. Review Checklist
10. File with LHDN

RETURNING USER:
1. Land on Home Page
2. Click "Go to Tracker"
3. Add/review expenses
4. Check Estimator
5. Export summary
6. File when ready
```

---

## 🎯 DESIGN PRINCIPLES

✅ **Clarity**: Simple, clear language. No tax jargon.
✅ **Simplicity**: Minimal buttons. Only necessary fields.
✅ **Feedback**: Show what happened. Confirm actions.
✅ **Safety**: Confirmation before delete. Limits shown.
✅ **Guidance**: Helper text on all inputs.
✅ **Trust**: Disclaimer always visible. No surprises.
✅ **Efficiency**: Complete tasks in fewest clicks.
✅ **Consistency**: Same patterns throughout.

---

## 📊 INFORMATION ARCHITECTURE

```
TaxTracker MY
├── Home (Landing)
├── Wizard (Relief Discovery)
├── Tracker (Expense Management)
├── Estimator (Tax Calculation)
├── Checklist (Filing Preparation)
└── FAQ (Knowledge Base)
```

---

This wireframe provides the complete visual design system for TaxTracker MY!
