import passport from "passport";
import { Strategy } from "passport-local";
// import { UserDaoMongoDB } from "../container/daos/user/UserDaoMongoDB.js";
import { User } from '../container/daos/user/userModel.js'

passport.serializeUser((user, done) => {
    done(null, user.email);
});
passport.deserializeUser(async (id, done) => {
    // const user = await UserModel.findById(id);
    const user = users.find(user => user.email == id)
    done(null, user); 
});

const LocalStrategy = Strategy;

const users = [
    {email:'cazalapedro@gmail.com',password:'1234',data:'fadsdfsdf', name:"Pedrito"}
]
passport.use(
    "local-signup",
    new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
          passReqToCallback: true,
        },
        async (req, email, password,done) => {
            // const user = await UserModel.findOne({email:email})
            const user = await User.findOne({email:email})
            if(user){
              // console.log(user);
              const messageSingUpError =`El usuario con mail ${email}, ya existe, por favor ingresar un nuevo mail, ...ver como enviar una respuesta`
              console.log(messageSingUpError);
              // return done(null,messageSingUpError)
              done(null,false)
            }else{
            //   const newUser = new UserModel();
                const newUser = {email,password}
            //   newUser.email = email;
            //   newUser.password = newUser.encryptPassword(password);
            //   await newUser.save();
                users.push(newUser)
                console.log(users);
                done(null, newUser); 
            }
        }
    )
)

passport.use(
    'local-login',
    new LocalStrategy (
        {usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,},
        (req, email, password, done)=>{
            const user = users.find(user => user.email == email)
            // const user =
            if (!user) {
                const messageSingInError =`El usuario no existe, ...ver como enviar una respuesta`
                console.log(messageSingInError);
                done(null,false)
            }else if(user.password != password){
                const messageSingInError =`La contraseña es incorrecta, ...ver como enviar una respuesta`
                console.log(messageSingInError);
                done(null,false)
            }else{
                done(null,user)
            }
        }
    )
)