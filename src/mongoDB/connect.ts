import mongoose from 'mongoose';

export default (dbHost: string) => {
    mongoose.connect(
        dbHost,
        {useNewUrlParser : true},
        )
        .then(() => {
            console.log(`Successfully connected to ${dbHost}`);
        })
        .catch( (error) => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
};
