const express = require('express');
const router = express.Router();
const Tree = require('../models/Tree');

// Route hiển thị danh sách cây
router.get('/', async (req, res) => {
  try {
    const trees = await Tree.find({});
    res.render('index', { trees });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error fetching trees');
  }
});

// Route thêm cây mới
router.post('/add', async (req, res) => {
  const { treename, description, image } = req.body;

  if (!treename || !description) {
    return res.render('index', { error: 'Tree name and description are required' });
  }

  const newTree = new Tree({ treename, description, image });
  try {
    await newTree.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    return res.render('index', { error: 'Error saving tree' });
  }
});

router.post('/reset', async (req, res) => {
  try {
    await Tree.deleteMany({});
    res.redirect('/');
  } catch (err) {
    console.error(err);
    return res.render('index', { error: 'Error resetting trees' });
  }
});

module.exports = router;