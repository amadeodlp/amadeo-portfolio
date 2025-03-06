@echo off
echo Implementing fixes and deploying site...

:: Build the project
call npm run build

:: Deploy to GitHub Pages
call npm run deploy

echo.
echo Deployment completed! Your site should be live in a few minutes at:
echo https://amadeodlp.github.io/amadeo-portfolio/
echo.
echo Changes made:
echo 1. Fixed routing to use HashRouter properly
echo 2. Added automatic scroll-to-top on page navigation
echo 3. Hidden scroll indicator on mobile devices
echo.
pause
