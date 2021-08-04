import motor.motor_asyncio 


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.Institu_JHAM
collection_user = database.user
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

async def create_operation(model, collection, verify = False):
    document = model

# Check if the user exits 

    try:    
        if verify:
            
            user = await collection.find_one({"name":document["name"]})
            if user:
                return "error_name"

    except AssertionError as error:
        print(error)

    result = await collection.insert_one(document)
    return document

async def update_operation(collection, name, model):
    document = model
    result = await collection.update_one({"name":name},
    {"$set":document}) 
    return result.matched_count

async def remove_operation(collection, name):
   result = await collection.delete_one({"name":name})
   return result.deleted_count

async def authenticate_operation(collection, email):
    verification_name = await collection.find_one({"email":email,})
    return verification_name