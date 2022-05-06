import axios from 'axios';
import { Component } from 'react';
import Post from './Post';
import { API_ROOT } from '../api-config';

class PostLayout extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    axios.get(`${API_ROOT}/post`).then((res) => {
      console.log(res.data);
      this.setState({ list: res.data });
    });
  }
  render() {
    return (
      <div className='container-fluid' id='posts'>
        <div className='row'>
          {this.state.list.map((item) => {
            return (
              <Post
                key={item.id}
                user={item.username}
                city={item.city}
                url={item.url}
                content={item.content}
                mobile={item.mobile}
                vac={item.vac}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostLayout;
