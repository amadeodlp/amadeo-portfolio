@echo off
echo Building project with HashRouter configuration...

:: Build the project
call npm run build

echo.
echo Build completed. Ready to deploy to GitHub Pages.
echo To deploy, run: git add dist ^&^& git commit -m "Switch to HashRouter for GitHub Pages" ^&^& git push
pause
