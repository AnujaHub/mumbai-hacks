import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaLandmark, FaMapPin, FaUsers, FaExclamationTriangle, FaPhone, FaEnvelope, FaMap, FaBroom, FaRecycle, FaStar, FaUser , FaBuilding} from 'react-icons/fa';

gsap.registerPlugin(useGSAP);

const GovProfile = () => {
	const mainRef = useRef(null);
	const [image, setImage] = useState(null);

	useGSAP(
		() => {
			gsap.from('.profile-header', {
				duration: 0.8,
				opacity: 0,
				scale: 0.95,
				ease: 'back.out',
			});
			gsap.from('.report-header', {
				duration: 0.8,
				opacity: 0,
				y: -20,
				ease: 'power3.out',
				delay: 0.15,
			});
		},
		{ scope: mainRef }
	);

	const stats = [
		{ label: 'Active Teams', value: '12', icon: <FaUsers /> },
		{ label: 'Cleanup Drives', value: '58', icon: <FaBroom /> },
		{ label: 'Hotspot Regions', value: '18', icon: <FaMapPin /> },
		{ label: 'Resolved Cases', value: '1,240', icon: <FaRecycle /> },
	];

	const team = [
		{ name: 'Suresh Patel', role: 'Field Coordinator', status: 'Active' },
		{ name: 'Meera Joshi', role: 'Data Analyst', status: 'Active' },
		{ name: 'Rohit Desai', role: 'Operations Lead', status: 'Active' },
	];

	return (
		<main ref={mainRef} className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12">
			<div className="max-w-4xl mx-auto px-6">
				{/* Profile Header */}
				<div className="profile-header bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-2xl p-8 shadow-xl mb-8">
					<div className="flex items-center gap-6">
						<div className="w-24 h-24 flex items-center justify-center text-4xl">
							<FaBuilding />
						</div>
						<div>
							<h1 className="text-3xl font-bold mb-1">Government Profile</h1>
							<p className="text-lg opacity-90">Municipal / Government Agency • Verified</p>
						</div>
					</div>
				</div>

				{/* Hotspot Regions (replaces report form) */}
				<section className="profile-section mb-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Hotspot Regions</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{[
							{ name: 'Worli Beach', incidents: 42, severity: 'High', icon: <FaExclamationTriangle /> },
							{ name: 'Mithi River', incidents: 28, severity: 'Critical', icon: <FaExclamationTriangle /> },
							{ name: 'Versova Creek', incidents: 15, severity: 'Medium', icon: <FaExclamationTriangle /> },
						].map((region, idx) => (
							<div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
								<div className="flex items-start justify-between mb-3">
									<div>
										<h3 className="text-lg font-bold text-gray-800">{region.name}</h3>
										<p className="text-sm text-gray-500">{region.incidents} incidents reported</p>
									</div>
									<div className="text-3xl text-yellow-600">{region.icon}</div>
								</div>
								<div className="flex items-center justify-between">
									<span className={`px-3 py-1 rounded-full text-sm font-bold ${region.severity === 'Critical' ? 'bg-red-100 text-red-800' : region.severity === 'High' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
										{region.severity}
									</span>
									<button className="px-4 py-2 bg-linear-to-r from-blue-600 to-teal-500 text-white rounded-lg">View Details</button>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Stats Grid (same style as NGO) */}
				<div className="profile-section grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
					{stats.map((stat, index) => (
						<div key={index} className="bg-white rounded-lg p-6 shadow-md text-center border-t-4 border-blue-500">
							<div className="text-3xl mb-2">{stat.icon}</div>
							<div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
							<p className="text-sm text-gray-600">{stat.label}</p>
						</div>
					))}
				</div>

				{/* Organization / Agency Info */}
				<section className="profile-section mb-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">About </h2>
					<div className="bg-white rounded-lg p-6 shadow-md">
						<p className="text-gray-700 leading-relaxed mb-4">
							Maharashtra Coastal Zone Managemnet Authority 
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							<div>
								<p className="text-sm text-gray-500">Established</p>
								<p className="font-bold text-gray-800">1998</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Operational Teams</p>
								<p className="font-bold text-gray-800">12</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Verified By</p>
								<p className="font-bold text-gray-800">Municipal Board</p>
							</div>
							<div>
								<p className="text-sm text-gray-500">Rating</p>
								<p className="font-bold text-yellow-500"><FaStar className="inline mr-2" />4.6/5</p>
							</div>
						</div>
					</div>
				</section>

				{/* Team Members */}
				<section className="profile-section mb-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Team Members</h2>
					<div className="space-y-3">
						{team.map((member, index) => (
							<div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
										<FaUser />
									</div>
									<div>
										<p className="font-semibold text-gray-800">{member.name}</p>
										<p className="text-sm text-gray-500">{member.role}</p>
									</div>
									</div>
									<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">{member.status}</span>
								</div>
						))}
					</div>
				</section>

				{/* Contact Information */}
				<section className="profile-section">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
					<div className="bg-white rounded-lg p-6 shadow-md space-y-4">
						<div className="flex items-center gap-4">
							<span className="text-2xl"><FaEnvelope /></span>
							<div>
								<p className="text-sm text-gray-500">Email</p>
								<p className="font-semibold text-gray-800">gov@namami.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-2xl"><FaPhone /></span>
							<div>
								<p className="text-sm text-gray-500">Phone</p>
								<p className="font-semibold text-gray-800">+91 11223 44556</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-2xl"><FaMapPin /></span>
							<div>
								<p className="text-sm text-gray-500">Office</p>
								<p className="font-semibold text-gray-800">Mumbai, Maharashtra</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default GovProfile;
