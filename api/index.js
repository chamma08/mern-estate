import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//line 2 and 3 to hide password from others

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
    }).catch((err) => {
    console.log(err);
    })

const app = express();

app.listen(3000, () => {
        console.log('Server is running on port 30000');
    }
);