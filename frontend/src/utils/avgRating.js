const calculatingAvgRating = reviews => {
    //adalah fungsi reduksi yang akan dijalankan untuk setiap elemen di dalam array reviews. Fungsi ini akan mengakumulasi (menambahkan) rating setiap item ke akumulator (acc).
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0)
    const avgRating = totalRating === 0 ? '' : totalRating === 1 ? totalRating : (totalRating / reviews?.length).toFixed(1); 

    return {
        totalRating,
        avgRating,
    };
};

export default calculatingAvgRating;
