import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import '../styles/Home.css';
import { Link } from '@material-ui/core';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Ernesto </h2>
        <div className='prompt'>
          <p>
            A software developer with a passion for learning, creating and improving my work
          </p>
          <Link href='https://www.linkedin.com/in/ernestobp/'>
            <LinkedInIcon />
          </Link>
          <Link href='https://github.com/ebastidasp'>
            <GitHub />
          </Link>
        </div>
      </div>
      <div className='skills'>
        <h1>
          Skills
        </h1>
        <ol className='list'>
          <li className='item' >
            <h2>Front-End</h2>
            <span>
              React.js, React Native, Android Studio, Bootstrap, HTML, CSS, TailwindCSS, Styled components.
            </span>
          </li>
          <li className='item' >
            <h2>Back-End</h2>
            <span>
              Node.js, PHP, Java, MySQL, MongoDB, AWS, GraphQL.
            </span>
          </li>
          <li className='item' >
            <h2>Languages</h2>
            <span>
              C, C++, Python, Java, Javascript, Typescript, PHP, SQL.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;