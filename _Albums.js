import React from 'react';
import UseFetch from './_useFetch';

function Albums() {
  const res = UseFetch('https://jsonplaceholder.typicode.com/albums', {});

  if (res.error) return <div className><h3>Error: </h3><p>{res.error.message}</p></div>;
  if (!res.items) return <div className='loader'>loading...</div>;

  return (
    <div>
      <ul>
      {res.items.map(item => {
        const {id, userId, title} = item;
        return (
          <li key={id}>
            <p>{title} : {userid}</p>
          </li>
        )}
      )}
      </ul>
    </div>
  );
}

export default Albums;
