import express from "express";
import { getProducts, newProduct , getProductDetails ,updateProduct ,  deleteProduct ,getProductReviews ,createProductReview ,deleteReview } from "../controllers/productcontrollers.js";
import {isAuthenticatedUser,authorizeRoles} from "../middlewares/auth.js"
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(isAuthenticatedUser,authorizeRoles("admin"),newProduct);

router.route("/products/:id").get(getProductDetails);
router.route("/admin/products/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
router.route("/admin/products/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);


router
  .route("/reviews")
  .get(isAuthenticatedUser, getProductReviews)
  .put(isAuthenticatedUser, createProductReview);

router
  .route("/admin/reviews")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteReview);


export default router;