import sys
import time 
sys.path.append('..')
from hashing import Hash
from fastapi import HTTPException, APIRouter, Depends
from fastapi_jwt_auth import AuthJWT
from database import authenticate_operation, collection_user, collection_super_user
from backend.model import Token, Settings

router = APIRouter(
    prefix="/api/authentication",
    tags=['Authentication']
)

@AuthJWT.load_config
def get_config():
    return Settings()

@router.post('/')
async def authenticate(user:Token, Authorize: AuthJWT = Depends()):
    response = await authenticate_operation(collection_user, user.email, "email" )
    if not response:
        raise HTTPException(404, f"That user with the email: {user.email}, doesn't exist")
    
    verify_pass = Hash.verify(user.password, response["password"])   
    
    if not verify_pass: 
        raise HTTPException(404, f"Invalid Credentials")

    access_token = Authorize.create_access_token(subject=user.email)
    return {"jwt": access_token}

@router.post('/super_user/')
async def authenticate(user:Token, Authorize: AuthJWT = Depends()):
    response = await authenticate_operation(collection_super_user, user.email, "email")
    if not response:
        raise HTTPException(404, f"That user with the name: {user.email}, doesn't exist")

    verify_pass = Hash.verify(user.password, response["password"])   
    
    if not verify_pass: 
        raise HTTPException(404, f"Invalid Credentials")

    access_token = Authorize.create_access_token(subject=user.email)

    super_token = Hash.encrypt('super_user_instituto_JHAM')

    return {"jwt": access_token, 'auth':super_token}