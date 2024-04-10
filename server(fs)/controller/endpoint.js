const express = require("express");
const router = express.Router();

const Createabl = require("../abl/create-point");
const Getabl = require("../abl/get-point");
const Updateabl = require("../abl/update-point");
const Deleteabl = require("../abl/delete-point");
const Listabl = require("../abl/list-point");

router.post("/create", async (req, res) => {
  await Createabl(req, res);
});

router.get("/get", async (req, res) => {
  await Getabl(req, res);
});

router.post("/update", async (req, res) => {
  await Updateabl(req, res);
});

router.post("/delete", async (req, res) => {
  await Deleteabl(req, res);
});

router.get("/list", async (req, res) => {
  await Listabl(req, res);
});

module.exports = router;