import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { BookmarkIcon, MessageCircle, Share2, ThumbsUp } from 'lucide-react'

export default function ArticleShimmer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
      <Skeleton className="h-12 w-3/4 mb-4" />
      
      <div className="flex items-center space-x-4 mb-6">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Separator orientation="vertical" className="h-8" />
        <div>
          <Skeleton className="h-3 w-32 mb-2" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <Skeleton className="w-full h-64 rounded-lg mb-6" />

      <div className="space-y-4 mb-8">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" disabled>
            <ThumbsUp className="mr-2 h-4 w-4" />
            <Skeleton className="h-4 w-8" />
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <MessageCircle className="mr-2 h-4 w-4" />
            <Skeleton className="h-4 w-8" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" disabled>
            <BookmarkIcon className="mr-2 h-4 w-4" />
            <Skeleton className="h-4 w-8" />
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Separator className="mb-8" />

      <Card>
        <CardContent className="pt-6">
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-32 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}