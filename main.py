from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from itemDict import items, weapons, shields, fieldMagics, offensiveMagics, defensiveMagics

app = FastAPI(title="page")
app_api = FastAPI(title="api")

app.mount("/tool", app_api)

app.mount("/", StaticFiles(directory="static", html=True), name="static")

@app_api.get("/{itemName}")
async def get_item(itemName: str):
    if (itemName in items):
        return {"data": items[itemName], "name": itemName, "type": 0}
    elif (itemName in weapons):
        return {"data": weapons[itemName], "name": itemName, "type": 1}
    elif (itemName in shields):
        return {"data": shields[itemName], "name": itemName, "type": 2}
    elif (itemName in offensiveMagics):
        return {"data": offensiveMagics[itemName], "name": itemName, "type": 3}
    elif (itemName in defensiveMagics):
        return {"data": defensiveMagics[itemName], "name": itemName, "type": 4}
    elif (itemName in fieldMagics):
        return {"data": fieldMagics[itemName], "name": itemName, "type": 5}