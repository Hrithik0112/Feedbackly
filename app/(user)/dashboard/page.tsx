import NewProjBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'

const  Page = async() => {

  const allprojects = await db.select().from(projects)

  console.log(allprojects)
  return (
    <div>
        <NewProjBtn />
    </div>
  )
}

export default Page