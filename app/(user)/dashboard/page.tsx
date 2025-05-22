import NewProjBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'

const  Page = async() => {

  const allprojects = await db.select().from(projects)

  const user = await currentUser()
  const userId = user?.id

  console.log(allprojects)
  console.log(userId)
  return (
    <div>
        <NewProjBtn />
    </div>
  )
}

export default Page