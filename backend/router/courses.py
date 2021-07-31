import sys
sys.path.append('..')
from fastapi import HTTPException, APIRouter, Depends 
from fastapi_jwt_auth import AuthJWT
from backend.model import Course
from backend.database import (
    collection_course,
    create_operation,
    fetch_all
)

router = APIRouter(
    prefix="/api",
    tags=['Courses']
)

@router.post("/create_course/", response_model = Course)
async def post_todo(course: Course, user:AuthJWT = Depends()):
    user.jwt_required()
    course = course.dict()

    response = await create_operation(course, collection_course)    
    if response:
        return response
    raise HTTPException(400, 'Something wet wrong')


@router.get('/get_courses/{where}/{type_course}') 
async def get_food(type_course:str,where:str):
    response = await fetch_all(collection_course, Course, where, type_course)
    return response