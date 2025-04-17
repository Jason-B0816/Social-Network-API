import { Router } from 'express';
import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js'; // Uncomment when ready

const router = Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes); // Uncomment when ready

export default router;

