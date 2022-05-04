import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import { API_ROOT } from '../api-config';

const PostBar = () => {
  const { user } = useContext(UserContext);
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState('');
  const [num, setNum] = useState(0);
  const [vacc, setVacc] = useState(true);

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post(`${API_ROOT}/post`, {
        username: user,
        city: city,
        url: image,
        content: info,
        mobile: num,
        vac: vacc,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let btn;
  if (user) {
    btn = (
      <button
        type='button'
        class='btn btn-outline-black btn-nav'
        data-bs-toggle='modal'
        data-bs-target='#addModal'>
        Add Post
      </button>
    );
  }
  return (
    <div className='container-fluid'>
      {btn}
      <div
        class='modal fade'
        id='addModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Add new post
              </h5>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <form method='POST' onSubmit={submitHandle}>
              <div class='modal-body'>
                <label class='form-label' for='name'>
                  City:
                </label>
                <input
                  class='form-control'
                  type='text'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <label class='form-label' for='url'>
                  Image URL:
                </label>
                <input
                  class='form-control'
                  type='text'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <br />
                <label class='form-label' for='caption'>
                  Info:
                </label>
                <textarea
                  class='form-control'
                  type='text'
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
                <label class='form-label' for='caption'>
                  Contact Number:
                </label>
                <input
                  class='form-control'
                  type='number'
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
                <div class='form-check form-switch'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckDefault'
                    value={vacc}
                    onChange={(e) => setVacc(e.target.checked)}
                  />
                  <label class='form-check-label' for='flexSwitchCheckDefault'>
                    Vaccinated
                  </label>
                </div>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-outline-secondary'
                  data-bs-dismiss='modal'>
                  Close
                </button>
                <button
                  type='submit'
                  class='btn btn-outline-success'
                  data-bs-dismiss='modal'
                  onClick={submitHandle}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBar;
