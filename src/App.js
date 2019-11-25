import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Slider from './components/NetflixSlider'
import Dashboard from './Dashboard';


const movies = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    imageBg: '/images/slide1b.webp',
    title: "The result will be a project folder named image_slide."
  },
  {
    id: 2,
    image: '/images/slide2.jpg',
    imageBg: '/images/slide2b.webp',
    title: 'The project folder should .'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    imageBg: '/images/slide3b.webp',
    title: 'The rain',
  },
  {
    id: 4,
    image: '/images/slide4.jpg',
    imageBg: '/images/slide4b.webp',
    title: 'Sex education'
  },
  {
    id: 5,
    image: '/images/slide5.jpg',
    imageBg: '/images/slide5b.webp',
    title: 'Elite'
  },
  {
    id: 6,
    image: '/images/slide6.jpg',
    imageBg: '/images/slide6b.webp',
    title: 'Black mirror'
  }
];


class App extends Component {
  render() {
  return (
    <div className="App">

<Dashboard />


      <h1>Clubs</h1>
      <Slider>
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
        ))}
      </Slider>

        <h1>Activity</h1>
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
    </div>
  );
}
}

export default App;
