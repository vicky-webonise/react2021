const Post = ({posts, loader}) => {

  if(loader) {
    return <h2 className="mt-5">loading....</h2>
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="mb-4" key={post.id}>
            <div className="card bg-info text-left">
              <div className="card-body">
                <b>
                  {post.id} {post.title}
                </b>
                {/* <p>{post.body}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

}

export default Post;
