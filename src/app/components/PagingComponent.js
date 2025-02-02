import Link from "next/link";


const makeArray = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);


const PagingComponent = ({pagingData, targetPath}) => {

    const {start, end, page, prev, next, total, size} = pagingData


    return (
        <>
            <ul className="flex justify-center text-center m-1 p-1" >
                {prev &&
                <li className="flex justify-center text-center p-1">
                    <Link href={`${targetPath}?page=${start -1 }&size=${size}`}>Prev</Link>
                </li>
                }
                
                {makeArray(start, end).map(page =>
                    <li key={page} className="flex justify-center text-center m-1 p-1 border-2 border-cyan-400">
                      <Link href={`${targetPath}?page=${page}&size=${size}`}>{page}</Link>
                    </li>
                )}

                {next &&
                <li className="flex justify-center text-center p-1">
                    <Link href={`${targetPath}?page=${end + 1 }&size=${size}`}>Next</Link>
                </li>
                }

            </ul>
        </>
    )

}

export default PagingComponent