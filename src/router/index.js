const { Router } = require("express");

const { index, show, store, update, destroy } = require("../controller/OrdersController");

const router = Router();

router.get("/", index)
        .get("/:_id", show)
        .post("/", store)
        .put("/:_id", update)
        .delete("/:_id", destroy);

module.exports = router;