@echo off
echo Dang khoi dong he thong...

:: Chạy hệ thống ở một cửa sổ mới
start "Hệ thống" cmd /k "cd backend && uvicorn main:app --reload --port 8000"

:: Đợi 3 giây để server chạy lên xong
timeout /t 3 /nobreak > NUL

:: Tự động bật trình duyệt mặc định và truy cập vào web
start http://localhost:8000