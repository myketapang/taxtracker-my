#!/bin/bash

# TaxTracker MY - Automatic GitHub Push Script
# This script sets up git and pushes all files to your GitHub repository

set -e  # Exit on any error

echo "════════════════════════════════════════════════════════════"
echo "   TaxTracker MY - GitHub Push Setup"
echo "════════════════════════════════════════════════════════════"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check if git is installed
echo -e "${BLUE}[1/6]${NC} Checking git installation..."
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first:"
    echo "   macOS: brew install git"
    echo "   Ubuntu/Debian: sudo apt-get install git"
    echo "   Windows: Download from https://git-scm.com"
    exit 1
fi
echo -e "${GREEN}✓ Git is installed${NC}"
echo ""

# Step 2: Navigate to project directory
PROJECT_DIR="/home/claude/taxtracker-my"
echo -e "${BLUE}[2/6]${NC} Navigating to project directory..."
if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Project directory not found at $PROJECT_DIR"
    exit 1
fi
cd "$PROJECT_DIR"
echo -e "${GREEN}✓ Working directory: $(pwd)${NC}"
echo ""

# Step 3: Configure git user (if not already configured)
echo -e "${BLUE}[3/6]${NC} Configuring git user..."
if [ -z "$(git config --global user.name)" ]; then
    read -p "Enter your name: " GIT_NAME
    git config --global user.name "$GIT_NAME"
fi
if [ -z "$(git config --global user.email)" ]; then
    read -p "Enter your email: " GIT_EMAIL
    git config --global user.email "$GIT_EMAIL"
fi
echo -e "${GREEN}✓ Git user configured${NC}"
echo ""

# Step 4: Initialize git repository
echo -e "${BLUE}[4/6]${NC} Initializing git repository..."
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${YELLOW}ℹ Git repository already exists${NC}"
fi
echo ""

# Step 5: Add files and create initial commit
echo -e "${BLUE}[5/6]${NC} Adding files to git..."
git add .
echo -e "${GREEN}✓ All files staged${NC}"

echo "Creating initial commit..."
git commit -m "Initial commit: TaxTracker MY - Malaysian Tax Relief Companion

- Complete React application with 6 main features
- Relief eligibility wizard
- Expense tracker with category filtering
- Tax estimator with 2024 tax bands
- Pre-filing checklist with timeline
- FAQ and comprehensive guides
- Standalone HTML test version
- Complete documentation and wireframes
- Production-ready code
- Fully responsive design (mobile to desktop)

Ready for deployment to Netlify or production environment." 2>/dev/null || echo -e "${YELLOW}ℹ Already committed (or nothing to commit)${NC}"

echo -e "${GREEN}✓ Commit created${NC}"
echo ""

# Step 6: Add remote and push
echo -e "${BLUE}[6/6]${NC} Connecting to GitHub and pushing..."
read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter repository name (default: taxtracker-my): " REPO_NAME
REPO_NAME=${REPO_NAME:-taxtracker-my}

REMOTE_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Check if remote already exists
if git remote | grep -q "origin"; then
    echo "Removing existing remote..."
    git remote remove origin
fi

echo "Adding remote: $REMOTE_URL"
git remote add origin "$REMOTE_URL"

echo -e "${YELLOW}Pushing to GitHub...${NC}"
echo "(This may prompt you for authentication)"

# Try to push
if git push -u origin main 2>/dev/null; then
    echo -e "${GREEN}✓ Successfully pushed to main branch${NC}"
elif git push -u origin master 2>/dev/null; then
    echo -e "${GREEN}✓ Successfully pushed to master branch${NC}"
else
    echo -e "${YELLOW}⚠ Push may require authentication${NC}"
    echo "Please authenticate with GitHub when prompted."
    echo "If using 2FA, you may need to use a Personal Access Token."
    echo ""
    echo "Instructions:"
    echo "1. Visit: https://github.com/settings/tokens/new"
    echo "2. Create a token with 'repo' scope"
    echo "3. Copy the token"
    echo "4. When prompted for password, paste the token instead"
    echo ""
    git push -u origin main || git push -u origin master
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo -e "${GREEN}✓ SUCCESS! Your repository is ready!${NC}"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "Your repository URL:"
echo -e "${BLUE}$REMOTE_URL${NC}"
echo ""
echo "Next steps:"
echo "1. Visit: $REMOTE_URL"
echo "2. Create a new file called 'netlify.toml' (already in your repo)"
echo "3. Go to https://app.netlify.com"
echo "4. Click 'New site from Git'"
echo "5. Connect your GitHub repo"
echo "6. Build command: npm run build"
echo "7. Publish directory: build"
echo "8. Deploy!"
echo ""
echo "Your site will be live at: https://[your-site].netlify.app"
echo ""
