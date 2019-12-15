import React from 'react';

function logo() {
  const url = 'https://github.com/wniedzwiedz/dogger/blob/master/src/logo.png?raw=true';
  return (
    <img src={url} style={{width: 350}} alt='Image' />
  );
}

export default logo;