import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ marginTop: '40px', minHeight: '60vh' }}>
      <h2>About This Todo List App</h2>
      <p style={{ fontSize: '1.1em', marginTop: '20px' }}>
        This is a simple and modern Todo List application built with React. It allows you to:
      </p>
      <ul style={{ fontSize: '1.05em' }}>
        <li>Add new tasks to your todo list</li>
        <li>Delete tasks you no longer need</li>
        <li>See a beautiful, responsive UI with a professional footer</li>
      </ul>
      <p style={{ marginTop: '20px' }}>
        The app demonstrates the use of React functional components, hooks (<code>useState</code>), component composition, and React Router for navigation. It is a great starting point for learning React and building your own productivity tools!
      </p>
      <p style={{ color: '#888', marginTop: '30px' }}>
        &copy; {new Date().getFullYear()} Todo List App. All rights reserved.
      </p>
    </div>
  );
};

export default About;
