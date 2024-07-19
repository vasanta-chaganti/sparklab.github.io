import './Blog.css';

const posts = [
    {
        title: 'Hello World',
        date: '2021-09-01',
        content: 'Welcome to the blog!',
    },
    {
        title: 'Food',
        date: '2021-09-02',
        content: 'Food is delicious!',
    },
]

function Blog() {
    return (
        <div className="blog">
            <h1> Blog </h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index} className='postContainer'>
                        <div className='post'>
                            <div id='title'>{post.title}</div>
                            <div id='date'>{post.date}</div>
                            <div id='content'>{post.content}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Blog;