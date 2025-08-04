// BlogPreview.js
import React from 'react';
import { Link } from 'react-router-dom';

const previewBlogs = [
  {
    id: 1,
    icon: '🧠',
    title: 'Artificial Intelligence',
    intro: 'Explore the future of intelligent machines and how AI is transforming industries worldwide.',
  },
  {
    id: 2,
    icon: '💻',
    title: 'Full Stack Development',
    intro: 'Learn how to build complete web applications from frontend to backend seamlessly.',
  },
  {
    id: 3,
    icon: '🤖',
    title: 'Machine Learning',
    intro: 'Discover the power of machines that learn and adapt from data patterns.',
  },
];

const BlogPreview = () => {
  return (
    <>
      {/* CSS Styles */}
      <style jsx>{`
        .blog-preview-section {
          min-height: 80vh;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #3d6bb3 50%, #5084ce 75%, #639de9 100%);
          position: relative;
          padding: 4rem 1.5rem;
          overflow: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Background decorative elements */
        .blog-preview-section::before {
          content: '';
          position: absolute;
          top: -8rem;
          right: -8rem;
          width: 16rem;
          height: 16rem;
          background: radial-gradient(circle, rgba(99, 157, 233, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
        }

        .blog-preview-section::after {
          content: '';
          position: absolute;
          bottom: -8rem;
          left: -8rem;
          width: 16rem;
          height: 16rem;
          background: radial-gradient(circle, rgba(30, 60, 114, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
        }

        /* Header Section */
        .preview-header-section {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }

        .preview-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .preview-header-line {
          width: 2.5rem;
          height: 0.25rem;
          background: linear-gradient(90deg, #639de9, #5084ce);
          border-radius: 2rem;
        }

        .preview-header-badge-text {
          color: #a8c8f0;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .preview-blogs-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e6f3ff 50%, #b3d9ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          text-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
        }

        .preview-blogs-subtitle {
          color: #b3d9ff;
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 40rem;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        /* Blog Grid */
        .preview-blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 70rem;
          margin: 0 auto 3rem;
          position: relative;
          z-index: 10;
        }

        /* Blog Cards */
        .preview-blog-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .preview-blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(99, 157, 233, 0.1) 0%, rgba(80, 132, 206, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 1.5rem;
        }

        .preview-blog-card:hover::before {
          opacity: 1;
        }

        .preview-blog-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(30, 60, 114, 0.4);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Blog Icon */
        .preview-blog-icon-container {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #639de9 0%, #5084ce 100%);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .preview-blog-card:hover .preview-blog-icon-container {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(99, 157, 233, 0.5);
        }

        .preview-blog-icon {
          font-size: 2rem;
        }

        /* Blog Content */
        .preview-blog-title {
          font-size: 1.375rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .preview-blog-card:hover .preview-blog-title {
          color: #e6f3ff;
        }

        .preview-blog-intro {
          color: #b3d9ff;
          font-size: 0.9375rem;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        /* See More Button Section */
        .preview-see-more-section {
          text-align: center;
          margin-top: 3rem;
          position: relative;
          z-index: 10;
        }

        .preview-see-more-btn {
          background: linear-gradient(135deg, #639de9 0%, #5084ce 100%);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .preview-see-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .preview-see-more-btn:hover::before {
          left: 100%;
        }

        .preview-see-more-btn:hover {
          background: linear-gradient(135deg, #5084ce 0%, #3d6bb3 100%);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(80, 132, 206, 0.4);
        }

        .preview-see-more-btn:active {
          transform: translateY(-1px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .preview-blog-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .preview-blog-card:nth-child(1) { animation-delay: 0.1s; }
        .preview-blog-card:nth-child(2) { animation-delay: 0.2s; }
        .preview-blog-card:nth-child(3) { animation-delay: 0.3s; }

        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-preview-section {
            padding: 2rem 1rem;
          }
          
          .preview-blogs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .preview-blog-card {
            padding: 1.5rem;
          }
          
          .preview-see-more-btn {
            padding: 0.875rem 2rem;
            font-size: 0.9375rem;
          }
        }

        @media (max-width: 480px) {
          .preview-header-badge {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .preview-header-line {
            width: 2rem;
          }
          
          .preview-blog-card {
            padding: 1.25rem;
          }
          
          .preview-blog-icon-container {
            width: 3.5rem;
            height: 3.5rem;
          }
          
          .preview-blog-icon {
            font-size: 1.75rem;
          }
        }
      `}</style>

      {/* Component JSX */}
      <section className="blog-preview-section" id="blog-preview">
        {/* Header Section */}
        <div className="preview-header-section">
          <div className="preview-header-badge">
            <div className="preview-header-line"></div>
            <span className="preview-header-badge-text">Tech Insights</span>
            <div className="preview-header-line"></div>
          </div>
          
          <h2 className="preview-blogs-title">Our Latest Tech Blogs</h2>
          
          <p className="preview-blogs-subtitle">
            Discover cutting-edge technologies and insights from our expert team
          </p>
        </div>

        {/* Blog Grid */}
        <div className="preview-blogs-grid">
          {previewBlogs.map((blog) => (
            <div className="preview-blog-card" key={blog.id}>
              <div className="preview-blog-icon-container">
                <span className="preview-blog-icon">{blog.icon}</span>
              </div>
              <h3 className="preview-blog-title">{blog.title}</h3>
              <p className="preview-blog-intro">{blog.intro}</p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="preview-see-more-section">
          <Link to="/blogs" className="preview-see-more-btn">
            See All Blogs →
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPreview;
