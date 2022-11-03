import usePost from "./hooks/usePost"
import useRemovePost from "./hooks/useRemovePost"

const ViewPost = (): JSX.Element => {
  const { data, isLoading } = usePost()
  const { mutate, isLoading: isDeleting, isSuccess } = useRemovePost()
  const onClickDelete = () => {
    //additional logic here...
    mutate()
  }
  if(isLoading) return  <div className="mt-8 text-3xl">Loading...</div>
  return (
    <div className="mt-8">
      <div className="font-bold text-xl">
        {data?.title}
      </div>
      <div className="text-gray-300 mt-2">
        {data?.body}
      </div>
      <div className="mt-4">
        {!isSuccess ? (
          <button className="text-rose-500 font-bold" onClick={onClickDelete}>
            {isDeleting ? 'Removing...' : 'Remove'}
          </button>
        ) : <div className="font-bold text-green-500">Removed</div>}
      </div>
    </div>
  )
}

export default ViewPost
