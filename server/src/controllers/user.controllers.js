const registerSchema = require("../models/User");
const bcrypt = require('bcrypt')
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
dotenv.config();

const generateAccessTokens = async (username) => {
  try {
    const user = await registerSchema.findOne(username)

    const payloadAccessToken = {
      name:user.name
    }

    const accessToken = jwt.sign(payloadAccessToken,process.env.ACCESS_TOKEN_SECRET,{expiresIn: process.env.ACCESS_TOKEN_EXPIRY})
    console.log("accessToken",accessToken)

    user.accesstoken = accessToken
    await user.save({ validateBeforeSave: false })

    return {accessToken}

  } catch (error) {
    message:error
  }
}

exports.regsiter = async (req, res) => {
  try {
      const { name, email, password } = req.body;
  
      if(email === await registerSchema.findOne({email},{"email":1, "_id":0})){
          return res.json({
              message:"User are already exist"
          });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const savedUserData = await registerSchema.create({
          name,
          email,
          password:hashedPassword
      });

      const checkUser = await registerSchema.findOne({name},{"name":1,"password":1,"_id":0});
      const {accessToken} = await generateAccessTokens(checkUser); 

      res.cookie("token",accessToken)
      // consle.log("a:",savedUserData)
      res.json(savedUserData);
  } catch (error) {
      return res.json({
          message:`Error:${error}`
      });
  }
};

exports.showData= async(req,res) => {
  try {
    const name = await registerSchema.find({  });
    // console.log("a:",name)
    res.json(name);
} catch (error) {
    return res.json({
        message:`Error:${error}`
    });
}

};

exports.specificData= async(req,res) => {
  try {
    const user = await registerSchema.findById(req.params.id);  // Find user by ID
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error: error.message });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await registerSchema.findOneAndDelete({name: req.user.name});
    console.log("a:",data)
    // res.json(data);
  } catch (error) {
    console.log(`Error:${error}`);
  }
}

// exports.googleSubmit = async (req,res) =>{
//     passport.use(
//         new GoogleStrategy(
//           {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: "http://localhost:5000/google/callback",
//             passReqToCallback: true,
//           },
//           async (req, accessToken, refreshToken, profile, done) => {
//             try {
//               let user = await registerSchema.findOne({ email: profile._json.email });
      
//               if (!user) {
//                 user = await registerSchema.create({
//                   name: profile._json.name,
//                   email: profile._json.email,
//                 });
//               }
      
//               console.log("Google Profile:", profile);
      
//               return done(null, registerSchema);
//             } catch (error) {
//               return done(error, null);
//             }
//           }
//         )
//       );
      
//       passport.serializeUser(function (user, done) {
//         done(null, user.id); 
//       });
      
//       passport.deserializeUser(async function (id, done) {
//         try {
//           const user = await registerSchema.findById(id); 
//           done(null, user); 
//         } catch (error) {
//           done(error, null);
//         }
//       });
      
//       exports.newUser = (req, res) => {
//         res.send("New user route for Google OAuth");
//       };
// }