import n from '../images/vet.png';
import '../styles/Vet.css';
import Logo from '../images/logo.png';

function Vet() {
  return (
    <div>
      <center>
        <span class='a'>
          <img src={Logo} alt='Logo' />
        </span>
        <h1>Our Vet's</h1>

        <table class='table table-light table-hover table-bordered '>
          <thead>
            <tr>
              <th scope='col'>Serial No</th>
              <th scope='col'>Vet's Name</th>
              <th scope='col'>City</th>
              <th scope='col'>Contact no</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Dr Priyansh Sharma</td>
              <td>Noida</td>
              <td>+91-99191-03001</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Dr Utkarsh Dixit</td>
              <td>Delhi </td>
              <td>+91-99191-03002</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Dr Shreyas</td>
              <td>Faridabad</td>
              <td>+91-99191-03003</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Dr Yasha Jafri</td>
              <td>Lucknow</td>
              <td>+91-99191-03004</td>
            </tr>
            <tr>
              <th scope='row'>5</th>
              <td>Dr Prateek Vats</td>
              <td>Mumbai</td>
              <td>+91-99191-03005</td>
            </tr>
            <tr>
              <th scope='row'>6</th>
              <td>Dr Kaustubh Singh</td>
              <td>Jaipur </td>
              <td>+91-99191-03006</td>
            </tr>
            <tr>
              <th scope='row'>7</th>
              <td>Dr Satyam Chaubey</td>
              <td>Kanpur</td>
              <td>+91-99191-03008</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <h1>Online Consultation</h1>
        <p>For online consultation go to </p>

        <a href='clinic'>
          <img src={n} alt='n' class='n' />
        </a>
      </center>
      <br></br>
    </div>
  );
}

export default Vet;
