@echo off
setlocal
cd /d "%~dp0"

echo [INFO] Pornesc site-ul (Next.js dev server)...
where npm >nul 2>&1
if errorlevel 1 (
  echo [EROARE] npm nu este disponibil in PATH.
  echo [INFO] Instaleaza Node.js si redeschide terminalul.
  pause
  exit /b 1
)

title AproapeDeTine - Next Dev Server
npm run dev

if errorlevel 1 (
  echo [EROARE] Serverul s-a oprit cu eroare.
  pause
)
