import { VFC, memo } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setEditedTask } from '../slices/todoSlice'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useMutateTask } from '../hooks/useMutateTask'
import { Task } from '../types/types'

interface Props {
  task: Task
}

const TaskItem: VFC<Props> = ({ task }) => {
  const dispatch = useAppDispatch()
  const { deleteTaskMutation } = useMutateTask()
  console.log('rendered TaskItem')
  if (deleteTaskMutation.isLoading) {
    return <p>Deleting...</p>
  }
  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <span>
        {' : '}
        {task.tag_name}
      </span>

      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedTask({
                id: task.id,
                title: task.title,
                tag: task.tag,
              })
            )
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteTaskMutation.mutate(task.id)
          }}
        />
      </div>
    </li>
  )
}
export const TaskItemMemo = memo(TaskItem)
