import express, { Request, Response } from 'express';
import cors from 'cors';
import  prisma  from '../prismaClient';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', async (req: Request, res: Response) => {
  console.log('Received request for /movieslist');
  try {
    const allMovies = await prisma.movie.findMany();

    res.json({
      message: 'Successfully retrieved all movies',
      data: allMovies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving movies',
    });
  }
});

export default router;
