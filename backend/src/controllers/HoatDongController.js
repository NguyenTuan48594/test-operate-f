const HoatDong = require("../models/HoatDong");
const ThanhVien = require("../models/ThanhVien");

//[POST]: /api/hoat-dong
const createHoatDong = async (req, res) => {
  try {
    const hoatDong = await HoatDong.create(req.body);
    return res.status(201).json(hoatDong);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//[GET]: /api/hoat-dong
const getAllHoatDong = async (req, res) => {
  try {
    const hoatDong = await HoatDong.find({});
    return res.status(200).json(hoatDong);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//[GET]: /api/hoat-dong/:id
const getDetailHoatDong = async (req, res) => {
  try {
    const hoatDong = await HoatDong.findById({ _id: req.params.id });
    if (!hoatDong) {
      return res.status(404).json("Lỗi");
    } else {
      return res.status(200).json(hoatDong);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//update hoat dong
//[PUT]: /api/hoat-dong/:id
const updateHoatDong = async (req, res) => {
  try {
    const hoatDong = await HoatDong.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(hoatDong);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//delete hoat dong
//[DELETE]: /api/hoat-dong/:id
const deleteHoatDong = async (req, res) => {
  try {
    await HoatDong.findByIdAndDelete(req.params.id);
    return res.status(200).json("delete successfully!!!");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createHoatDong,
  getAllHoatDong,
  updateHoatDong,
  getDetailHoatDong,
  deleteHoatDong,
};
