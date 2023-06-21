import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author="Neander de Souza"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      
      <Post
        author="John Doe"
        content="Um novo post muito legal"
      />
    </div>
  )
}
