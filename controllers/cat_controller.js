const CatModel = require("../database/model/cat_model");

const index = async (req, res) => {
    let cats = await CatModel.find()
    res.render("cats/index", {cats});
}

const make = async (req, res) => {
    res.render("cats/new");
}

const create = async (req, res) => {
    console.log("create is working")
    let {face, breed, sex, name} = req.body
    let cat = await CatModel.create({face, breed, sex, name})
    .catch (err => res.status(500).send(err))
    res.redirect("/cats")
}

const show = async (req, res) => {
    console.log("show is working")
    let { id } = req.params
    res.render("cats/show")
}

module.exports = {
    index,
    make,
    create
};