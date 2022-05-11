const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get("/", (req, res) => {
  Tag.findAll({
    include: [Product],
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err));
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // JOIN with Product
      include: [{ model: Product, through: ProductTag }],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
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

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const tagDel = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagDel) {
      res.status(404).json({ message: "No Tag with that ID" });
      return;
    }
    res.status(200).json(tagDel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
