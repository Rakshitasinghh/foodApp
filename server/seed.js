const{faker} = require('@faker-js/faker');
const MongoClient = require ("mongodb").MongoClient;

async function main(){
    const url = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try{
        await client.connect();

        const productsCollection = client.db ("food-app").collection("products");
        const categoriesCollection = client.db("food-app").collection("categories");

        productsCollection.drop();
    }
}