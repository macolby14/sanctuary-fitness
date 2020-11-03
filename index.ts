import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import path from 'path';
import cors from 'cors';
import Course from './entity/Course';

createConnection().then((connection) => {
  const courseRepository = connection.getRepository(Course);

  const app = express();
  app.use(cors());

  const PORT = 8000;

  // Serve static files from public -> served under static url
  app.use('/static', express.static(path.join(__dirname, 'public')));

  app.get('/courses', async (req: Request, res: Response) => {
    const coursees = await courseRepository.find();
    res.json(coursees);
  });

  app.get('/courses/:date', async (req: Request, res: Response) => {
    const results = await courseRepository.find({ where: { date: req.params.date } });
    if (results.length > 1) { return res.json({ error: 'More than 1 course found with same date' }); }
    return res.send(results);
  });

  app.post('/courses', async (req: Request, res: Response) => {
    const course = await courseRepository.create(req.body);
    const results = await courseRepository.save(course);
    return res.send(results);
  });

  app.put('/courses/:date', async (req: Request, res: Response) => {
    const courses = await courseRepository.find({ where: { date: req.params.date } });
    if (courses.length > 1) { return res.json({ error: 'More than 1 course found with same date' }); }
    if (courses.length === 0) { return res.json({ error: 'No courses found with this date for put request' }); }
    const course = courses[0];
    courseRepository.merge(course, req.body);
    const results = await courseRepository.save(course);
    return res.send(results);
  });

  app.delete('/courses/:date', async (req: Request, res: Response) => {
    const results = await courseRepository.delete({ date: req.params.date });
    return res.send(results);
  });

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
});
