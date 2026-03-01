@echo off
REM TaxTracker MY - Direct GitHub Push (Windows)

setlocal enabledelayedexpansion

echo ================================================================
echo    TaxTracker MY - Direct GitHub Push
echo ================================================================
echo.

REM Navigate to directory
cd /d "taxtracker-my" 2>nul || (
    echo ERROR: Could not find taxtracker-my directory
    pause
    exit /b 1
)

echo [STEP 1] Enter GitHub Credentials
echo.
echo We need:
echo 1. Your GitHub username
echo 2. Your Personal Access Token (safer than password)
echo.
echo Don't have a token yet?
echo Go to: https://github.com/settings/tokens/new
echo - Select: 'repo' scope
echo - Click: 'Generate token'
echo - Copy the token
echo.

set /p GITHUB_USER="Your GitHub username: "
set /p GITHUB_TOKEN="Your Personal Access Token: "

if "!GITHUB_USER!"=="" (
    echo ERROR: Username required
    pause
    exit /b 1
)

if "!GITHUB_TOKEN!"=="" (
    echo ERROR: Token required
    pause
    exit /b 1
)

set REPO_NAME=taxtracker-my
set REMOTE_URL=https://!GITHUB_USER!:!GITHUB_TOKEN!@github.com/!GITHUB_USER!/!REPO_NAME!.git

echo.
echo [STEP 2] Initialize Git Repository
if not exist ".git\" (
    git init
    echo Git initialized
) else (
    echo Git already initialized
)
echo.

echo [STEP 3] Configure Git User
git config user.name "!GITHUB_USER!"
git config user.email "!GITHUB_USER!@users.noreply.github.com"
echo Git user configured
echo.

echo [STEP 4] Stage All Files
git add .
echo All files staged
echo.

echo [STEP 5] Create Initial Commit
git commit -m "Initial commit: TaxTracker MY - Malaysian Tax Relief Companion" 2>nul || (
    echo Note: Already committed
)
echo Commit created
echo.

echo [STEP 6] Connect to GitHub Repository
git remote remove origin 2>nul
git remote add origin !REMOTE_URL!
echo Remote configured
echo.

echo [STEP 7] Pushing to GitHub...
echo Repository: https://github.com/!GITHUB_USER!/!REPO_NAME!
echo.

git push -u origin main 2>nul || (
    echo Trying master branch...
    git push -u origin master 2>nul || (
        echo ERROR: Push failed. Check your credentials.
        pause
        exit /b 1
    )
)

echo.
echo ================================================================
echo SUCCESS! Repository pushed to GitHub!
echo ================================================================
echo.
echo Repository URL: https://github.com/!GITHUB_USER!/!REPO_NAME!
echo.
echo Next steps:
echo 1. Visit your repository to verify all files are there
echo 2. Deploy to Netlify (see DEPLOYMENT_GUIDE.md)
echo 3. Share your repo link!
echo.
pause
