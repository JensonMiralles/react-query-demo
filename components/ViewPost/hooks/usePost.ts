import { useQuery  } from '@tanstack/react-query'

import { get } from '@utils/client'
import Post from '@customTypes/post'
import { useRouter } from 'next/router'

export const onFetchPost = async (postId: string): Promise<Post> => get(`/posts/${postId}`)

const usePost = () => {
  const { query } = useRouter()
  const data = useQuery({
    queryKey: ['post', query.postId],
    queryFn: () => onFetchPost(query.postId?.toString() || ''),
    onSuccess: () => {
      // success logic here...
    },
    onError: () => {
      // error logic here...
    }
  })
  return data
}

export default usePost