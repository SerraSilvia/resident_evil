import React from 'react';
import Lesson from './Lesson';

class Menu extends React.Component {
  render() {
    const lessonList = [
      {
        id: 1,
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: "How a website looks is created using languages such as HTML and CSS. Let study these languages while actually creating a website!",
      },
      {
        id: 2,
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'Sass is a language for making CSS more convenient and efficient.',
      },
      {
        id: 3,
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScript is a versatile language used anywhere from interactive websites to backend servers.',
      },
      {
        id: 4,
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'React is a JavaScript library used to make the appearance of a website like HTML.',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello World</h1>
            <h2>Welcome to the world of programming!</h2>
          </div>
          <div className='lesson-container'>
            <h3>Lessons</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson 
                  key={lessonItem.id} 
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;