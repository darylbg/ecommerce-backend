const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tags);
  } catch (error) {
    res.status(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tag) {
      res.status(400).send(`No tag with that id found`);
      return;
    }
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).send(`Successfully created tag: ${newTag.tag_name}`);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    const updateTag = await tag.update({
      tag_name: req.body.tag_name
      });
      res.status(200).send(`Successfully updated tag`);
    if(!tag) {
      res.status(400).send(`No tag with that id found`);
      return;
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.findOne({
      where: {
        id: req.params.id
      }
    });
    if(!deleteTag) {
      res.status(400).send(`No tag with that id found`);
      return;
    }
    await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(`Successfully deleted tag: ${deleteTag.tag_name}`)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
