import express from 'express';

export const orderRouter = express.Router();

orderRouter.get('/', (req, res) => {
  res.send('Order router');
});

orderRouter.post('/', (req, res) => {
  res.send('Order router');
});

orderRouter.get('/:id', (req, res) => {
  res.send(`Order router ${req.params.id}`);
});

orderRouter.delete('/:id', (req, res) => {
  res.send(`Order router ${req.params.id}`);
});
