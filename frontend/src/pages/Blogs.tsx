import BlogCard from "@/components/BlogCard";
import { Separator } from "@/components/ui/separator";
import AppBar from "@/components/Appbar";
import { useBlogs } from "@/hooks";
import BlogsShimmer from "@/components/BlogsShimmer";


export default function Blogs() {
  const { loading, blogs } = useBlogs();

//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 5;
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber); 

  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <BlogsShimmer />
        ) : (
          <div className="space-y-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                author={blog.author.name}
                username={blog.author.username}
                title={blog.title}
                content={blog.content}
                publishedAt={blog.publishedAt}
              />
            ))}
          </div>
        )}

        <Separator className="my-8" />

        {/* <div className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div> */}
      </main>
    </div>
  );
}
