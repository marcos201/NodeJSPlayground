const { response } = require ('express');

const userGet = (req, res = response) => {
    
    res.json(
        {msj: "get api desde controlador"});
};

const userPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msj: "post api desde controlador",
        body
        });
};

const userPut = (req, res = response) => {
    res.json(
        {msj: "put api desde controlador"});
};

const userDelete = (req, res = response) => {
    res.json(
        {msj: "delete api desde controlador"});
};

module.exports = { userGet, userPost, userPut, userDelete };