import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={()=>handleClick('en')}>English</p>
        <p onClick={()=>handleClick('ko')}>Korean</p>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{t('Language.1')}</p>
        <p>{t('Summary.1')}</p>

      </header>
    </div>
  );
}

export default App;
