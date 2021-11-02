import { useEffect, useState } from "react";
import { getPost } from "../../config/api-endpoints";
import Pagination from "./pagination";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

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
    setIsNextDisabled(false);
    e.preventDefault();
    // console.log("pageNumber" + pageNumber);
    if (pageNumber === 1) {
      setIsPrevDisabled(true);
      setCurrentPage(1);
      console.log(isPrevDisabled);
    } else {
      setIsPrevDisabled(false);
      setCurrentPage(pageNumber - 1);
      console.log(isPrevDisabled);
    }
  };

  const paginateNext = (e, pageNumber) => {
    setIsPrevDisabled(false);
    const totalPageCount = posts.length / postsPerPage;
    // console.log(totalPageCount);
    e.preventDefault();
    if (pageNumber === totalPageCount) {
      setIsNextDisabled(true);
      setCurrentPage(totalPageCount);
    } else {
      setIsNextDisabled(false);
      setCurrentPage(pageNumber + 1);
    }
  };

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
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        paginatePrev={paginatePrev}
        paginateNext={paginateNext}
      />
      <Post posts={currentPost} loader={loader} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        paginatePrev={paginatePrev}
        paginateNext={paginateNext}
      />
    </>
  );
};

export default Posts;
