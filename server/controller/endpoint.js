const express = require("express");
const router = express.Router();

const Createpoint = require("../point/create-point");
const Getpoint = require("../point/get-point");
const Updatepoint = require("../point/update-point");
const Deletepoint = require("../point/delete-point");
const Listpoint = require("../point/list-point");

router.post("/create", async (req, res) => {
  await Createpoint(req, res);
});

router.get("/get", async (req, res) => {
  await Getpoint(req, res);
});

router.post("/update", async (req, res) => {
  await Updatepoint(req, res);
});

router.post("/delete", async (req, res) => {
  await Deletepoint(req, res);
});

router.get("/list", async (req, res) => {
  await Listpoint(req, res);
});

module.exports = router;