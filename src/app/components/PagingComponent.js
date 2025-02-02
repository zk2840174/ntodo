import Link from "next/link";


const makeArray = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);


const PagingComponent = ({pagingData, targetPath}) => {

    const {start, end, page, prev, next, total, size} = pagingData


    return (
        <>
            <ul>
                {prev ?? 
                <li>
                    prev
                </li>
                }
                
                {makeArray(start, end).map(page => <li key={page}> 
                    <Link href={`${targetPath}?page=${page}&size=${size}`}>{page}</Link>
                </li>
                )}

                {next ?? 
                <li>
                    next
                </li>
                }

            </ul>
        </>
    )

}

export default PagingComponent