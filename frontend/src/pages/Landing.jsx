import React from 'react'
import Slideshow from '../components/landing/Slideshow'
import About from '../components/landing/About.jsx'
import CTA from '../components/landing/CTA.jsx'
import ContactForm from '../components/landing/ContactForm.jsx'
import FAQSection from '../components/landing/FAQSection.jsx'
import Footer from '../components/landing/Footer.jsx'
import Process from '../components/landing/Process.jsx'

const Landing = () => {
  return (
    <div>
        <Slideshow/>
        <About/>
        <Process/>
        <CTA/>
        <div className="flex flex-col md:flex-row gap-8 px-6 py-16">
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2">
            <FAQSection />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing
