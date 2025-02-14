const API_URL = process.env.API_URL

export const API_V1 = `${API_URL}/api/v1`

export const API_ROUTES = {
  todos: `${API_V1}/todos?limit=10`,
}

export { useFetch } from './useFetch'
