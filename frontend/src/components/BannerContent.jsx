import '../styles/Banner.css';

function MainContent() {
  return (
    <div
      style={{
        marginLeft: '6%',
        color: 'white',
        fontFamily: ' Didact Gothic,sans-serif',
        position: 'absolute',
      }}>
      <h1 style={{ fontSize: '95px', marginTop: '5%' }}>Paws Adoption</h1>

      <h3>Everyone can pass by,but not everyone can stop and help.</h3>
      <h1>Adopt,don't shop.</h1>
      <p style={{ marginRight: '50%', fontSize: '21px' }}>
        We inspire and enpower communities to make difference in the lives of
        animals.Find your new best friend and give a pet a loving home.
      </p>
      <a
        href='#posts'
        className='btn btn-success btn-lg banner-btn'
        style={{ height: '8%', width: '20%' }}>
        Find a home
      </a>
    </div>
  );
}

export default MainContent;
