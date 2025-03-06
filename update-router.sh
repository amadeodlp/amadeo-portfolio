#!/bin/bash
# Update script for fixing GitHub Pages routing

echo "Building project with HashRouter configuration..."

# Build the project
npm run build

echo "Build completed. Ready to deploy to GitHub Pages."
echo "To deploy, run: git add dist && git commit -m \"Switch to HashRouter for GitHub Pages\" && git push"
