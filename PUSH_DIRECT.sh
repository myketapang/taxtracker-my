#!/bin/bash

# TaxTracker MY - Direct GitHub Push (Secure with Token)
# This script pushes directly to GitHub using a Personal Access Token

set -e

echo "════════════════════════════════════════════════════════════"
echo "   TaxTracker MY - Direct GitHub Push"
echo "════════════════════════════════════════════════════════════"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

PROJECT_DIR="/home/claude/taxtracker-my"
cd "$PROJECT_DIR"

echo -e "${BLUE}[STEP 1]${NC} Enter GitHub Credentials"
echo ""
echo "We need:"
echo "1. Your GitHub username"
echo "2. Your Personal Access Token (safer than password)"
echo ""
echo "Don't have a token yet?"
echo "👉 Go to: https://github.com/settings/tokens/new"
echo "   - Select: 'repo' scope"
echo "   - Click: 'Generate token'"
echo "   - Copy the token"
echo ""

read -p "Your GitHub username: " GITHUB_USER
read -s -p "Your Personal Access Token (or password): " GITHUB_TOKEN
echo ""
echo ""

# Validate input
if [ -z "$GITHUB_USER" ] || [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}❌ Error: Username and token required${NC}"
    exit 1
fi

REPO_NAME="taxtracker-my"
REMOTE_URL="https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo -e "${BLUE}[STEP 2]${NC} Initialize Git Repository"
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
else
    echo -e "${YELLOW}ℹ Git already initialized${NC}"
fi
echo ""

echo -e "${BLUE}[STEP 3]${NC} Configure Git User"
git config user.name "$GITHUB_USER" 2>/dev/null || git config --global user.name "$GITHUB_USER"
git config user.email "${GITHUB_USER}@users.noreply.github.com" 2>/dev/null || git config --global user.email "${GITHUB_USER}@users.noreply.github.com"
echo -e "${GREEN}✓ Git user configured${NC}"
echo ""

echo -e "${BLUE}[STEP 4]${NC} Stage All Files"
git add .
echo -e "${GREEN}✓ All files staged${NC}"
echo ""

echo -e "${BLUE}[STEP 5]${NC} Create Initial Commit"
git commit -m "Initial commit: TaxTracker MY - Malaysian Tax Relief Companion

- Complete React application (13 components, 7 pages)
- Relief eligibility wizard
- Expense tracker with category filtering
- Tax estimator with 2024 tax bands
- Pre-filing checklist
- FAQ and comprehensive guides
- Standalone HTML test version
- Production-ready code
- Fully responsive design
- Complete documentation" 2>/dev/null || echo -e "${YELLOW}ℹ Already committed${NC}"
echo -e "${GREEN}✓ Commit created${NC}"
echo ""

echo -e "${BLUE}[STEP 6]${NC} Connect to GitHub Repository"

# Remove existing remote if it exists
git remote remove origin 2>/dev/null || true

# Add remote with authentication
git remote add origin "$REMOTE_URL"
echo -e "${GREEN}✓ Remote configured${NC}"
echo ""

echo -e "${BLUE}[STEP 7]${NC} Pushing to GitHub..."
echo "Repository: https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""

# Determine main branch name
if git show-ref --quiet refs/heads/main; then
    BRANCH="main"
elif git show-ref --quiet refs/heads/master; then
    BRANCH="master"
else
    BRANCH="main"
    git branch -M main
fi

# Push to GitHub
if git push -u origin "$BRANCH" 2>&1; then
    echo ""
    echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}✓ SUCCESS! Repository pushed to GitHub!${NC}"
    echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo -e "Repository URL: ${BLUE}https://github.com/${GITHUB_USER}/${REPO_NAME}${NC}"
    echo ""
    echo "What's next:"
    echo "1. Visit your repository to verify all files are there"
    echo "2. Deploy to Netlify (see DEPLOYMENT_GUIDE.md)"
    echo "3. Share your repo link!"
    echo ""
else
    echo -e "${RED}❌ Push failed. Check your credentials and try again.${NC}"
    exit 1
fi
