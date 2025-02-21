function App() {
  return <div className="wrapper">
    <header>
      <div className="headerLeft">
        <img className="logo-img" src="/images/logo-img.png" />
        <div className="hederInfo">
          <h3 className="logo-name">React Sneakers</h3>
          <p>Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <img className="cart-img" src="/images/cart.svg" />
          <span> 1205 грн.</span>
        </li>
        <li>
          <img className="like-img" src="/images/like.svg" />
          <span> Закладки</span>
        </li>
        <li>
          <img className="user-img" src="/images/user.svg" />
          <span> Профіль</span>
        </li>
      </ul>
    </header>
    <div className="contert">
      <h1>Всі кросівки</h1>
    </div>
  </div>
}

export default App;
