const resolvers = {
    Query: {
        hello: () => "hi"
    }
};

module.exports = {resolvers};

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));