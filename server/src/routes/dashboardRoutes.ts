import { getDashboardMetrics } from "../controllers/dashboardControllers";
import { Router } from "express";

const router: Router = Router();

router.get("/", getDashboardMetrics);

export default router;
