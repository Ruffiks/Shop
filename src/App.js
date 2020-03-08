import React from 'react';
import './App.scss';

function App(){
  return(
    <div>
    <header>
    <h1>Ruffiks's company</h1>
    <p>Пошив Одежды</p>
    <nav>
    <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/">О компании</a></li>
    <li><a href="/">Услуги</a></li>
    <li><a href="/">Отзывы о нас</a></li>
    <li><a href="/">Контакты</a></li>
    </ul>
    </nav>
    </header>
    <main>
    <h2>Наши услуги</h2>
    <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
      <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
      <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product"/>
    <h3>Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
    </main>
    </div>
  );
}
export default App;
