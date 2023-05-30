import { query } from "express";
import Tour from "../models/Tour.js";

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res
      .status(200)
      .json({ success: true, message: "Succesfully created", data: savedTour });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// Kode ini merupakan bagian dari sebuah function `createTour` yang diekspor menggunakan `export`. Function ini memiliki tipe data `async` yang artinya ia akan bekerja secara asynchronous.

//Pada baris kedua, kita membuat variabel `newTour` yang merupakan instance dari model `Tour` dengan parameter `req.body`. Ini artinya kita membuat sebuah objek baru dengan data yang diterima dari request yang masuk.

//Kemudian, kita mencoba untuk menyimpan objek tersebut ke dalam database melalui method `save()` pada baris ketiga. Hasilnya disimpan ke dalam variabel `savedTour`.

//Jika berhasil disimpan, maka akan dikirimkan respons status 200 dengan pesan "Successfully created" serta data savedTour dalam format JSON pada baris keempat. Namun, jika terjadi error pada saat menyimpan data, maka akan dikirimkan respons status 500 dangan pesan "Failed to create. Try again" dalam format JSON.

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Succesfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Succesful",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll tour
export const getAllTour = async (req, res) => {
  // untuk pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Succesful",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); // disini 'i' artinya case sensitive
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte berarti lebih besar dari sama dengan
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });

    res.status(200).json({
      success: true,
      message: "Succesful",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
