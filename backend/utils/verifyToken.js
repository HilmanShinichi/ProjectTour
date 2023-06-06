import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  // jika token tidak ada berikan respon ini
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Tou're not authorize",
    });
  }

  // jika token ada makal lakukan verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }

    req.user = user;
    next(); // next untuk jalankan middleware
  });
};


export const verifyUser = (req, res, next) => {
  const token = req.cookies.accessToken;
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Tou're not authorize",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    
    if (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    
    try {
      if ( user.role === "user") {
        

        next();
      }else{
        res.status(401).json({
          success: false,
          message:"is not admin"
         })
      }
    } catch (error) {
      console.log(error)
    }
  
  });
    //req.user = user;
    // next untuk jalankan middleware
  ;
    // if (req.user.id === req.params.id || req.user.role === "admin") {
    //   next();
    // } else {
    //   return res.status(401).json({
    //     success: false,
    //     message: "You're not authenticated",
    //   });
    // }
    
  };

// export const verifyAdmin = (req, res, next) => {
//   console.log(req.user.role)
//   verifyToken(req, res, next, () => {
//     if (req.body.role === 'admin') {
//     next();
//     } else {
//       return res.status(401).json({
//         success: false,
//         message: "You're not authorize",
//       });
//     }
//   });
// };

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Tou're not authorize",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    
    try {
      if ( user.role === "admin") {
        next();
      }else{
       res.status(401).json({
        success: false,
        message:"is not admin"
       })
      }
    } catch (error) {
      console.log(error)
    }
  
  });
    //req.user = user;
    // next untuk jalankan middleware
  ;
    // if (req.user.id === req.params.id || req.user.role === "admin") {
    //   next();
    // } else {
    //   return res.status(401).json({
    //     success: false,
    //     message: "You're not authenticated",
    //   });
    // }
    
  };

