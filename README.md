

<h1>Namami Jalam – AI-Powered Waterbody Cleanliness Detection</h1>

<p>
Namami Jalam is a full-stack environmental intelligence system that detects water pollution,
generates AI-based reports, and connects citizens with NGOs conducting cleanup drives.
The goal is to support sustainable water conservation using technology.
</p>

<h2>Problem Statement</h2>
<p>During Anant Chaturdashi at beaches like Girgaon Chowpatty and Juhu, large crowds and idol immersions leave behind waste such as flowers, plastics, paints, and decorative materials. This trash exposes citizens, kids, and animals to injuries, infections, and respiratory issues. Our solution uses an agentic AI system to monitor waste in real time, detect high-risk zones, predict health hazards, and alert authorities early. This prevents exposure and promotes a healthier environment, aligning perfectly with the Healthtech track’s preventive healthcare goals.</p>
<p>“Namami Jalam” is an AI-driven platform that ensures image recognition, data analytics, and community collaboration to identify, quantify, and act on waste pollution in real-time.

The system enables users to upload images of polluted areas through a web app, where an AI model analyzes the image to detect and calculate the amount of visible waste. Based on this, it generates a Pollution Severity Score, representing the cleanliness level of that location. If the pollution percentage crosses a predefined set limit, then the system will automatically sends alerts to nearby NGOs, municipal authorities, or volunteer groups to so they can quickly take action and clean the area.</p>

<h3> Workflow </h3>
<ul>
<li>A real-time image is captured</li>

<li>AI detects the amount of waste present & calculates the percentage of area contaminated</li>

<li>If it is above safe range, the system alerts nearby ngo or government bodies & cleanup teams</li>

<li>Users can volunteer for cleaning drive</li>
</ul>
<h2> System Architecture: Multi-Agent Pipeline</h2>

<p>Our solution follows a fully automated chain of intelligent agents that work together to detect pollution, understand the situation, take decisions, verify cleanup, and generate reports.</p>

<h3> 1. Vision Model</h3>
<ul>
  <li>Analyzes images and detects waste.</li>
  <li>Identifies type of pollution: flowers, plastics, idol remnants, paints, etc.</li>
</ul>

<h3> 2. Thinking Agent (Situation Understanding Agent)</h3>
<p>Uses the Vision Agent’s output to understand context and seriousness.</p>
<ul>
  <li>Is the waste near water?</li>
  <li>Is it hazardous?</li>
  <li>Is it a public health or safety risk?</li>
  <li>Classifies severity into: <strong>Low / Moderate / Severe</strong></li>
</ul>
<p><strong>Goal:</strong> Convert numeric severity into real-world understanding.</p>

<h3> 3. Decision Agent</h3>
<p>Decides “who should act” based on severity.</p>
<ul>
  <li><strong>Low:</strong> Record data only</li>
  <li><strong>Moderate:</strong> Notify local volunteers</li>
  <li><strong>Severe:</strong> Alert NGOs + Municipal authorities</li>
</ul>
<p><strong>Goal:</strong> Select the right response automatically — no human judgment needed.</p>

<h3> 4. Verification Agent</h3>
<ul>
  <li>Verifies if cleanup actually happened.</li>
  <li>Compares before vs after images.</li>
  <li>Checks if waste reduced and area is clean.</li>
  <li>If not cleaned → Escalates automatically.</li>
</ul>
<p><strong>Goal:</strong> Ensure accountability and avoid fake updates.</p>

<h3> 5. Reporting Agent</h3>
<ul>
  <li>Generates real-time reports.</li>
  <li>Logs severity, actions taken, cleanup status, and authorities involved.</li>
</ul>

<h3> End-to-End Pipeline</h3>
<p><strong>Image → Understanding → Decision → Alert → Action → Verification → Reporting</strong></p>

<p><strong>In short:</strong><br>
“Our system uses a chain of intelligent agents that detect pollution, understand its severity, decide actions, notify the right people, verify cleanup, and generate real-time reports — fully automated.”
</p>

<h2>Features</h2>

<h3>Citizen Dashboard</h3>
<ul>
  <li>Real-Time waterbody image for AI analysis</li>
  <li>Receive an automatically generated pollution report</li>
  <li>Location-based environmental insights</li>
  <li>Join nearby cleanup drives created by NGOs</li>
</ul>

<h3>NGO Dashboard</h3>
<ul>
  <li>Schedule and manage cleanup drives</li>
  <li>Access AI pollution reports</li>
  <li>Track volunteers and tasks</li>
  <li>Monitor pollution trends</li>
</ul>

<h3>GOV Dashboard</h3>
<ul>
  <li>Access AI pollution reports</li>
  <li>Monitor pollution trends</li>
  <li>Identify hotspot areas</li>
</ul>

<h3>AI Pollution Detection</h3>
<ul>
  <li>Detects visible waste and pollutants</li>
  <li>Rates pollution severity</li>
  <li>Generates structured analysis data for reports</li>
</ul>

<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React</li>
  <li>TailwindCSS</li>
  <li>GSAP Animations</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Django</li>
  <li>Django REST Framework</li>
  <li>Python</li>
  <li>Machine Learning Model</li>
</ul>

<h2>How It Works</h2>
<ul>
  <li>A real time image is captured</li>
  <li>React sends it to the Django API</li>
  <li>AI model analyzes pollution level</li>
  <li>Backend returns results</li>
  <li>Frontend displays a readable report</li>
  <li>User can join nearby drives</li>
</ul>

<h2>Installation</h2>

<h3>Frontend</h3>
<pre>
cd frontend
npm install 
npm run dev
</pre>

<h3>Backend</h3>
<pre>
activate venv env
cd Main_Project
python manage.py runserver
</pre>

<h2>Future Improvements</h2>
<ul>
  <li>Water quality prediction</li>
  <li>Pollution heatmaps</li>
  <li>Reward system for volunteers</li>
  <li>Multilingual support</li>
  <li>Real-time communication between NGOs and users</li>
</ul>

<h2>Credits</h2>
<p>
Created for the Mumbai Hacks Hackathon 2025 to help protect India’s waterbodies
through AI and community participation.
</p>

</body>
</html>

