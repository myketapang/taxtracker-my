@echo off
REM TaxTracker MY - GitHub Push Setup (Windows)

echo ================================================================
echo    TaxTracker MY - GitHub Push Setup
echo ================================================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH
    echo.
    echo Download Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [1/6] Git is installed
echo.

REM Navigate to project directory
cd /d "taxtracker-my"
if not exist ".\" (
    echo ERROR: taxtracker-my directory not found
    pause
    exit /b 1
)

echo [2/6] Working directory: %cd%
echo.

REM Check git configuration
echo [3/6] Checking git configuration...
git config --global user.name >nul 2>nul
if errorlevel 1 (
    echo.
    set /p GIT_NAME="Enter your name: "
    git config --global user.name "%GIT_NAME%"
)

git config --global user.email >nul 2>nul
if errorlevel 1 (
    echo.
    set /p GIT_EMAIL="Enter your email: "
    git config --global user.email "%GIT_EMAIL%"
)

echo Git user configured
echo.

REM Initialize git
echo [4/6] Initializing git repository...
if not exist ".git\" (
    git init
    echo Git repository initialized
) else (
    echo Git repository already exists
)
echo.

REM Add and commit
echo [5/6] Adding files and creating commit...
git add .
git commit -m "Initial commit: TaxTracker MY - Malaysian Tax Relief Companion"

echo Files staged and committed
echo.

REM Get GitHub info
echo [6/6] Connecting to GitHub...
echo.
set /p GITHUB_USER="Enter your GitHub username: "
set /p REPO_NAME="Enter repository name (default: taxtracker-my): "

if "%REPO_NAME%"=="" (
    set REPO_NAME=taxtracker-my
)

set REMOTE_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo.
echo Remote URL: %REMOTE_URL%
echo.

REM Add remote
git remote remove origin 2>nul
git remote add origin %REMOTE_URL%

REM Push to GitHub
echo Pushing to GitHub...
echo (This may prompt you for authentication)
echo.

git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo Trying master branch...
    git push -u origin master
)

echo.
echo ================================================================
echo SUCCESS! Your repository is ready!
echo ================================================================
echo.
echo Repository URL: %REMOTE_URL%
echo.
echo Next steps:
echo 1. Visit: %REMOTE_URL%
echo 2. Go to https://app.netlify.com
echo 3. Click 'New site from Git'
echo 4. Connect your GitHub repo
echo 5. Build command: npm run build
echo 6. Publish directory: build
echo 7. Deploy!
echo.
pause
