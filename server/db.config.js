const dbName = "foodApp";
//const dbHost = 'localhost';
const dbHost = '127.0.0.1';

const dbPort = 27017;
module.exports ={
    url:`mongodb://${dbHost}:${dbPort}/${dbName}` 
}