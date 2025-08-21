from fastapi  import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="static", html=True), name="static")

@app.get("/item/{item_id}")
async def get_item(item_id: int):
    return {"item_id": item_id}