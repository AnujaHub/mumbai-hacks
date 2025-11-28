import React, { useRef, useState } from "react";
import {
  FaCamera,
  FaTimes,
  FaSearch,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";

const ImageCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [image, setImage] = useState(null);
  const [captureMode, setCaptureMode] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      videoRef.current.srcObject = stream;
      setCaptureMode(true);
    } catch {
      alert("Camera access denied.");
    }
  };

  const capturePhoto = () => {
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;

    ctx.drawImage(videoRef.current, 0, 0);
    const imageData = canvasRef.current.toDataURL("image/jpeg");

    stopCamera();
    setImage(imageData);
    analyze(imageData);
  };

  const stopCamera = () => {
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
    }
    setCaptureMode(false);
  };

  const analyze = async (img) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    // mock
    setTimeout(() => {
      setAnalysisResult({
        pollutionScore: 78,
        wasteDetected: 240,
        items: ["Plastic Bags", "Bottles", "Metal", "Cloth"],
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <FaCamera className="mr-2" />
        Capture Pollution Image
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div>
          {!image && !captureMode && (
            <button
              onClick={startCamera}
              className="w-full border-2 border-blue-400 rounded-xl p-10 text-center hover:border-blue-600 hover:bg-blue-50 transition"
            >
              <FaCamera className="text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Open Camera
              </h3>
              <p className="text-gray-600 text-sm">
                Capture live photo for AI analysis
              </p>
            </button>
          )}

          {captureMode && (
            <div className="space-y-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full rounded-xl shadow-lg"
              />
              <canvas ref={canvasRef} className="hidden" />
              <div className="flex gap-2">
                <button
                  onClick={stopCamera}
                  className="flex-1 px-4 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={capturePhoto}
                  className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
                >
                  Capture Photo
                </button>
              </div>
            </div>
          )}

          {image && !captureMode && (
            <div className="relative">
              <img
                src={image}
                className="w-full rounded-xl shadow-lg max-h-96 object-cover"
              />
              <button
                onClick={() => setImage(null)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDE — ANALYSIS */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <FaSearch className="mr-2" />
            AI Analysis Results
          </h3>

          {isAnalyzing && (
            <div className="flex flex-col items-center justify-center h-64">
              <FaCogs className="text-5xl mb-4 animate-spin" />
              <p className="text-gray-600 font-semibold">Analyzing image…</p>
            </div>
          )}

          {!isAnalyzing && analysisResult && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-800">
                    Pollution Score
                  </span>
                  <span className="text-3xl font-bold text-red-600">
                    {analysisResult.pollutionScore}%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${analysisResult.pollutionScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-gray-600 mb-2">Waste Estimated</p>
                <p className="text-3xl font-bold text-red-600">
                  {analysisResult.wasteDetected} kg
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-800 mb-3">Detected Items</p>
                <div className="space-y-2">
                  {analysisResult.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 bg-white rounded shadow-sm"
                    >
                      <span>{item}</span>
                      <span className="text-sm font-bold text-gray-500">
                        {20 + i * 5}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!isAnalyzing && !analysisResult && (
            <div className="flex flex-col items-center justify-center h-64 opacity-60">
              <FaCamera className="text-6xl mb-4" />
              <p className="font-medium text-gray-600">
                Capture a photo to begin analysis
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <FaLightbulb className="inline mr-2" />
          Take a photo of a polluted spot. The AI detects waste types and
          estimates the pollution level automatically.
        </p>
      </div>
    </div>
  );
};

export default ImageCapture;
