import React, { useState } from 'react';
import './Blogs.css';

const blogData = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    intro: 'Explore the future of intelligent machines and how AI is transforming industries worldwide.',
    detail: 'Artificial Intelligence (AI) is revolutionizing every industry. From virtual assistants to predictive analytics, AI is now used in healthcare, finance, education, and more. Machine learning, deep learning, and natural language processing are some of the key AI technologies driving this transformation.',
    category: 'AI & ML',
    readTime: '5 min read',
    difficulty: 'Advanced',
    tags: ['AI', 'Machine Learning', 'Future Tech']
  },
  {
    id: 2,
    title: 'Full Stack Development',
    intro: 'Learn how to build complete web applications from frontend to backend seamlessly.',
    detail: 'Full Stack Development involves both frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Express, MongoDB) technologies. Developers need to understand database integration, server-side logic, and deployment processes to create scalable applications.',
    category: 'Web Dev',
    readTime: '7 min read',
    difficulty: 'Intermediate',
    tags: ['Frontend', 'Backend', 'JavaScript']
  },
  {
    id: 3,
    title: 'Machine Learning',
    intro: 'Discover the power of machines that learn and adapt from data patterns.',
    detail: 'Machine Learning enables computers to learn patterns and make decisions without being explicitly programmed. Popular algorithms include decision trees, support vector machines, and neural networks that power modern AI applications.',
    category: 'AI & ML',
    readTime: '6 min read',
    difficulty: 'Advanced',
    tags: ['ML', 'Algorithms', 'Data Science']
  },
  {
    id: 4,
    title: 'Competitive Programming',
    intro: 'Sharpen your coding skills through challenging problem-solving competitions.',
    detail: 'Competitive Programming helps improve problem-solving speed and logic. It includes data structures, algorithms, and understanding time and space complexity. Platforms like Codeforces, LeetCode, and HackerRank provide thousands of problems to practice.',
    category: 'Programming',
    readTime: '4 min read',
    difficulty: 'Expert',
    tags: ['DSA', 'Algorithms', 'Contest']
  },
  {
    id: 5,
    title: 'Cybersecurity Basics',
    intro: 'Learn how to protect systems and data from evolving digital threats.',
    detail: 'Cybersecurity includes securing networks, applications, and data from unauthorized access or attacks. Key concepts include encryption, firewalls, authentication, penetration testing, and incident response protocols.',
    category: 'Security',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    tags: ['Security', 'Network', 'Protection']
  },
  {
    id: 6,
    title: 'Frontend Development',
    intro: 'Build visually stunning and user-friendly web interfaces that engage users.',
    detail: 'Frontend Development involves HTML, CSS, JavaScript, and modern frameworks like React, Vue.js, or Angular. Good UI/UX design principles are essential to ensure usability, accessibility, and optimal user experience.',
    category: 'Web Dev',
    readTime: '5 min read',
    difficulty: 'Beginner',
    tags: ['HTML', 'CSS', 'React']
  },
  {
    id: 7,
    title: 'Mobile App Development',
    intro: 'Create powerful native and cross-platform mobile applications.',
    detail: 'App Development includes using tools like Flutter, React Native, and native SDKs to create mobile applications. Knowledge of APIs, state management, and mobile-specific UI patterns is essential for success.',
    category: 'Mobile',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    tags: ['Flutter', 'React Native', 'iOS']
  },
  {
    id: 8,
    title: 'Cloud Computing',
    intro: 'Master cloud platforms and scalable infrastructure solutions.',
    detail: 'Cloud Computing provides on-demand resources such as servers, storage, and databases over the internet. Services include IaaS, PaaS, and SaaS, helping businesses scale efficiently while reducing infrastructure costs.',
    category: 'Cloud',
    readTime: '7 min read',
    difficulty: 'Advanced',
    tags: ['AWS', 'Azure', 'DevOps']
  }
];

const Blogs = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & ML', 'Web Dev', 'Programming', 'Security', 'Mobile', 'Cloud'];

  const handleLearnMore = (id) => {
    setExpandedBlogId(id === expandedBlogId ? null : id);
  };

  const filteredBlogs = selectedCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'difficulty-beginner';
      case 'Intermediate': return 'difficulty-intermediate';
      case 'Advanced': return 'difficulty-advanced';
      case 'Expert': return 'difficulty-expert';
      default: return 'difficulty-beginner';
    }
  };

  return (
    <section className="blogs-section" id="blogs">
      <div className="header-section">
        <h1 className="blogs-title">Latest Tech Blogs</h1>
        <p className="blogs-subtitle">Discover cutting-edge technologies and stay ahead in the digital revolution</p>
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'filter-btn-active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="blogs-grid">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="card-meta">
              <div className="category-badge">{blog.category}</div>
              <div className={`difficulty-badge ${getDifficultyColor(blog.difficulty)}`}>{blog.difficulty}</div>
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <div className="blog-meta-info">
              <span>{blog.readTime}</span>
              <span className="meta-divider">•</span>
              <span>2.4k views</span>
            </div>
            <p className="blog-intro">{blog.intro}</p>
            <div className="blog-tags">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="tag">#{tag}</span>
              ))}
            </div>
            <div className={`blog-detail ${expandedBlogId === blog.id ? 'expanded' : ''}`}>
              <div className="blog-detail-content">
                <div className="detail-header">Deep Dive</div>
                <p className="blog-detail-text">{blog.detail}</p>
              </div>
            </div>
            <button className="blog-button" onClick={() => handleLearnMore(blog.id)}>
              <span className="button-text">
                {expandedBlogId === blog.id ? 'Show Less' : 'Learn More'}
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
