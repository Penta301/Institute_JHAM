import sys
sys.path.append('..')
from fastapi import HTTPException, APIRouter, Depends 
from fastapi_jwt_auth import AuthJWT
from backend.model import Course
from backend.database import (
    collection_course,
    remove_operation,
    create_operation,
    fetch_all
)

router = APIRouter(
    prefix="/api",
    tags=['Courses']
)

@router.post("/create_course/", response_model = Course)
async def create_course(course: Course, Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    course = course.dict()

    response = await create_operation(course, collection_course, where='title', specific='title' ,verify=True)    
    if response:
        if response == 'error_name':
            raise HTTPException(409, 'That item exists')
        return response
    raise HTTPException(400, 'Something wet wrong')


@router.get('/get_all_courses/{type_course}' )
async def get_all_courses(type_course:str):
    response = await fetch_all(collection_course, Course, 'type_course', type_course)
    if response:
        return response
    raise HTTPException(404, 'Not Found Course With That Features')

@router.get('/get_course/{where}/{category}') 
async def get_course(category:str,where:str):
    response = await fetch_all(collection_course, Course, where, category)
    if response:
        return response
    raise HTTPException(404, 'Not Found Course With That Features')

@router.delete('/delete_course/{name}/')
async def delete_course(name:str):
    response = await remove_operation(collection_course, name)
    if response:
        return 'Delete operation was successfully'
    raise HTTPException(404, 'Not Found Course With That Name')