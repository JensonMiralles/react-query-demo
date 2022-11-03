import { useQuery  } from '@tanstack/react-query'

import { get } from '@utils/client'
import Post from '@customTypes/post'

//types will now be inherited on our usePost hook
const onFetchPosts = async (): Promise<Post[]> => get('/posts')

const usePosts = () => {
  const data = useQuery({
    queryKey: ['posts'],
    queryFn: onFetchPosts,
    onSuccess: () => {
      // success logic here...
    },
    onError: () => {
      // error logic here...
    }
  })
  return data
}

export default usePosts