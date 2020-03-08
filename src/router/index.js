const { Router } = require("express");

const { index, show, store, update, destroy, disable } = require("../controller/OrdersController");

const router = Router();

router.get("", index)
        .get("/:_id", show)
        .post("/", store)
        .patch("/:_id", update)
        .put("/:_id/Deactivate", disable)
        .delete("/:_id", destroy);

module.exports = router;