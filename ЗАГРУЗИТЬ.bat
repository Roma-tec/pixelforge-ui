@echo off
chcp 65001 >nul
title ZAGRUZKA NA GITHUB
echo.
echo ============================================
echo   PixelForge UI - zagruzka na GitHub
echo ============================================
echo.
echo Vstavte ssylku na vash repozitoriy (pravaya knopka = vstavka):
echo Primer: https://github.com/vaslogin/pixelforge-ui.git
echo.
set /p URL="Ssylka: "
if "%URL%"=="" (echo Ssylka ne vvedena. & pause & exit /b)
git remote remove origin 2>nul
git remote add origin %URL%
git branch -M main
echo.
echo Otpravlyaem 26 kommitov na GitHub...
git push -u origin main
echo.
if %errorlevel%==0 (echo GOTOVO! Otkroyte stranicu repozitoriya i obnovite eyo.) else (echo OSHIBKA. Smotrite fayl KAK_ZAGRUZIT_NA_GITHUB.md, razdel "Esli chto-to poshlo ne tak".)
echo.
pause
