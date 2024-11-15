import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogsShimmer({ postCount = 5 }: { postCount?: number }) {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-8">
        {[...Array(postCount)].map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="sm:flex">
              <div className="sm:flex-1 p-6">
                <CardHeader className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                </CardHeader>
                <CardContent className="p-0">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                </CardContent>
                <CardFooter className="p-0 mt-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </CardFooter>
              </div>
              <div className="sm:w-1/3">
                <Skeleton className="h-full w-full" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}