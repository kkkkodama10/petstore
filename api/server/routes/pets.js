
const express = require('express')
const app = express()
const router = express.Router()

const cassandra = require("cassandra-driver");
const client = new cassandra.Client({ contactPoints: ["192.168.11.7"],localDataCenter: 'datacenter1', keyspace: "pet_store" });

router.get('', function(req, res){ 
    const query = "SELECT * FROM pet_store;"
    client.execute(query)
    .then(result => {
            res.json(result.rows)
        })
})

router.post('', function(req, res){ 
    console.log(req.body)
    const petId = req.body.id
    const petName = req.body.name
    const petComment = req.body.comment
    const petTimeStamp = req.body.timestamp
    const query = "INSERT INTO pet_store (id,name,comment,timestamp) VALUES('" + petId + "', ' " + petName + "', '" + petComment + "', '" + petTimeStamp + "');"
    client.execute(query)
    .then(result => {
        res.json(req.body)
    })
})


router.get('/:petId', function(req, res){ 
    const petId = req.params.petId
    const query = "SELECT * FROM pet_store WHERE id ='" + petId +"';"
    client.execute(query)
    .then(result => {
            res.json(result.rows)
            console.log(result.rows);
        })
})

router.delete('/:petId', function(req, res){ 
    const petId = req.params.petId
    const query = "DELETE FROM pet_store WHERE id ='" + petId +"';"
    client.execute(query)
    res.json({'status' : 'DELETE SUCSESS!'})
})

router.put('/:petId', function(req, res){ 
    const petId = req.params.petId
    const petName = req.body.name
    const petComment = req.body.comment
    const petTimeStamp = req.body.timestamp
    const query = "UPDATE pet_store SET name='" + petName + "', comment='" + petComment + "',timestamp= '" +petTimeStamp+ "' WHERE id ='" + petId +"';"
    client.execute(query)
    .then(result => {
        let respnse = Object.assign(req.params, req.body);
        res.json(respnse)
    })
})

module.exports = router

