import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaCamera } from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const UserReport = () => {
  const mainRef = useRef(null);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  useGSAP(
    () => {
      gsap.from('.report-header', {
        duration: 0.8,
        opacity: 0,
        y: -30,
        ease: 'power3.out',
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="report-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <FaCamera className="inline mr-2" />Report Pollution
          </h1>
          <p className="text-lg opacity-90">Help us identify and address environmental issues</p>
        </div>

        <div className="report-section bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">

            {/* LOCATION */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location or select on map"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* POLLUTION TYPE */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-2">Pollution Type</label>
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Select type...</option>
                <option>Plastic Waste</option>
                <option>Water Pollution</option>
                <option>Industrial Waste</option>
                <option>Litter</option>
              </select>
            </div>

            {/* SEVERITY */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-2">Severity Level</label>
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option>Low - Minor litter</option>
                <option>Medium - Significant pollution</option>
                <option>High - Urgent cleanup needed</option>
                <option>Critical - Emergency response required</option>
              </select>
            </div>

            {/* IMAGE UPLOAD */}
            {/* <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
            >
              <div className="text-5xl mb-3"><FaCamera /></div>
              <p className="text-gray-700 font-semibold">Click to upload or drag and drop</p>
              <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 10MB</p>

              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  className="mt-4 max-h-48 mx-auto rounded-lg shadow-md"
                />
              )}

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div> */}

            {/* DESCRIPTION */}
            <div>
              <label className="block text-lg font-bold text-gray-800 mb-2">Description</label>
              <textarea
                placeholder="Describe the pollution issue in detail..."
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-linear-to-r from-blue-600 to-teal-500 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send to NGO
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
};

export default UserReport;
