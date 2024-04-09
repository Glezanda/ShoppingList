const express = require("express");
const router = express.Router();

const Createdao = require("../dao/create-dao");
const Getdao = require("../dao/get-dao");
const Updatedao = require("../dao/update-dao");
const Deletedao = require("../dao/delete-dao");
const Listdao = require("../dao/list-dao");

router.post("/create", async (req, res) => {
  await Createdao(req, res);
});

router.get("/get", async (req, res) => {
  await Getdao(req, res);
});

router.post("/update", async (req, res) => {
  await Updatedao(req, res);
});

router.post("/delete", async (req, res) => {
  await Deletedao(req, res);
});

router.get("/list", async (req, res) => {
  await Listdao(req, res);
});

module.exports = router;