import NewProjBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './project-list'

const  Page = async() => {

  
const user = await currentUser()
const userId = user?.id

if (!userId) {
    return null
}

console.log(userId);
const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));
console.log(userProjects);
return (
    <div>
        <NewProjBtn />
        <h1 className="text-2xl font-bold">Your Projects</h1>
        <ProjectsList projects={userProjects} />
    </div>
  )
}

export default Page