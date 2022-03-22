import { Summary } from "../Summary"

export default function Main({summary}) {
  return (
    <main className="container">
        <section>
            <Summary summary={summary}/>
        </section>
    </main>
  )
}
