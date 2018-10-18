const router = require("express").Router();
const articleRoutes = require("../..controllers/articleController");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

router.get("api.test", (req, res) => {
    console.log("testing");
    res.send("testing");
});

router
    .router("/:id")
    .get(articlesController.findbyID)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.export = router;