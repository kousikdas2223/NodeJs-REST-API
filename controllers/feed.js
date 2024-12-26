exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: "First Post",
        content: "This is the first post from Get method!",
        imageUrl: 'images/snail.jpg',
        creator: {
          name: 'Kousik Das'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
        message: "Created from the post request",
      post: {
          _id: '2',
          title: title,
          content: content
      }
  });
};
