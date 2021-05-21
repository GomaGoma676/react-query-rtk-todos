import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { TagListMemo } from './TagList'
import { TagEditMemo } from './TagEdit'

export const MainTag: VFC = () => {
  const history = useHistory()
  console.log('rendered MainTag')
  return (
    <>
      <p className="mb-10 text-xl font-bold">Tags</p>

      <div className="grid grid-cols-2 gap-40">
        <TagListMemo />
        <TagEditMemo />
      </div>

      <ChevronDoubleLeftIcon
        onClick={() => history.push('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p>Task page</p>
    </>
  )
}
