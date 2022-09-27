import mongoose from 'mongoose';


const Connection = async (username = 'docs-admin', password = '1234') => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.jm0vv7x.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Connection Successful');
    } catch(error) {
        console.log(error);
    }
}

export default Connection