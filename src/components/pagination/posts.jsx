import { useEffect, useState } from "react";
import { getPost } from "../../config/api-endpoints";
import Pagination from "./pagination";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // pagination limit
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);


  const getAllPost = async () => {
    setLoader(true);
    const response = await getPost();
    console.log(response.data);
    setPosts(response.data);
    setLoader(false);
  };

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const paginatePrev = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber - 1);
    if ((currentPage -1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const paginateNext = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 5);
    setCurrentPage(1);
  }

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <h2>Post Posts</h2>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        paginatePrev={paginatePrev}
        paginateNext={paginateNext}
        pageNumberLimit={pageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
      />
      <ul className="list-group mb-4">
        <Post posts={currentPost} loader={loader} />
      </ul>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        paginatePrev={paginatePrev}
        paginateNext={paginateNext}
      /> */}
      <button onClick={handleLoadMore} className="btn btn-success">
        LOAD MORE
      </button>
    </>
  );
};

export default Posts;
