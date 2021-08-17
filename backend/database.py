import motor.motor_asyncio 
from mercadopago_config import create_mercadopago_items
import random

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://Juan:Tilacino1@cluster0-shard-00-00.3y2qk.mongodb.net:27017,cluster0-shard-00-01.3y2qk.mongodb.net:27017,cluster0-shard-00-02.3y2qk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13tpjz-shard-0&authSource=admin&retryWrites=true&w=majority')
database = client.Institu_JHAM
collection_user = database.user
collection_super_user = database.super_user
collection_course = database.course

async def fetch_all(collection, model, where, specific):
    if not specific:
        cursor = collection.find({})

    else:
        cursor = collection.find({where:specific})
    
    operations=[]
    async for document in cursor:
        operations.append(model(**document))
    return operations

async def create_operation(model, collection, where = '', specific = '',  verify = False):
    document = model

# Check if the user exits 

    try:    
        if verify:
            repeat = await collection.find_one({where:document[specific]})
            if repeat:
                random_number = random.randint(0, 22)
                document[where] = document[where] + f'_{random_number}'

    except AssertionError as error:
        print(error)

    await collection.insert_one(document)
    return document

async def update_operation(collection, name, where, model,specific_where ,one = False):
    document = model

    if one:
        result = await collection.update_one({where:name}, {"$set":{specific_where:model}})
        return result.matched_count
    
    result = await collection.update_one({where:name},
    {"$set":document}) 
    return result.matched_count

async def remove_operation(collection, name):
   result = await collection.delete_one({"name":name})
   return result.deleted_count

async def authenticate_operation(collection, specific, where):
    verification_name = await collection.find_one({where:specific})
    return verification_name

async def pay_service_mercadopago(model_pay, model_user):
    document = model_pay
    
    user_response = update_operation(collection_user, model_user['email'], model_user, 'email') 

    mercado_pago_response = create_mercadopago_items([document])

    response = {'mercado_pago_response':mercado_pago_response,
                'user_response':user_response,}
    return response