const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require("../models/user");

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
      // Checking if user logged in before
      let user = await UserModel.findOne({ googleId: profile.id });

      if (user) return cb(null, user);

      // otherwise if user undefined, create that User in our database
      try {
        user = await UserModel.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value, 
        });

        // once we create the user, pass that user document to passport
        return cb(null, user);
      } catch (err) {
        cb(err);
      }
    }
  )
);

passport.serializeUser(function(user, cb){
  cb(null, user._id)
});

passport.deserializeUser(async function(id, cb) {
	try {
		const userDoc = await UserModel.findById(userId);
		// This line of code below
		cb(null, userDoc) // <------- This is setting the user document to req.user = userDoc passes it 
		// to one of the controller functions!
	} catch(err){
		cb(err)
	}
})


