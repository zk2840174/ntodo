
import PagingComponent from "@/app/components/PagingComponent";
import Link from "next/link";
import SearchComponent from "@/app/components/SearchComponent";


export const dynamic = 'force-dynamic'

export const makeQueryString = (params) => {

  let queryString = "";

  queryString += `?page=${params.page || 1}`;

  queryString += `&size=${params.size || 10}`;

  if(params.type && params.keyword) {
    queryString += `&type=${params.type }&keyword=${params.keyword}`;
  }
  return queryString

}

export default async function TodoListPage({searchParams}) {

  const {page, size, type, keyword}  =  (await searchParams)

  try {

    const url = 'http://localhost:8080/api/v1/todos/list' + makeQueryString({page,size,type,keyword})

    const res = await fetch(url);


    if (!res.ok) {
      throw new Error('Failed to fetch todos');
    }

    const responseDTO = await res.json();
    const todos = await responseDTO.dtoList;

    return (
      <>

        <SearchComponent typeStr={type} keywordStr ={keyword} page={page} size={size}></SearchComponent>

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