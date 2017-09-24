import { Router } from 'express'

import events from './events'

const router = Router()

// Add USERS Routes
router.use(events)

export default router
