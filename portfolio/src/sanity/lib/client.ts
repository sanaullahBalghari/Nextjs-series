import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if you want fresh data
  token: process.env.SANITY_API_WRITE_TOKEN, // Add this line for write access
})