const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    const db = await mongoose.connect(`mongodb+srv://jrconsole:${process.env.DB_PASSWORD}@starter-cluster.3yxnq.mongodb.net/iterate_db?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    .then(() => {
        console.log('MongoDB Connected...');
        setTimeout(() => console.log(db), 5000);
    })
    .catch(err => console.log(err));

}
