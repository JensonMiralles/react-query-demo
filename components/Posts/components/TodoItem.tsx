import { useState } from "react"
import Link from "next/link"
import { useQueryClient } from "@tanstack/react-query"

import Post from "@customTypes/post"
import { onFetchPost } from "@components/ViewPost/hooks/usePost"

type Props = {
  post: Post 
}

const PostItem = (props: Props): JSX.Element => {
  const { post } = props
  const [isPrefetching, setPrefetching] = useState(false)
  const [isPrefetched, setPrefetched] = useState(false)
  const queryClient = useQueryClient()
  const onPrefetch = () => {
    setPrefetching(true)
    //simulate longer loading times...
    setTimeout(async() => {
      console.log('ASD')
      await queryClient.prefetchQuery(['post', post.id.toString()], () => onFetchPost(post.id.toString()))
      setPrefetched(true)
    }, 1500)
  }
  return (
    <div className={`p-8 border rounded-lg flex justify-between ${isPrefetched ? 'border-green-500' : 'border-white'}`} onMouseEnter={onPrefetch}>
      <div>
        <div className="text-xl font-bold">{post.title}</div>
        <div className="w-96">{post.body}</div>
        <div className="mt-4">
          isPrefetching: <span className={`font-bold ${isPrefetching ? 'text-green-500' : 'text-orange-500'}`}>{isPrefetching.toString()}</span>
        </div>
      </div>
      <Link href={`/posts/${post.id}`} className="text-blue text-blue-500 font-bold">
        View
      </Link>
    </div>
  )
}

export default PostItem
