import { useCallback, useEffect, useReducer } from 'react'

interface State<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export enum FETCH_TYPES {
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

type Action<T> =
  | { type: FETCH_TYPES.FETCH_SUCCESS; payload: T }
  | { type: FETCH_TYPES.FETCH_FAILURE; payload: string }

function reducer<T>(state: State<T>, { type, payload }: Action<T>): State<T> {
  switch (type) {
    case FETCH_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      }
    case FETCH_TYPES.FETCH_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

interface UseFetchParams<T> {
  url: string
  doneCB?: (data: T) => void
  failCB?: (err: string) => void
}

const initialState = {
  data: null,
  loading: true,
  error: null,
}

export function useFetch<T>({ url, doneCB, failCB }: UseFetchParams<T>) {
  const [state, dispatch] = useReducer<State<T>, [Action<T>]>(
    reducer,
    initialState
  )

  const fetchData = useCallback(async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_TYPES.FETCH_SUCCESS, payload: data })
        doneCB && doneCB(data)
      })
      .catch((err) => {
        dispatch({ type: FETCH_TYPES.FETCH_FAILURE, payload: err.message })
        failCB && failCB(err.message)
      })
  }, [url, doneCB, failCB])

  useEffect(() => {
    fetchData()
  }, [url])

  return { ...state, update: fetchData }
}
