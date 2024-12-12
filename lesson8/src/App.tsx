import { useState } from "react";
import Counter from "./components/Counter"
import { Heading } from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List";
import Hooks from "./components/Hooks";


function App() {
  
  const [count, setCount] = useState<number>(1);

  return (
    <>
    {/* <Heading title="Hello Jitendra"/>
    <Section title="Hello Jaya! Do you love me?">
      Jitendra wants to propose you.
    </Section>

    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(item: string) => <span className="gold">{item}</span>} /> */}

    <Hooks/>
    </>
  )
}

export default App
