@echo off
echo Building and deploying portfolio to GitHub Pages...

:: Clean up previous build
rmdir /s /q dist

:: Build the project
call npm run build

:: Deploy to GitHub Pages
call npm run deploy

echo.
echo Deployment completed. Your site should be available at:
echo https://amadeodlp.github.io/amadeo-portfolio/
echo.
echo Note: It may take a few minutes for the changes to appear.
pause
