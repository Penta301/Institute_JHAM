import sys
sys.path.append('..')
from fastapi import HTTPException, APIRouter, Depends
from fastapi_jwt_auth import AuthJWT
from hashing import Hash
from backend.model import User, Show_User, SuperUser
from backend.database import (
    collection_user, 
    collection_super_user,
    create_operation,
    fetch_all,
    update_operation,
)

router = APIRouter(
    prefix="/api",
    tags=['User']
)

@router.post("/create_user/", response_model = Show_User)
async def create_user(user: User):
    user = user.dict()
    user["password"] = Hash.encrypt(user["password"])
    response = await create_operation(user, collection_user,'email', 'email', True)
    if response == "error_name":
        raise HTTPException(400, "That username exist")
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@router.post('/super_user/{super_password}')
async def create_super_user(user:SuperUser, super_password:str):
    if super_password == 'super_user_instituto_JHAM':       
        user = user.dict()
        user["password"] = Hash.encrypt(user["password"])
        response = await create_operation(user, collection_super_user)
        if response:
            return {'name': user['name']}
    raise HTTPException(404, 'Bad credentials')
    
@router.get('/get_user/')
async def get_user(Authorize: AuthJWT = Depends()):
   Authorize.jwt_required()
   current_user = Authorize.get_jwt_subject()
   response = await fetch_all(collection_user, Show_User, 'email', current_user)
   if response:
       return response
   raise HTTPException(400, "Something went wrong")

@router.put('/add_course/')
async def add_course(courses:list, Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    current_user = Authorize.get_jwt_subject()
    response = await update_operation(collection_user, current_user, 'email', courses, 'courses', True)
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')