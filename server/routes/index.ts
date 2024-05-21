
import * as express from 'express';

// Import individual route profiles from controllers
import employeeRoutes from './users';

const router = express.Router();

// Pass our router instance to controllers
router.use('/employeeapi', employeeRoutes(router));

export default router;