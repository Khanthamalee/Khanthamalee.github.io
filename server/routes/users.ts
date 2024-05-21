
import type { Router } from 'express';
import {
  getPosts
} from '../controllers/users';

const employeeRoutes = (router: Router) => {
  router.get('/employeeapi', getPosts);
  return router;
};

export default employeeRoutes;