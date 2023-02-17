import { Router } from "express";
import { getPromociones } from "./../controllers/promociones.controller.js";

const router = Router();

router.get('/', getPromociones);

router.get('/:id', (req, res) => res.json({ response: 'Get promocion ' + req.params.id }));

router.post('/', (req, res) => res.send('create promociones'));

router.patch('/:id', (req, res) => res.send('update promociones'));

router.delete('/:id', (req, res) => res.send('update promociones'));

export default router;