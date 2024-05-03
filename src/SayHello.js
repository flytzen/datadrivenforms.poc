import React from 'react';
import { useEffect, useState } from 'react';

function SayHello() {
  const [data, setData] = useState('...');
  useEffect(() => {
    (async function () {
      const a = await fetch(`/api/SayHello`);
      const text = await a.text();
      setData(text);
    })();
  });
  
  return <div>Hello {data}!</div>;
}

export default SayHello;
