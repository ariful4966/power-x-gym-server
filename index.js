const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connection URL
const uri = process.env.DB_PATH;


// Use connect method to connect to the server
var client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true });

//for post method
app.post('/addProgression', (req, res) => {

    const project = req.body;
    client = new MongoClient(uri, { useNewUrlParser: true  });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("pricingTable");
        collection.insert(project, (err, result) => {
            console.log('Successfully Inserted', result);
            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(result.ops[0]);
            }
        })
        client.close();
    });

})


// for get method
app.get('/progression', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("progression");
        collection.find().toArray((err, documents) => {

            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(documents);
            }
        })
        client.close();
    });
});

app.get('/trainingProgramme', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("trainingProgramme");
        collection.find().toArray((err, documents) => {

            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(documents);
            }
        })
        client.close();
    });
});

app.get('/choose', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("choose");
        collection.find().toArray((err, documents) => {

            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(documents);
            }
        })
        client.close();
    });
});

app.get('/classes', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("classes");
        collection.find().toArray((err, documents) => {

            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(documents);
            }
        })
        client.close();
    });
});


app.get('/pricingTable', (req, res) => {
    client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("powerX-gym").collection("pricingTable");
        collection.find().toArray((err, documents) => {

            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            } else {
                res.send(documents);
            }
        })
        client.close();
    });
});
const port = process.env.PORT || 4200;
app.listen(port, () => console.log("Listening Port 4200"));