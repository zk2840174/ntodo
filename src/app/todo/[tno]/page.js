export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams(context) {

    console.log('Generating dynamic params generateStaticParams')

    const response = await fetch('http://localhost:8080/api/v1/todos/list?size=10').then((res) =>
        res.json()
    )
    return response.dtoList.map((todo) => ({
        tno: String(todo.tno),
    }))
}

export default  async function  ReadPage ({params}) {

    const {tno} = await params

    console.log("tno: " + tno)

    const todo = await fetch(`http://localhost:8080/api/v1/todos/${tno}`, {next: {revalidate: 20}}).then((res) =>
        res.json()
    )
    return (
        <main>
            <p>{todo.tno}</p>
            <h1>{todo.title}</h1>
            <p>{todo.writer}</p>
        </main>
    )


}