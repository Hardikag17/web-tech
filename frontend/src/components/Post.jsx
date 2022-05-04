import '../styles/Post.css';

const Post = ({ user, url, content, mobile, city }) => {
  return (
    <div className='col-sm-6 col-lg-4 p-4'>
      <div className='card bg-light text-black'>
        <div className='card-body d-flex justify-content-center'>
          <b>{user}</b>
        </div>
        <img src={url} className='card-img w-100' alt='abc' />
        <div className='card-img-overlay h-100 d-flex flex-column justify-content-end text-white dark-bg'>
          <div className='card-text fw-bold'>
            <p>{content}</p>
            <p className='d-flex justify-content-between'>
              <div>{city} </div>
              <div>(+91){mobile}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
