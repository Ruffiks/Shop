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
    <h2>Наши товары</h2>
    <div className="first_product">
    <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product" className="photo1"/>
    <h3 className="name1">Маленькое черное платье</h3>
      <span className="price">₽ 1999</span>
      <a href="" className="button">В корзину</a>
      </div>
      <div className="second_product">
  <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product" className="photo2"/>        {/* products */}
    <h3 className="name2">Маленькое черное платье</h3>
      <span className="price1">₽ 1999</span>
      <a href="" className="button1">В корзину</a>
      </div>
      <div className="third_product">
  <img src="https://html5book.ru/wp-content/uploads/2015/10/black-dress.jpg" alt="product" className="photo3"/>        
    <h3 className="name3">Маленькое черное платье</h3>
      <span className="price2">₽ 1999</span>
      <a href="" className="button2">В корзину</a>      {/* in the cart */}
      </div>     
    </main>
    <footer>
    <p>this site created by Ruffiks</p>
    <p>Author: ruffiks :)</p>
    </footer>
    </div>
  );
}
export default App;
