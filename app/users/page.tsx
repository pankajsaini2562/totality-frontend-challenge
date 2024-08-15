import React from 'react'
interface User {
  id:string;
  name:string;
}

const page =async () => {
  const response  =  await fetch('https://jsonplaceholder.typicode.com/users')
  const  users:User[]  =  await response.json()
  return (
    <>
    <h1 className='text-2xl'>Users</h1>
    <ul>
      {users.map(user => <li key={user.id} >{user.name}</li>)}
    </ul>
    </>
  )
}

export default page
