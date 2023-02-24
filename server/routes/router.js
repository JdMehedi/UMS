const express = require("express");
const service = require("../service/render");
const controller = require("../controller/controller");
const router = express.Router();
/**
 * @descriptin Create route
 * @method GET
 */
router.get("/user/create", service.CreateUserRoutes);

/**
 * @descriptin update route
 * @method GET
 */
router.get("/user/update", service.UpdateUserRoutes);

/**
 * @descriptin Profile route
 * @method GET
 */
router.get("/user/profile", service.UserProfileRoutes);

/**
 * @descriptin Home route
 * @method GET
 */
router.get("/", service.HomeRoutes);

//API
router.get("/api/users", controller.find);
router.post("/api/user/create", controller.create);
router.post("/api/user/update/:id", controller.update);
router.delete("/api/user/delete/:id", controller.delete);

module.exports = router;
