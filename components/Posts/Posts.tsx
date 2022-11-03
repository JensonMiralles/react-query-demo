import PostItem from "./components/TodoItem"
import usePosts from "./hooks/usePosts"

const Posts = (): JSX.Element => {
  const { data: posts, isLoading } = usePosts()
  return (
    <div className="pt-8">
      <h1 className="text-3xl font-bold">Posts</h1>
      {isLoading && <div>Loading...</div>}
      <div className="flex flex-col space-y-8 mt-8">
        {posts && posts.map(post => (
          <PostItem key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
}

export default Posts
