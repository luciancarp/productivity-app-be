import { Schema } from 'mongoose'
import Project from '../models/Project'

export const getAllProjects = async () => {
  try {
    const allProjects = await Project.find()
    return allProjects
  } catch (error) {
    console.log(`Could not fetch Projects ${error}`)
  }
}

export const createProject = async (data: {
  title: string
  user: Schema.Types.ObjectId
}) => {
  try {
    const newProject = {
      title: data.title,
      user: data.user,
    }
    const response = await new Project(newProject).save()
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getProjectbyId = async (projectId: string) => {
  try {
    const singleProjectResponse = await Project.findById({ _id: projectId })
    return singleProjectResponse
  } catch (error) {
    console.log(`Project not found. ${error}`)
  }
}

//TODO updateProject

export const deleteProject = async (projectId: string) => {
  try {
    const deletedResponse = await Project.findOneAndDelete({ _id: projectId })
    return deletedResponse
  } catch (error) {
    console.log(`Could not delete Project ${error}`)
  }
}

export default {
  getAllProjects: getAllProjects,
  createProject: createProject,
  getProjectbyId: getProjectbyId,
  deleteProject: deleteProject,
}
