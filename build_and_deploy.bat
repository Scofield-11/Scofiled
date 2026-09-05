@echo off
chcp 65001 >nul
echo ==========================================
echo 1. ĐANG BUILD FRONTEND (VITE + REACT)...
echo ==========================================
cd frontend
call npm run build

:: Kiểm tra xem quá trình build có lỗi không
if %errorlevel% neq 0 (
    echo [LỖI] Quá trình build thất bại! Vui lòng kiểm tra lại code.
    pause
    exit /b %errorlevel%
)
cd ..

echo.
echo ==========================================
echo 2. ĐANG COPY SANG BACKEND...
echo ==========================================

:: Xóa thư mục dist cũ ở backend (nếu có) để tránh tồn đọng file rác rưởi
if exist "backend\dist" (
    rmdir /s /q "backend\dist"
)

:: Copy toàn bộ thư mục dist mới từ frontend sang backend
xcopy /E /I /H /Y "frontend\dist" "backend\dist"

echo.
echo ==========================================
echo HOÀN TẤT! Đã build và chép đè sang backend thành công.
echo Bạn có thể khởi động Uvicorn ở backend để kiểm tra.
echo ==========================================
pause