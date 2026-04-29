@echo off
setlocal

echo [INFO] Incerc sa opresc serverul site-ului...

set "PID="

REM Incearca portul 3000 mai intai
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
  set "PID=%%a"
  goto :kill_by_pid
)

REM Incearca portul 3001
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001 ^| findstr LISTENING') do (
  set "PID=%%a"
  goto :kill_by_pid
)

:kill_by_title
taskkill /FI "WINDOWTITLE eq AproapeDeTine - Next Dev Server*" /T /F >nul 2>&1
if not errorlevel 1 (
  echo [OK] Fereastra serverului a fost oprita.
  exit /b 0
)

echo [INFO] Nu am gasit un proces activ pe porturile 3000 sau 3001.
echo [INFO] Daca serverul ruleaza pe alt port, opreste-l manual din terminal.
exit /b 0

:kill_by_pid
taskkill /PID %PID% /T /F >nul 2>&1
if errorlevel 1 (
  echo [EROARE] Nu am putut opri procesul cu PID %PID%.
  exit /b 1
)

echo [OK] Serverul a fost oprit (PID %PID%).
exit /b 0
