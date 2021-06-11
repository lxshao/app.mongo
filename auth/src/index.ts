import mongoose from 'mongoose';
import { app } from './app';
import { port } from './config/config';

const start = async () => {
  if(!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-svc:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to Mongodb')
  } catch (err) {
    console.error(err);
  }
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();

