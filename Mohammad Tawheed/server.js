async function loadlesson() {
    try {
      const client = await mongodb.MongoClient.connect(
        process.env.MONGODB_URI || 'mongodb+srv://tawheed:tawheed@cluster0.hcibapc.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true }
      );
      return client.db('myDatabase').collection('lessons');
    } catch (err) {
      console.error(err);
    }
  }
  
  async function loadorders() {
    try {
      const client = await mongodb.MongoClient.connect(
        process.env.MONGODB_URI || 'mongodb+srv://Jubayer:Jubayer@cluster0.jwtcn5h.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true }
      );
      return client.db('myDatabase').collection('orders');
    } catch (err) {
      console.error(err);
    }
  }
  