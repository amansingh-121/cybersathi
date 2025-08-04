import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, variant = 'full' }) => {
  const handleLearnMore = () => {
    console.log(`Learning more about: ${course.title}`);
    // Example navigation logic:
    // navigate(`/courses/${course.id}`);
  };

  const getDefaultImage = (category) => {
    const imageMap = {
      'web-development': 'https://picsum.photos/400/240?random=1',
      'python': 'https://picsum.photos/400/240?random=2',
      'react': 'https://picsum.photos/400/240?random=3',
      'javascript': 'https://picsum.photos/400/240?random=4',
      'design': 'https://picsum.photos/400/240?random=5',
      'data-science': 'https://picsum.photos/400/240?random=6',
      'mobile': 'https://picsum.photos/400/240?random=7',
      'ai': 'https://picsum.photos/400/240?random=8',
      'default': 'https://picsum.photos/400/240?random=9'
    };
    return imageMap[category] || imageMap.default;
  };

  const getCategoryIcon = (category) => {
    const iconMap = {
      'web-development': '🌐',
      'python': '🐍',
      'react': '⚛️',
      'javascript': '💻',
      'design': '🎨',
      'data-science': '📊',
      'mobile': '📱',
      'ai': '🤖',
      'default': '🎓'
    };
    return iconMap[category] || iconMap.default;
  };

  const getLevelColor = (level) => {
    const colorMap = {
      'Beginner': 'level-beginner',
      'Intermediate': 'level-intermediate',
      'Advanced': 'level-advanced'
    };
    return colorMap[level] || 'level-intermediate';
  };

  return (
    <div className="course-card">
      <div className="course-image-container">
        <img
          src={course.image || getDefaultImage(course.category)}
          alt={course.title}
          className="course-image"
        />
        <div className="course-gradient-overlay"></div>
        <div className={`course-level-badge ${getLevelColor(course.level)}`}>
          <span className="level-icon">⭐</span>
          {course.level || 'Intermediate'}
        </div>
        <div className="category-badge">
          <span className="category-icon">{getCategoryIcon(course.category)}</span>
        </div>
      </div>

      <div className="course-content">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          {course.rating && (
            <div className="course-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(course.rating) ? 'star-filled' : 'star-empty'}>
                    ⭐
                  </span>
                ))}
              </div>
              <span className="rating-value">{course.rating}</span>
              <span className="rating-reviews">({course.reviews})</span>
            </div>
          )}
        </div>

        <p className="course-description">{course.description}</p>

        <div className="course-stats">
          <div className="stat-item">
            <div className="stat-icon-wrapper students">
              <span className="stat-icon">👥</span>
            </div>
            <div className="stat-details">
              <span className="stat-number">{course.students || '2.1k'}</span>
              <span className="stat-label">Students</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper lessons">
              <span className="stat-icon">📚</span>
            </div>
            <div className="stat-details">
              <span className="stat-number">{course.lessons || '24'}</span>
              <span className="stat-label">Lessons</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrapper duration">
              <span className="stat-icon">⏱️</span>
            </div>
            <div className="stat-details">
              <span className="stat-number">{course.duration || '8 weeks'}</span>
              <span className="stat-label">Duration</span>
            </div>
          </div>
        </div>

        <div className="course-footer">
          <div className="course-price">
            {course.price ? (
              <>
                <span className="price-current">₹{course.price}</span>
                {course.originalPrice && (
                  <div className="price-discount">
                    <span className="price-original">₹{course.originalPrice}</span>
                    <span className="discount-badge">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </>
            ) : (
              <span className="price-free">
                <span className="free-icon">🎉</span>
                Free
              </span>
            )}
          </div>

          <button className="learn-more-button" onClick={handleLearnMore}>
            <span className="button-icon">🚀</span>
            Learn More
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseCardDemo = () => {
  const sampleCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects from scratch.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "web-development",
      price: "2999",
      originalPrice: "4999",
      rating: "4.9",
      reviews: "1.2k",
      students: "3.5k",
      lessons: "42",
      duration: "12 weeks",
      level: "Beginner"
    },
    {
      id: 2,
      title: "Python Programming Masterclass",
      description:
        "Master Python programming from basics to advanced. Perfect for beginners and professionals.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "python",
      rating: "4.7",
      reviews: "856",
      students: "2.8k",
      lessons: "36",
      duration: "10 weeks",
      level: "Beginner"
    },
    {
      id: 3,
      title: "React.js Complete Guide",
      description:
        "Build modern web applications with React.js, Redux, and modern JavaScript features.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "react",
      price: "1999",
      originalPrice: "3499",
      rating: "4.8",
      reviews: "642",
      students: "1.9k",
      lessons: "28",
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      description:
        "Learn design principles, user research, wireframing, and prototyping with industry tools.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "design",
      price: "2499",
      rating: "4.6",
      reviews: "423",
      students: "1.5k",
      lessons: "32",
      duration: "6 weeks",
      level: "Beginner"
    },
    {
      id: 5,
      title: "Data Science with Python",
      description:
        "Learn data analysis, visualization, machine learning, and statistical modeling with Python.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "data-science",
      rating: "4.9",
      reviews: "1.1k",
      students: "4.2k",
      lessons: "48",
      duration: "14 weeks",
      level: "Advanced"
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile apps using React Native and Flutter frameworks.",
      image:
        "https://images.unsplash.com/photo-1512941937614-b7685c5e240f?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb",
      category: "mobile",
      price: "3499",
      originalPrice: "5999",
      rating: "4.7",
      reviews: "789",
      students: "2.3k",
      lessons: "40",
      duration: "12 weeks",
      level: "Intermediate"
    }
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '2.5rem',
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        minHeight: '100vh'
      }}
    >
      <div style={{
        gridColumn: '1 / -1',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #fff 0%, #f0f8ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          textShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          🚀 Featured Courses
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '600px',
          margin: '0 auto',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          Transform your career with our premium learning experiences
        </p>
      </div>
      {sampleCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseCard;
export { CourseCardDemo };
