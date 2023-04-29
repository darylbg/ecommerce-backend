const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryById = await Category.findByPk(
      req.params.id,
      {include: [{ model: Product }]}
    );
    res.status(200).json(categoryById);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    console.log('creating a new line');
    const categoryData = await Category.create(req.body);
    console.log(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryById = await Category.findByPk(req.params.id);
    console.log(categoryById);
    const updatedCategory = await categoryById.update({
      category_name: req.body.category_name
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
