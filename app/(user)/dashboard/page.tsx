import NewProjBtn from '@/components/new-project'
import { db } from '@/db'
import { projects } from '@/db/schema'
import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './project-list'
import { getSubscription } from '@/app/actions/userSubscriptions'
import { maxFreeProjects } from '@/lib/payment'

const  Page = async() => {

  
const user = await currentUser()
const userId = user?.id

if (!userId) {
    return null
}

const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));


 const subscribed = await getSubscription({ userId });
return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>{subscribed !== true && userProjects.length > maxFreeProjects ? null : <NewProjBtn />}
      </div><ProjectsList projects={userProjects} subscribed={subscribed} /></div>
  )
}

export default Page