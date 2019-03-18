import React, { Component } from 'react';
import './App.css';
import './style.css';

class Aside extends Component {
  render() {
    return (
      <aside>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat
          illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius,
          accusamus, doloribus dolore at ipsum quaerat molestias.
        </p>
        <p>
          Explicabo consectetur tempora perferendis voluptas itaque, corporis at
          ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum
          fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda,
          saepe excepturi ad voluptatibus. Eveniet.
        </p>
        <img src="images/about.jpg" alt="" />
        <h3>Recent Issues</h3>
        <ul>
          <li>
            <a href="">Issue Nineteen &mdash; Camping</a>
          </li>
          <li>
            <a href="">Issue Eighteen &mdash; Food</a>
          </li>
          <li>
            <a href="">Issue Seventeen &mdash; Signs</a>
          </li>
          <li>
            <a href="">Issue Sixteen &mdash; Friends</a>
          </li>
          <li>
            <a href="">Issue Fifteen &mdash; Carnivals</a>
          </li>
          <li>
            <a href="">Issue Fourteen &mdash; Gatherings</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Aside;
