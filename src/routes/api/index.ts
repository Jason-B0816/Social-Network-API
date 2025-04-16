import { Router } from 'express';
import userRoutes from './userRoutes';
// import thoughtRoutes from './thoughtRoutes'; // Uncomment when ready

const router = Router();

router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes); // Uncomment when ready

export default router;

