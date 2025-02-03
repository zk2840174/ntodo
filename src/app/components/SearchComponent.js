'use client'

import {useState} from "react";
import { useRouter,useSearchParams   } from "next/navigation";
import {makeQueryString} from "@/app/todo/list/page";


export default function SearchComponent() {

    const searchParams = useSearchParams()

    const [type, setType] = useState(searchParams.get("type") ||'');
    const [keyword, setKeyword] = useState(searchParams.get("keyword") || '');

    const page = searchParams.get("page")
    const size = searchParams.get("size")

    const router = useRouter();


    return (
        <div>
            <div>Search</div>

            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value=''>----</option>
                <option value='t'>제목</option>
            </select>

            <input type='text' value={keyword} onChange={event => setKeyword(event.target.value)} />

            <button className='border-2 bg-blue-500' type='button' onClick={() => {

                const queryString = makeQueryString({type,keyword, size});

                router.push('/todo/list'+queryString)

            }}>Search</button>

            <button className='border-2 bg-blue-500' type='button' onClick={() => {
                const queryString = makeQueryString({ size});
                router.push('/todo/list'+queryString)

                setType('')
                setKeyword('')

            }}>Reset</button>


        </div>
    )

}