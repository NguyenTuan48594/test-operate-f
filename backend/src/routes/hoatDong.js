const express = require("express");
const router = express.Router();
const HoatDongController = require("../controllers/HoatDongController");

router.post("/", HoatDongController.createHoatDong);
router.get("/", HoatDongController.getAllHoatDong);
router.get("/:id", HoatDongController.getDetailHoatDong);
router.put("/:id", HoatDongController.updateHoatDong);
router.delete("/:id", HoatDongController.deleteHoatDong);

module.exports = router;
