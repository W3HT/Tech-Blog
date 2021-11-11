const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  // code
});

router.put('/:id', withAuth, async (req, res) => {
  // code
});

router.delete('/:id', withAuth, async (req, res) => {
  // code
});
module.exports = router;