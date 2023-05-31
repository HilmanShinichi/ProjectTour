import User from "../models/User.js";

// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "Succesfully created", data: savedUser });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// Kode ini merupakan bagian dari sebuah function `createUser` yang diekspor menggunakan `export`. Function ini memiliki tipe data `async` yang artinya ia akan bekerja secara asynchronous.

//Pada baris kedua, kita membuat variabel `newUser` yang merupakan instance dari model `User` dengan parameter `req.body`. Ini artinya kita membuat sebuah objek baru dengan data yang diterima dari request yang masuk.

//Kemudian, kita mencoba untuk menyimpan objek tersebut ke dalam database melalui method `save()` pada baris ketiga. Hasilnya disimpan ke dalam variabel `savedUser`.

//Jika berhasil disimpan, maka akan dikirimkan respons status 200 dengan pesan "Successfully created" serta data savedUser dalam format JSON pada baris keempat. Namun, jika terjadi error pada saat menyimpan data, maka akan dikirimkan respons status 500 dangan pesan "Failed to create. Try again" dalam format JSON.

// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Succesfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

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

// getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const User = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Succesful",
      data: User,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll User
export const getAllUser = async (req, res) => {
 

  try {
    const users = await User.find({})
      
    res.status(200).json({
      success: true,
      message: "Succesful",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
