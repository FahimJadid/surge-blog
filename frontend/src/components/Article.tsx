import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
// import { BookmarkIcon, MessageCircle, Share2, ThumbsUp } from 'lucide-react'

interface Blog {
    title: string
    author: {
        name: string
        username: string
    }
    content: string
}

export default function Article({ blog }: { blog: Blog }) {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>
          <AvatarImage src={blog.author.username} alt={blog.author.name} />
          <AvatarFallback>{blog.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{blog.author.name}</p>
          <p className="text-sm text-gray-500">{blog.author.username}</p>
        </div>
        <Separator orientation="vertical" className="h-8" />
        {/* <div className="text-sm text-gray-500">
          <p>{blog.date} · {blog.readTime}</p>
          <p>{post.views.toLocaleString()} views</p>
        </div> */}
      </div>

      <img 
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blog post cover" 
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <div 
        className="prose max-w-none mb-8"
      />
      <p>{blog.content}</p>

      {/* <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="mr-2 h-4 w-4" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageCircle className="mr-2 h-4 w-4" />
            {post.comments}
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <BookmarkIcon className="mr-2 h-4 w-4" />
            {post.bookmarks}
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div> */}

      <Separator className="mb-8" />

    </div>
  )
}