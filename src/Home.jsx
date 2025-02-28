import BlogList from './BlogList';
import useFetch from './UseFetch';
import { FaSpinner, FaExclamationCircle } from 'react-icons/fa'; // Import icons

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://techworld-production.up.railway.app/blogs');

    return ( 
        <div className="home">
          {error && <div className="error">{error}</div>}

          {isPending && (
            <div className="loading-container">
              <FaSpinner className="loading-icon" />
            </div>
          )}

          {blogs && blogs.length === 0 && (
            <div className="no-blogs">
              <FaExclamationCircle className="no-blogs-icon" />
              <p>No blogs yet.</p>
            </div>
          )}

          {blogs && blogs.length > 0 && <BlogList blogs={blogs} title={'Blog title'} />}
        </div>
    );
}

export default Home;
