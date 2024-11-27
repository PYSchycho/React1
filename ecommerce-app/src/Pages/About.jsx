import React from 'react';
import Navbar from '../component/Navbar';
const About = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h1 className='font-bold text-center bg-violet-300 p-3 my-1'>About Us</h1>
        <p className='font-bold bg-violet-200 my-1 p-5 text-pretty'>
          Welcome to our e-commerce website! We are dedicated to bringing you the best products at unbeatable prices.
          Our mission is to provide our customers with an easy, reliable, and enjoyable shopping experience.
          We believe in offering quality products that meet the needs of our diverse customer base.</p></section>
          <section>
            <h2 className='font-bold text-center bg-violet-200 my-2 p-2'>Meet Our Team </h2>
          </section>
    </div>
  )
}
export default About;