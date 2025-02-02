
import PagingComponent from "@/app/components/PagingComponent";
import Link from "next/link";


export const dynamic = 'force-dynamic'

export default async function TodoListPage({searchParams}) {

  const {page, size}  =  (await searchParams)

  try {
    const res = await fetch(`http://localhost:8080/api/v1/todos/list?page=${page || 1}&size=${size || 10}`, {next: {revalidate: 60}});
    
    console.log("generated..............")

    if (!res.ok) {
      throw new Error('Failed to fetch todos');
    }

    const responseDTO = await res.json();
    const todos = await responseDTO.dtoList;

    return (
      <>
      <ul>
        {todos.map(todo => (
          <li key={todo.tno}>
            <Link href={`/todo/${todo.tno}`}>
              {todo.tno} -- {todo.title}
            </Link>
          </li>
        ))}
      </ul>

      <div>

        <PagingComponent pagingData={responseDTO} targetPath={'/todo/list'} ></PagingComponent>

      </div>  

    </>  
    );
  } catch (error) {
    console.error('Error fetching todos:', error);
    return <p>Error loading todos. Please try again later.</p>;
  }
}