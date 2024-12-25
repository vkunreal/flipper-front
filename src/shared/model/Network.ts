export interface FetchResponse<T> {
  prev: string | null
  next: string | null
  count: number
  data: T
}
