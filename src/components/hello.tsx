import React from 'react';

interface Greeting {
  name: string
}
export default function Hello(props: Greeting) {
  return <div>hello {props.name}, welecome to use typescript</div>
}