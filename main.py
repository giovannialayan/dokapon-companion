from fastapi import FastAPI, Response, status
from fastapi.staticfiles import StaticFiles
from itemDict import items, weapons, shields, fieldMagics, offensiveMagics, defensiveMagics, monsters

app = FastAPI(title="page")
app_api = FastAPI(title="api")

app.mount("/tool", app_api)

app.mount("/", StaticFiles(directory="static", html=True), name="static")

@app_api.get("/item/{itemName}")
async def get_item(itemName: str, response: Response):
    if (itemName in items):
        return {"data": items[itemName], "type": 0}
    elif (itemName in weapons):
        return {"data": weapons[itemName], "type": 1}
    elif (itemName in shields):
        return {"data": shields[itemName], "type": 2}
    elif (itemName in offensiveMagics):
        return {"data": offensiveMagics[itemName], "type": 3}
    elif (itemName in defensiveMagics):
        return {"data": defensiveMagics[itemName], "type": 4}
    elif (itemName in fieldMagics):
        return {"data": fieldMagics[itemName], "type": 5}
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"error": "item not found"}
    
@app_api.get("/monster/{monsterName}")
async def get_monster(monsterName: str, response: Response):
    if (monsterName in monsters):
        return monsters[monsterName]
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"error": "monster not found"}
    
# @app_api.get("/monsters")
# async def get_allmonsters():
#     return monsters