import { ReactNode } from "react";

// const Counter = () => {

//   const [count, setCount] = useState<number>(1);

//   return (
//     <>
//     <h2>Count is {count}</h2>
//     <button onClick={()=> setCount(prevCount => prevCount + 1)}>+</button>

//     <button onClick={()=> setCount(prevCount => prevCount - 1)}>-</button>
//     </>
//   )
// }

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({setCount, children}: CounterProps) => {

  return (
    <>
      <h2>{children}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </>
  );
};

export default Counter;
