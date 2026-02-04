import { useEffect, useState } from 'react';
import Avatar from './Avatar';

function UserProfile({ name }) {
  const [count, setCount] = useState(0);

  // МОНТИРОВАНИЕ + РАЗМОНТИРОВАНИЕ
  useEffect(() => {
    console.log('UserProfile mounted');

    return () => {
      console.log('UserProfile unmounted');
    };
  }, []);

  // ОБНОВЛЕНИЕ
  useEffect(() => {
    console.log('UserProfile updated');
  }, [count]);

  return (
    <div>
      <h3>{name}</h3>
      <Avatar />

      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
    </div>
  );
}

export default UserProfile;
