const Post = ({posts, loader}) => {

  if(loader) {
    return <h2 className="mt-5">loading....</h2>
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="list-group-item text-success text-left" key={post.id}>
            [{post.id}] {post.title}
          </div>
        );
      })}
    </>
  );

}

export default Post;
