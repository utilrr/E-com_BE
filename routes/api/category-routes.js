const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category with that ID" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updated) => {
      res.json(updated);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryDel = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryDel) {
      res.status(404).json({ message: "No Category with that ID" });
      return;
    }
    res.status(200).json(categoryDel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
