import React from 'react';
import './App.scss';

function App(){
  return(
    <div>
    <header>    {/* header */}
  <h1>Ruffiks's company</h1> {/* Name of company */}
    <p>Пошив Одежды</p>       
    <nav>     {/* navigation bar  */}
    <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/">О компании</a></li>
    <li><a href="/">Услуги</a></li>
    <li><a href="/">Отзывы о нас</a></li>
    <li><a href="/">Контакты</a></li>
    </ul>
    </nav>
    </header>
    <main>    {/* main content */}
    <h2>Наши услуги</h2>
    <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
  <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>        {/* products */}
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
  <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>        
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>     {/* in the stash */}
    </main>
    </div>
  );
}
export default App;
