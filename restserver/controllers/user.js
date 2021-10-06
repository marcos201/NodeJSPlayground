const { response } = require ('express');

const userGet = (req, res = response) => {
    
    const { name } = req.query;

    res.json({
        msj: "get api desde controlador",
        name
    });
};

const userPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msj: "post api desde controlador",
        body
        });
};

const userPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msj: "put api desde controlador",
        id
    });
};

const userDelete = (req, res = response) => {
    res.json(
        {msj: "delete api desde controlador"});
};

module.exports = { userGet, userPost, userPut, userDelete };