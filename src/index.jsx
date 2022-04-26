import '../assets/stylesheets/application.css';

import React from 'react';
import ReactDom from 'react-dom/client';

import App from './components/App';

const root = document.getElementById('root');

ReactDom.createRoot(root).render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom';

// import '../assets/stylesheets/application.scss';

// import App from './components/App';

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<App />, root);
// }
