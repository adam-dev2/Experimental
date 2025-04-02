import express from "express";
import passport from "passport";

const router = express.Router();

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  res.send("Google Auth Successful");
});

// GitHub Auth
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get("/github/callback", passport.authenticate("github", { session: false }), (req, res) => {
  res.send("GitHub Auth Successful");
});

export default router;
