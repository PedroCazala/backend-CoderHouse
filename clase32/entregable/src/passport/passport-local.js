import passport from "passport";
import { Strategy } from "passport-local";
import { UserModel } from "../containers/mongo/models/user.js";
const LocalStrategy = Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user); 
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const user = UserModel.findOne({email:email})
      if(user){
        // console.log(user);
        const messageSingUpError =`El usuario con mail ${email}, ya existe, por favor ingresar un nuevo mail, ...ver como enviar una respuesta`
        console.log(messageSingUpError);
        // return done(null,messageSingUpError)
        done(null,false)
      }else{
        const newUser = new UserModel();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser); 
      }
    }
  )
);
passport.use( "local-login", new LocalStrategy( {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
},async (req, email, password, done)=>{
  const user = await UserModel.findOne({email:email}) 

  if(!user){
    const messageSingInError =`El usuario no existe, ...ver como enviar una respuesta`
        console.log(messageSingInError);
    done(null,false)
  }else if(!user.comparePassword(password)){
    const messageSingInError =`La contraseña es incorrecta, ...ver como enviar una respuesta`
    console.log(messageSingInError);
  done(null,false)
  }else{
    done(null,user)
  }
}))