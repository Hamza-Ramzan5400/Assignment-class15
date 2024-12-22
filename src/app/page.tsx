/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */

import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((todos: any) => (
          <div>
           
            <Link href={`${todos.id}`}>
              <h1 className="text-7xl">
                {todos.name}  {todos.id}
              </h1>
            </Link>
          </div>
        ))
      }
    </main>
  );
}