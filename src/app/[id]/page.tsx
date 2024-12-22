/* eslint-disable @typescript-eslint/no-explicit-any */
const  DynamicTodos = async (props:any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    console.log(props)
     const response = await url.json()
     console.log("Single todos",response)
return (
    <h1 className="text-7xl"> {response && response.name ? response.name.id : 'Loading...'} </h1>
)
} 
export default DynamicTodos