import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Kepulauan Derawan",
    city: "Kalimantan Timur",
    distance: 300,
    address: "Kabupaten Berau",
    price: 750000,
    maxGroupSize: 10,
    desc: "Di kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya Taman Bawah Laut yang diminati wisatawan mancanegara terutama para penyelam kelas dunia",
    reviews: [
      {
        name: "ivan muhammad mufid",
        rating: 4.6,
      },
      {
        name: "ivan muhammad mufid",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Danau Beratan",
    city: "Bali",
    distance: 400,
    address: "kawasan Bedugul",
    price: 900000,
    maxGroupSize: 8,
    desc: "Danau Beratan sangat bagus dikunjungi oleh wisatawan yang bosan melihat pantai atau sekedar refreshing, bisa sewa boat mengelilingi danau",
    reviews: [
      {
        name: "Fauzan Musyafa",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Gunung Rinjani",
    city: "Lombok",
    distance: 500,
    address: "Desa sugiri",
    price: 950000,
    maxGroupSize: 8,
    desc: "Gunung Rinjani terkenal dengan pesona alamnya yang memiliki puncak bernama Puncak Dewi Anjani, dan danau kawah yang bernama Segara Anak",
    reviews: [
      {
        name: "Bayu",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Taman Nasional Bunaken",
    city: "Sulawesi Utara",
    distance: 500,
    address: "Manado",
    price: 880000,
    maxGroupSize: 8,
    desc: "Taman Nasional Bunaken adalah taman laut yang terletak di Sulawesi Utara, Indonesia. Taman ini terletak di Segitiga Terumbu Karang yang menjadi habitat bagi 390 spesies terumbu karang[2] dan juga berbagai spesies ikan, moluska, reptil, dan mamalia laut.",
    reviews: [
      {
        name: "Haikul",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida",
    city: "Bali",
    distance: 500,
    address: "Klungkung",
    price: 770000,
    maxGroupSize: 8,
    desc: "Nusa Penida adalah sebuah pulau yang terletak di dekat pulau Bali tenggara Indonesia dan sebuah kabupaten di Kabupaten Klungkung yang mencakup pulau kecil tetangga Nusa Lembongan dan dua belas pulau yang lebih kecil lagi. Selat Badung memisahkan pulau dan Bali",
    reviews: [
      {
        name: "Bima",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Wakatobi",
    city: "Sulawesi Tenggara",
    distance: 500,
    address: "Laut Banda",
    price: 700000,
    maxGroupSize: 8,
    desc: "Dengan luas mencapai 13.900 km2, tujuan wisata terkenal asal Indonesia ini memiliki tak kurang dari 112 jenis terumbu karang yang bersimbiosis dengan ikan-ikan bawah laut sehingga menciptakan panorama bawah laut yang tiada tanding",
    reviews: [{
      name: "Lukas",
      rating: 4.6,
    },
  ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Raja Ampat",
    city: "Papua Barat",
    distance: 500,
    address: "Waigeo",
    price: 900000,
    maxGroupSize: 8,
    desc: "Surga dunia di Indonesia selanjutnya adalah kepulauan Raja Ampat yang terletak di Papua Barat dengan kekayaan laut terlengkap di bumi.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Andri",
        rating: 5.0,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Candi Borobudur",
    city: "Jawa Tengah",
    distance: 500,
    address: "magelang",
    price: 200000,
    maxGroupSize: 8,
    desc: "Salah satu ikon wisata budaya Indonesia yang mendunia lainnya adalah Candi Borobudur. Sebagai candi Budha terbesar di dunia dengan luas tak kurang dari 123 X 123 meter, candi yang dibangun pada masa kerajaan Mataram kuno ini merupakan warisan budaya dan sejarah Indonesia yang terkenal akan arsitektur yang memukau",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
