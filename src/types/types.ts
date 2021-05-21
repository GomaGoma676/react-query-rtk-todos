export interface Task {
  id: number
  title: string
  tag: number
  tag_name: string
  created_at: string
  updated_at: string
}
export interface EditTask {
  id: number
  title: string
  tag: number
}
export interface Tag {
  id: number
  name: string
}
