import React, { useState, useEffect } from 'react';

interface Greeting {
  firstName: string,
  lastName: string,
  name: string,
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    if(count > 5) setText('休息一下')
  })

  return (
    <div>
      <p>你点击了{count}次，{text}</p>
      <button onClick={() => {setCount(count + 1)}}>hello, {props.name}</button>
    </div>
  )
}
HelloHooks.defaultProps = {
  firstName: '',
  lastName: '',
}

export default HelloHooks;