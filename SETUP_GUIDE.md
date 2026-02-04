# Setup and Run Guide

## Problem: Node.js Not Found
The error you are seeing (`node : The term 'node' is not recognized`) means that **Node.js** is not installed on your computer, or it is not available in your command line path. This software is required to run modern React websites.

## Step 1: Install Node.js
1.  Visit [nodejs.org](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version for Windows.
3.  Run the installer. **Important:** Make sure to check any boxes that say "Add to PATH".
4.  **Restart your computer** (or fully restart VS Code) after installation to make sure the changes take effect.

## Step 2: Run the Website
I have created a script called `run_website.bat` in this folder.

1.  Open the folder: `c:\Users\mahan\OneDrive\Documents\My-portfolio-main\My-portfolio-main\My-Portfolio-main\My-Portfolio-main`
2.  Double-click **`run_website.bat`**.

This script will:
*   Verify Node.js is working.
*   Install all necessary libraries (dependencies).
*   Start the website server.

## Step 3: View the Website
Once the script is running, it will show a link (usually `http://localhost:5173`). Ctrl+Click that link or open it in your browser.

## Regarding the Directory Location
Your current path is very deep:
`...\My-portfolio-main\My-portfolio-main\My-Portfolio-main\My-Portfolio-main`

This often happens when extracting zip files inside other zip files. 
**Recommendation:**
Once you have closed VS Code, you can:
1.  Move the innermost `My-Portfolio-main` folder to your `Documents` folder.
2.  Rename it to something simple like `MyPortfolio`.
3.  Open that new folder in VS Code.
