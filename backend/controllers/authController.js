import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user registration
export const register = async (req, res) => {
  try {

    // hasing password
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req.body.password, salt)




    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ 
        success: true, 
        message:'Successfully created'
    });
  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message:'Failed to create. Try again'
    });
  }
};

// user login
export const login = async (req, res) => {

    const email = req.body.email

  try {

    const  user = await User.findOne({ email })

    // jika user tidak ada
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }

    // jika user ada kemudian cek password sesuai dengan DB (compare)
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

    // jika password tidak sesuai
    if(!checkCorrectPassword){
        return res.status(401).json({
            success:false,
            message:'Incorrect email or password'
        });
    };

    const {password, role, ...rest} = user._doc
  
    // buat jwt token
    const token = jwt.sign({
        id:user._id,
        role:user.role,
    }, process.env.JWT_SECRET_KEY,
    { expiresIn: "15d"});

    // set token cookie di browser dan kirim respon ke client
    res.cookie('accessToken', token, {
        httpOnly: true,
        expires:token.expiresIn
    }).status(200).json({
        token,
        success:true,
        data:'successfully login', data:{
            ...rest,  
        },
         role
    });

      
  } catch (error) {
    res.status(500).json({
        success:false,
        message:'Failed to login'
    });
  }
};
