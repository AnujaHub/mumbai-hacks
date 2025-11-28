import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaBuilding, FaThumbsUp, FaComment, FaShareAlt } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const NgoCommunity = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.community-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  const posts = [
    {
      id: 1,
      author: 'Mumbai Cleanup NGO',
      avatar: <FaBuilding />,
      content: 'Coordinating with volunteers for the mega cleanup drive this weekend. All teams assigned their zones. Let\'s make Mumbai proud!',
      likes: 342,
      comments: 67,
      timestamp: '3 hours ago',
      type: 'initiative',
    },
    {
      id: 2,
      author: 'Ocean Guardians',
      avatar: <FaBuilding />,
      content: 'Successfully completed 52 cleanup drives this year! Our volunteers have collected 98 tons of waste. The impact is real! 💚',
      likes: 456,
      comments: 78,
      timestamp: '6 hours ago',
      type: 'milestone',
    },
    {
      id: 3,
      author: 'Environmental Force',
      avatar: <FaBuilding />,
      content: 'Partnership announcement: Collaborating with local municipalities for sustainable waste management. Together we can do more! 🤝',
      likes: 523,
      comments: 92,
      timestamp: '1 day ago',
      type: 'partnership',
    },
    {
      id: 4,
      author: 'Green Planet Alliance',
      avatar: <FaBuilding />,
      content: 'Training new volunteer coordinators today. Knowledge sharing is key to scaling our impact. Join our next training session! 📚',
      likes: 267,
      comments: 45,
      timestamp: '2 days ago',
      type: 'training',
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="community-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-2"><FaBuilding /> NGO Community Hub</h1>
          <p className="text-lg opacity-90">Collaborate, share insights, and amplify collective impact</p>
        </div>

        {/* Create Post */}
      <div className="community-post bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-teal-500">
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-xl">
              <FaBuilding />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Share updates, initiatives, or lessons learned..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="px-6 py-2 text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 font-bold transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-linear-to-r from-blue-600 to-teal-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="community-post bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Post Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-xl">
                      {post.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      post.type === 'initiative'
                        ? 'bg-blue-100 text-blue-800'
                        : post.type === 'milestone'
                        ? 'bg-green-100 text-green-800'
                        : post.type === 'partnership'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </span>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
              </div>

              {/* Post Stats */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between text-sm text-gray-600">
                <span>{post.likes} reactions</span>
                <span>{post.comments} comments</span>
              </div>

              {/* Post Actions */}
              <div className="px-6 py-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors font-semibold">
                  <FaThumbsUp /> React
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors font-semibold">
                  <FaComment /> Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-teal-50 rounded-lg transition-colors font-semibold">
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border-2 border-teal-500 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </main>
  );
};

export default NgoCommunity;
