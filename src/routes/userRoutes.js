import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controlers/userControler";

const productRouter = Router();

productRouter.get("/", getAllUsers);
productRouter.get("/:id", getUserById);
productRouter.post("/", createUser);
productRouter.patch("/:id", updateUser);
productRouter.delete("/", deleteUser);

export default productRouter;
