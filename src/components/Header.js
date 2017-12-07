import React from 'react';
import '../styles/Header.css';

const background = 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjCzYuA3unXAhUD8mMKHUoiDEsQjRwIBw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar&psig=AOvVaw3Tmno_FFkNMcN-LybYXCvu&ust=1512249355097320';

const styles = {
	headerStyle: {
		backgroundImage: `url(${background})`
	}
}

const Header = () => (

  <header className="header">
    <h1>click game</h1>
  </header>

);

export default Header;

