from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import vocabulary, exam
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os


app = FastAPI(title="Quizlet Clone API")

# Cấu hình CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Đăng ký các Routers
app.include_router(vocabulary.router)
app.include_router(exam.router)

# --- CẤU HÌNH PHỤC VỤ FRONTEND (REACT DIST) ---
if os.path.exists("dist/assets"):
    app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

@app.get("/{catchall:path}")
def serve_react_app(catchall: str):
    if os.path.exists(f"dist/{catchall}") and catchall != "":
        return FileResponse(f"dist/{catchall}")
    return FileResponse("dist/index.html")