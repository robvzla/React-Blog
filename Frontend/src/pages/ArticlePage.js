import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const ArticlePage = () => {

    const [articleInfo, setArticleInfo] = useState({ upvote: 0, comments: [], canUpvote: false }); 
    const { canUpvote } = articleInfo;
    const { articleId } = useParams(); 
    const navigate = useNavigate();

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo); 
        }

        if(!isLoading)
        {
            loadArticleInfo();
        }
    }, [isLoading, user]);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    };

    if(!article){
        return <NotFoundPage />;
    }

    return (
        <>
        <h1>{article.title}</h1>

        <div className="upvotes-section">
            <p>This article has {articleInfo.upvote} upvote(s)</p>
            <br></br>
            {user ? <button onClick={addUpvote}>{canUpvote ? 'upvote' : 'Already upvoted'}</button> : <button onClick={() => { navigate('/login');}}>Log in to upvote</button>}
        </div>

        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        {user ? <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} /> : <button onClick={() => { navigate('/login');}}>Log in to add a comment</button>}
        <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;  