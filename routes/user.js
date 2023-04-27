import express from "express";
import { 
  getMyProfile,
  loginUser,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

 

router.post("/new", register);

router.post("/login", loginUser);
router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
