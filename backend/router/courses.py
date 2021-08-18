import sys
sys.path.append('..')
from fastapi import HTTPException, APIRouter, Depends 
from fastapi_jwt_auth import AuthJWT
from backend.model import Course, Show_User
from backend.database import (
    collection_course,
    collection_user,
    remove_operation,
    update_operation,
    create_operation,
    pay_service_mercadopago,
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

    formated_body = {            
            "title": course.get('title'),
            "quantity": 1,
            "unit_price": course.get('price'),}
            

    create_payment = await pay_service_mercadopago(formated_body)
    create_payment = create_payment['mercado_pago_response']['id']


    if not create_payment:
        raise HTTPException(400, "Something went wrong")

    course['response_id'] = create_payment 

    response = await create_operation(course, collection_course, where='title', specific='title' ,verify=True)    
    if response:
        if response == 'error_name':
            raise HTTPException(409, 'That item exists')
        return response
    raise HTTPException(400, 'Something wet wrong')

@router.post("/pay_course/{title}/{price}")
async def pay_course(title:str, price:int,Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    current_user = Authorize.get_jwt_subject()

    response_user = await fetch_all(collection_user, Show_User, 'email', current_user)
    response_user = response_user[0].dict()
    courses = response_user.get('courses')


    if not response_user:
        raise HTTPException(404, 'That user does not exist')

    formated_body = {            
            "title": title,
            "quantity": 1,
            "unit_price": price,
            }
   
    response = await pay_service_mercadopago(formated_body, response_user) 
    
    if response:
        courses.append(title)
        await update_operation(collection_user, "name", current_user, courses, 'courses', True)
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