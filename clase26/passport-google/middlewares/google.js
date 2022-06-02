import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

passport.use(
    "auth-google",
    new GoogleStrategy({
    clientID: '22318597450-gvvuhud8q7fh13mpghte57duu8l345c0.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google"
  },
  function(accessToken, refreshToken, profile, done) {
    const userProfile = profile
    done(null,userProfile)
  }
));