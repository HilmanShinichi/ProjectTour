 import Tour from '../models/Tour.js';

 // create new tour
 export const createTour = async (req, res) => {

    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Succesfully created', data:savedTour})
    } catch (err) {
        res.status(500).json({success:false, message:'Failed to create. Try again'})
    }
    
 }

 // Kode ini merupakan bagian dari sebuah function `createTour` yang diekspor menggunakan `export`. Function ini memiliki tipe data `async` yang artinya ia akan bekerja secara asynchronous.

//Pada baris kedua, kita membuat variabel `newTour` yang merupakan instance dari model `Tour` dengan parameter `req.body`. Ini artinya kita membuat sebuah objek baru dengan data yang diterima dari request yang masuk.

//Kemudian, kita mencoba untuk menyimpan objek tersebut ke dalam database melalui method `save()` pada baris ketiga. Hasilnya disimpan ke dalam variabel `savedTour`.

//Jika berhasil disimpan, maka akan dikirimkan respons status 200 dengan pesan "Successfully created" serta data savedTour dalam format JSON pada baris keempat. Namun, jika terjadi error pada saat menyimpan data, maka akan dikirimkan respons status 500 dangan pesan "Failed to create. Try again" dalam format JSON.