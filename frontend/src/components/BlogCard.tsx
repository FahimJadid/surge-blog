import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { BookmarkIcon, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  author: string;
  username: string;
  title: string;
  content: string;
  publishedAt: string;
}

const BlogCard = ({
  id,
  author,
  username,
  title,
  content,
  publishedAt,
}: BlogCardProps) => {
  return (
    <Card key={id} className="overflow-hidden">
      <div className="sm:flex">
        <div className="sm:flex-1 p-6">
          <CardHeader className="p-0">
            <div className="flex items-center space-x-4 mb-4">
              <Link to={`/user/${author}`}>
                <Avatar>
                  <AvatarImage src={author} alt={author} />
                  <AvatarFallback>
                    {author
                      .split(" ")
                      .map((n) => n[0] + n[n.length - 1])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <p className="font-semibold">{author}</p>
                <Link to={`/user/${username}`}>
                  <p className="text-sm text-gray-500">{`@${username}`}</p>
                </Link>
              </div>
            </div>
            <Link to={`/blog/${id}`}>
              <CardTitle className="text-2xl font-bold mb-2 hover:underline">
                {title}
              </CardTitle>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-gray-600 mb-4">
              {content.length > 100 ? `${content.slice(0, 100)}...` : content}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>{publishedAt}</span>
              <span>·</span>
              <span>{`${Math.ceil(content.length / 100)} minutes`}</span>
              {/* <span>·</span> */}
              {/* <span>{post.views.toLocaleString()} views</span> */}
            </div>
          </CardContent>
          {/* <CardFooter className="p-0 mt-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                {post.bookmarks}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardFooter> */}
        </div>
        <div className="sm:w-1/3">
            <Link to={`/blog/${id}`}>
              <img
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`Cover for ${title}`}
                className="w-full h-full object-cover"
              />
            </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
