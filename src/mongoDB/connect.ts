import mongoose from 'mongoose';

export default (dbHost: string, dbUser: string, dbPass: string) => {

    mongoose.connect(
        dbHost,
        {
        auth: {
            user: dbUser,
            password: dbPass,
        },
        useNewUrlParser : true,
        useFindAndModify: false,
        },
        )
        .then(() => {
            console.log(`Successfully connected to Cosmo DB`);
        })
        .catch( (error) => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
};
