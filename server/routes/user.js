import express from 'express';
import { deleteUser, getAllUsers, getProfile, getUserById,  updateUser } from '../controllers/user.js';

const router  = express.Router();




router.put("/update/:id", updateUser);

router.delete("/delete/:id",deleteUser);

router.get("/user/:id", getUserById);


router.get("/user/profile/:id", getProfile);


router.get("/users", getAllUsers);


export default router;


