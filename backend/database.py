import motor.motor_asyncio 

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://Juan:Tilacino1@cluster0-shard-00-00.3y2qk.mongodb.net:27017,cluster0-shard-00-01.3y2qk.mongodb.net:27017,cluster0-shard-00-02.3y2qk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-13tpjz-shard-0&authSource=admin&retryWrites=true&w=majority')
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

async def create_operation(model, collection, where, specific,  verify = False):
    document = model

# Check if the user exits 

    try:    
        if verify:
            print('Verificando')
            user = await collection.find_one({where:document[specific]})
            if user:
                return "error_name"

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

async def authenticate_operation(collection, email):
    verification_name = await collection.find_one({"email":email,})
    return verification_name