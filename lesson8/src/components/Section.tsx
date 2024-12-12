import { ReactNode } from 'react'

// const Section:React.FC<{title:string}> = ({title, children}) => {
//   return (
//     <section>
//         <h2>{title}</h2>
//     </section>
//   )
// }

type SectionProps = {
    title?:string;
    children:ReactNode
}

const Section = ({title = "Hello Jaya", children}: SectionProps) => {
    return (
      <section>
          <h2>{title}</h2>
          <p>{children}</p>
      </section>
    )
  }
  
export default Section