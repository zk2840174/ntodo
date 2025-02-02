
'use client'

import { postTodoAdd, refreshTodoList } from "@/app/lib/actions"

export default function AppPage () {

    const sendSubmit =  (e) => {
        
        e.preventDefault()
        
        console.log("click...send")
        

        const formData = new FormData(e.target)

        console.log("=========================")
        console.log(formData.get('title'))
        console.log(formData.get('writer'))

        const todoObj = {
            title: formData.get('title'),
            writer: formData.get('writer')
        }

        postTodoAdd(todoObj).then(result => {
            console.log(result)
            refreshTodoList()
            e.target.reset()
        })

    }

    return (
        <div>
            <div>
                Add Page
            </div>

            <div>

            </div>

            <form onSubmit={sendSubmit}>
                <div>
                    Title: <input type="text" name="title"></input>
                </div>
                <div>
                    Writer: <input type="text" name="writer"></input>
                </div>
                
                <div>
                    <button className="bg-red-100">Send</button>
                </div>
            </form>
            
        </div>   
    )

}