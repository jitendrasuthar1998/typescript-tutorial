import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type User = {
  id: string;
  name: string;
};

type fibFunc = (n:number) => number;

const fib: fibFunc = (n) => {
    if(n < 2) return n;

    return fib(n - 1) + fib(n - 2);
}

const myNum: number = 22;

const Hooks = () => {
  const [count, setCount] = useState<number>(0);

  const [users, setUsers] = useState<User[]>([]);

    const result = useMemo(()=> fib(myNum), [])

  useEffect(() => {
    setUsers([
      { name: "Jitendra", id: "1" },
      { name: "Jaya", id: "2" },
    ]);
  }, []);

  useEffect(() => {
    console.log("mounting");

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(()=> setCount(prev => prev + 2),[])

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef.current);
  console.log(inputRef.current?.value)

  return (
    <div>
      <p>{count}</p>
      <button onClick={addTwo}>+</button>
      <p>Fibonaci {result}</p>
      <input type="text" ref={inputRef}/>
    </div>
  );
};

export default Hooks;
