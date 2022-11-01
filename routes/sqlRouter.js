import express from 'express';
import { getAllHeroes, createHero, getSingleHero, updateHero, retireHero } from "../controllers/heroControllers.js"
const sqlRouter = express.Router();

// one get request for all of heroes and one post request for creating one hero
//                        👇🏼 controller functions👇🏼
sqlRouter.route('/').get(getAllHeroes).post(createHero);
// dynamic id => get req - give back one single hero
//               put req - update a single hero
//               delete req - to delete one hero
//                             👇🏼 controller functions👇🏼              👇🏼      
sqlRouter.route('/:id').get(getSingleHero).put(updateHero).delete(retireHero);

export default sqlRouter;

/*

CRUD pass

1. READ all heroes     GET /
2. READ single hero    GET /:id
3. CREATE one hero     POST /
4. UPDATE one hero     PUT /:id
5. DELETE one hero     DELETE /:id

*/