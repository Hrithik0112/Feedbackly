"use server"
import { db } from '@/db'
import { projects } from '@/db/schema'
import { currentUser } from '@clerk/nextjs/server'
import { url } from 'inspector'
import { redirect } from 'next/navigation'
import React from 'react'

export async function createProject(formData: FormData) {
     const user = await currentUser()
      const userId = user?.id

      console.log(userId)

      const project = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        userId: userId,
        url: formData.get('url') as string,
      }

      const [newProject] = await db.insert(projects).values(project).returning({ insertedId: projects.id })

      console.log(` New project created with ID: ${newProject.insertedId}`)
   redirect(`/projects/${newProject.insertedId}/instructions`);
}

