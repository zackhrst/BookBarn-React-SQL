import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout';
import BookList from './components/BookList';
import Home from './components/Home'
import BookListPage from './components/BookListPage';
import AddBookPage from './components/AddBookPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/books" component = {BookListPage} />
          <Route path = "/add-book" component = {AddBookPage} />

        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
