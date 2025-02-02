import Link from "next/link";


export default function TodoLayout ({children}) {

    return (

        <div>

            <div className="flex justify-center text-center ">

                <div className="text-2xl m-4">
                  <Link href={'/todo/list'}>List</Link>   
                </div>
                
                <div className="text-2xl m-4">
                <Link href={'/todo/add'}>  Add </Link>
                </div>
                
            </div>

            <div>
                {children}
            </div>
        </div>

    )

}