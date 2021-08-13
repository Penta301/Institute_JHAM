from pydantic import BaseModel
from typing import Optional

class Token(BaseModel):
    email:str
    password:str

class User(BaseModel):
    password:str
    email:str
    name:str
    age:str
    interest:str
    courses:Optional[list] = []

class SuperUser(BaseModel):
    password:str
    name:str
    super:Optional[bool] = True

class Show_User(BaseModel):
    name:str
    age:str
    interest:str
    courses:Optional[list] = []

class Course(BaseModel):
    type_course:str
    title:str
    contentSchool:str
    contentUniversity:str
    generalDescription:str
    owner:str
    img:str
    category:str

class Settings(BaseModel):
   # Despues setear como una variable de entorno
   authjwt_secret_key: str = '7b82e1d300da121b2470deb960b1b802022607de6bf71816123c0d7742fa5f48'
   authjwt_access_token_expires: int = 3600
   authjwt_token_location: set =  {'headers'}
   authjwt_cookie_secure: bool = False