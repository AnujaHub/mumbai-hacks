import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaUsers, FaUser, FaUmbrellaBeach, FaRecycle, FaRegSmile, FaBullhorn, FaThumbsUp, FaComment, FaShareSquare, FaEllipsisV } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const UserCommunity = () => {
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
      author: 'Rajesh Kumar',
      avatar: <FaUser />,
      content: 'Just completed the Worli Beach cleanup! Amazing turnout with 45 volunteers. We collected over 850kg of waste in just 3 hours.',
      likes: 234,
      comments: 45,
      timestamp: '2 hours ago',
      image: <FaUmbrellaBeach />,
    },
    {
      id: 2,
      author: 'Priya Sharma',
      avatar: <FaUser />,
      content: 'Spotted significant plastic accumulation near Marine Drive. Reported to authorities. Let\'s work together to keep our oceans clean!',
      likes: 156,
      comments: 32,
      timestamp: '5 hours ago',
      image: <FaRecycle />,
    },
    {
      id: 3,
      author: 'Vikram Singh',
      avatar: <FaUser />,
      content: 'Excited to announce that our cleanup initiative has reached 10,000 volunteers! Together, we\'re making real change.',
      likes: 512,
      comments: 89,
      timestamp: '1 day ago',
      image: <FaRegSmile />,
    },
    {
      id: 4,
      author: 'Aisha Patel',
      avatar: <FaUser />,
      content: 'New cleanup drive scheduled for this weekend at Mahim Causeway. Looking for volunteers! Sign up on the platform.',
      likes: 198,
      comments: 52,
      timestamp: '2 days ago',
      image: <FaBullhorn />,
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="community-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-2"><FaUsers className="inline mr-2" />Community Forum</h1>
          <p className="text-lg opacity-90">Share experiences, ask questions, and inspire action</p>
        </div>

        {/* Create Post */}
        <div className="community-post bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500">
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
              <FaUser />
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Share your environmental story or ask the community..."
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{post.author}</h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 text-xl"><FaEllipsisV /></button>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 leading-relaxed">{post.content}</p>
                {post.image && <div className="text-5xl mt-4">{post.image}</div>}
              </div>

              {/* Post Stats */}
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex justify-between text-sm text-gray-600">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>

              {/* Post Actions */}
              <div className="px-6 py-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
                  <FaThumbsUp /> Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
                  <FaComment /> Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors font-semibold">
                  <FaShareSquare /> Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </main>
  );
};

export default UserCommunity;
