import express,{Request,Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import "./config/passport"; // Import passport config
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Express session middleware
app.use(
  session({
    secret: process.env.JWT_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie:{secure: false}
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/auth/session", (req, res) => {
  console.log("Session Data:", req.session);
  console.log("User Data:", req.user);
  res.json({ session: req.session, user: req.user });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
