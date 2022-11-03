import { useMutation  } from '@tanstack/react-query'

import { deleteOpt } from '@utils/client'
import Post from '@customTypes/post'
import { useRouter } from 'next/router'

const useRemovePost = () => {
  const { query, back } = useRouter()
  const onFetchPost = async (): Promise<Post> => deleteOpt(`/posts/${query.postId}`)

  const data = useMutation(onFetchPost, {
    onSuccess: () => {
      // success logic here...
      setTimeout(() => {
        back()
      }, 1500)
    },
    onError: () => {
      // error logic here...
    }
  })
  return data
}

export default useRemovePost