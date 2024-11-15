import Article from "@/components/Article";
import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks";
import ArticleShimmer from "@/components/ArticleShimmer";
import AppBar from "@/components/Appbar";

export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      {loading ? <ArticleShimmer /> : blog ? <Article blog={blog} /> : null}
    </div>
  );
}
