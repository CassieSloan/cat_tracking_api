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
    let cat = await CatModel.findById(id)
    res.render("cats/show", {cat})
}

const edit = async (req, res) => {
    console.log("edit is working")
    let {id} = req.params
    let cat = await CatModel.findById(id)
    res.render("cats/edit", {cat})
}

const update = async (req, res) => {
    console.log("update is working")
    let {id} = req.params
    let {face, breed, sex, name} = req.body
    await CatModel.findByIdAndUpdate(id, { face, breed, sex, name })
    res.redirect(`/cats/${id}`)
}

const destroy = async (req, res) => {
    console.log("delete is working")
    let {id} = req.params
    await CatModel.findByIdAndRemove(id)
    res.redirect("/cats")
}

module.exports = {
    index,
    make,
    create,
    show,
    edit,
    update,
    destroy
};