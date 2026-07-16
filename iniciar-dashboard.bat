@echo off
cd /d "%~dp0"
echo Iniciando o dashboard NewTesc em http://localhost:3000/dashboard
echo.
npm run dev
echo.
echo O servidor foi encerrado. Pressione qualquer tecla para fechar.
pause >nul
