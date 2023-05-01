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
    if(!categoryById) {
      res.status(400).json({message: 'no category with that id found'})
    }
    res.status(200).json(categoryById);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    const updatedCategory = await category.update({
      category_name: req.body.category_name
    });
    if(!category) {
      res.status(400).json({message: 'no category with that id found'})
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
  if(!category) {
    res.status(400).json({message: 'no category with that id found'})
  }
  res.status(200).json({message: 'category successfully deleted!'});
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
