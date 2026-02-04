@echo off
setlocal
title My Portfolio Launcher

echo Checking for Node.js...

REM Check if node is in PATH
node --version >nul 2>&1
if %errorlevel% equ 0 goto FOUND_IN_PATH

REM Check common install location
if exist "C:\Program Files\nodejs\node.exe" (
    echo Node.js found in C:\Program Files\nodejs
    set "PATH=C:\Program Files\nodejs;%PATH%"
    goto FOUND_IN_PATH
)

echo.
echo [ERROR] Node.js is NOT installed.
echo Please install it from https://nodejs.org/
echo.
pause
exit /b

:FOUND_IN_PATH
echo Node.js is ready.
echo.

if not exist node_modules (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b
    )
)

echo.
echo Starting the website...
echo Link will appear below (usually http://localhost:5173)
echo.
call npm run dev
pause


$env:Path = "C:\Program Files\nodejs;" + $env:Path; npm run dev