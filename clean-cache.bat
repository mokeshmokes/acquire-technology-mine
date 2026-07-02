@echo off
echo ==========================================
echo Cleaning Next.js Cache and Build Files
echo ==========================================
echo.

REM Stop any running Node.js processes
echo Stopping any running Node.js processes...
taskkill /F /IM node.exe >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Node.js processes stopped.
) else (
    echo No Node.js processes found running.
)
echo.

REM Remove .next directory
echo Removing .next directory...
if exist ".next" (
    rmdir /s /q ".next"
    echo .next directory removed.
) else (
    echo .next directory not found.
)
echo.

REM Remove node_modules/.cache directory
echo Removing node_modules/.cache directory...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo node_modules/.cache directory removed.
) else (
    echo node_modules/.cache directory not found.
)
echo.

echo ==========================================
echo Cleanup Complete!
echo ==========================================
echo.
echo You can now run:
echo   npm run dev     (for development)
echo   npm run build   (for production build)
echo.
pause
