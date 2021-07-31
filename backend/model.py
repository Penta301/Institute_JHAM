from pydantic import BaseModel

class Token(BaseModel):
    name:str
    password:str

class User(BaseModel):
    password:str
    email:str
    name:str
    age:int
    interest:str

class Show_User(BaseModel):
    name:str
    age:str

class Course(BaseModel):
    type_course:str
    title:str
    content:str
    owner:str
    img:str
    img_owner:str

class Settings(BaseModel):
   authjwt_secret_key: str = '7b82e1d300da121b2470deb960b1b802022607de6bf71816123c0d7742fa5f48'
   authjwt_access_token_expires: int = 3600
   authjwt_token_location: set =  {'headers'}
   authjwt_cookie_secure: bool = False