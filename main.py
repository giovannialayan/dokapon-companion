from fastapi  import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="page")
app_api = FastAPI(title="api")

app.mount("/tool", app_api)

app.mount("/", StaticFiles(directory="static", html=True), name="static")

@app_api.get("/{toolId}")
async def get_tool(toolId: str):
    match toolId:
        case "jobcounter":
            return {"tool": 0, "name": "job counter"}
    return {"tool": -1, "name": "not found"}