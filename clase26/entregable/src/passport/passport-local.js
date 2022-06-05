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
      const user = new UserModel();
      user.email = email;
      user.password = UserModel.encryptPassword(password);
      await user.save();
      done(null, user);
      //   User.findOne({ mail: mail }, function (err, user) {
      //     if (err) { return done(err); }
      //     if (!user) { return done(null, false); }
      //     if (!user.verifyPassword(password)) { return done(null, false); }
      //     return done(null, user);
      //   });
    }
  )
);
