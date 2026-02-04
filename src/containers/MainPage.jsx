import { useState, useEffect } from 'react';
import styles from '../styles/MainPage.module.css';
import image from '../assets/image.jpg';

function MainPage() {
  const [count, setCount] = useState(0);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    console.log('Компонент смонтирован или обновлён');

    return () => {
      console.log('Компонент размонтирован');
    };
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <h1>MainPage</h1>

      {/* КНОПКА */}
      <button onClick={handleClick}>
        Нажали {count} раз
      </button>

      {/* Условный рендеринг */}
      <button onClick={() => setShowList(!showList)}>
        Показать / скрыть список
      </button>

      {showList && (
        <ul>
          <li>Элемент 1</li>
          <li>Элемент 2</li>
          <li>Элемент 3</li>
        </ul>
      )}

      {/* IMG */}
      <img src={image} alt="Пример" width="200" />

      {/* Фон */}
      <div className={styles.backgroundBox}>
        Блок с background-image
      </div>
    </div>
  );
}

export default MainPage;
