exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "First Post",
        content: "This is the first post from Get method!",
      }
    ]
  });
};

exports.postPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
        message: "Created from the post request",
      post: {
          id: new Date().toISOString(),
          title: title,
          content: content
      }
  });
};
