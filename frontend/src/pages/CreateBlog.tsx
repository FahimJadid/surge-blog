// import { Separator } from "@/components/ui/separator"
// import { BookmarkIcon, MessageCircle, Share2, ThumbsUp, Upload } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CreatePostInput } from "@fahimaljadid/surge-common";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { BACKEND_URL } from '@/config'

export default function CreateBlog() {
  const navigate = useNavigate();

  const initialState: CreatePostInput = {
    title: '',
    content: '',  
  }

  const [postInputs, setPostInputs] = useState<CreatePostInput>(initialState);

  const sendRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        postInputs,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        const {id} = response.data;
        setPostInputs(initialState);
        navigate(`/blog/${id}`);

    } catch (error) {
      alert(`Error while creating blog post`);
    }
  };


  // const [post, setPost] = useState({
  //   title: '',
  //   author: {
  //     name: '',
  //     avatar: '/placeholder.svg?height=50&width=50',
  //     username: ''
  //   },
  //   date: new Date().toISOString().split('T')[0],
  //   readTime: '',
  //   content: '',
  //   image: '/placeholder.svg?height=400&width=800'
  // })

  // const [previewMode, setPreviewMode] = useState(false)

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   if (name.includes('.')) {
  //     const [parent, child] = name.split('.')
  //     setPost(prev => ({
  //       ...prev,
  //       [parent]: {
  //         ...prev[parent],
  //         [child]: value
  //       }
  //     }))
  //   } else {
  //     setPost(prev => ({ ...prev, [name]: value }))
  //   }
  // }

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setPost(prev => ({ ...prev, image: reader.result as string }))
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Here you would typically send the post data to your backend
  //   console.log('Submitting post:', post)
  //   // Reset form or redirect to the new post page
  // }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create a New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={postInputs.title}
                onChange={(e) =>
                  setPostInputs({
                    ...postInputs,
                    title: e.target.value,
                  })
                }
                placeholder="Enter your blog post title"
                required
              />
            </div>
{/* 
            <div className="space-y-2">
              <Label htmlFor="author.name">Author Name</Label>
              <Input
                id="author.name"
                name="author.name"
                value={post.author.name}
                // onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div> */}
{/* 
            <div className="space-y-2">
              <Label htmlFor="author.username">Author Username</Label>
              <Input
                id="author.username"
                name="author.username"
                value={post.author.username}
                // onChange={handleInputChange}
                placeholder="Your username (e.g. @johndoe)"
                required
              />
            </div> */}
{/* 
            <div className="space-y-2">
              <Label htmlFor="readTime">Read Time</Label>
              <Input
                id="readTime"
                name="readTime"
                value={post.readTime}
                // onChange={handleInputChange}
                placeholder="e.g. 5 min read"
                required
              />
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={postInputs.content}
                onChange={(e) =>
                  setPostInputs({
                    ...postInputs,
                    content: e.target.value,
                  })
                }
                placeholder="Write your blog post content here..."
                rows={10}
                required
              />
            </div>

            {/* <div className="space-y-2">
              <Label htmlFor="image">Cover Image</Label>
              <Input
                id="image"
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </div> */}

            <div className="flex justify-between">
              <Button onClick={sendRequest} type="button">Publish Post</Button>
              {/* <Button type="button" variant="outline" onClick={() => setPreviewMode(!previewMode)}>
                {previewMode ? 'Edit' : 'Preview'}
              </Button> */}
            </div>
          </form>
        </CardContent>
      </Card>
{/* 
      {previewMode && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.username}</p>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="text-sm text-gray-500">
                  <p>{post.date} · {post.readTime}</p>
                  <p>0 views</p>
                </div>
              </div>

              <img 
                src={post.image} 
                alt="Blog post cover" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="prose max-w-none mb-8">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    0
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    0
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className="mr-2 h-4 w-4" />
                    0
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )} */}
    </div>
  )
}