import Navbar from './Navbar';
import BannerContent from './BannerContent';
import PostLayout from './PostLayout';
import Footer from './Footer';
import '../styles/Main.css';
import PostBar from './PostBar';

function Rout() {
  return (
    <div>
      <Navbar />
      <div className='App'>
        <BannerContent />
        <div style={{ paddingTop: '70vh' }}>
          <center>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </center>
        </div>
      </div>
      <br></br>
      <br></br>

      <center>
        <div className='line'></div>
        <br></br>
        <p style={{ fontSize: '25px' }}>
          <i>
            " Money can buy you a fine dog, buy only love can make him wag his
            tail "
          </i>
        </p>
        <h4 style={{ textAlign: 'right', marginRight: '30%' }}>
          <i> ~ Kinky Friendman</i>
        </h4>
        <br></br>
        <div className='line'></div>
      </center>
      <br></br>
      <br></br>
      <PostBar />
      <PostLayout />
      <Footer />
    </div>
  );
}
export default Rout;
