"use server";

import { revalidatePath } from "next/cache";

export async function refreshTodoList() {
  revalidatePath("/todo/list");
}

export async function postTodoAdd (todo) {


    const res = await fetch("http://localhost:8080/api/v1/todos", {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(todo)

    })

    return res.json()


}


