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
        return {items[itemName]}
    elif (itemName in weapons):
        return {weapons[itemName]}
    elif (itemName in shields):
        return {shields[itemName]}
    elif (itemName in offensiveMagics):
        return {offensiveMagics[itemName]}
    elif (itemName in defensiveMagics):
        return {defensiveMagics[itemName]}
    elif (itemName in fieldMagics):
        return {fieldMagics[itemName]}