import React, { useEffect, useRef, useState } from 'react';
import logo from './me.svg'
import resume from './assets/Macias_Resume.pdf'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import reactpic from './assets/react.svg'
import css from './assets/css-3.svg'
import javascript from './assets/javascript.svg'
import html from './assets/html.svg'
import mongodb from './assets/mongodb.svg'
import nodejs from './assets/nodejs.svg'
import mysql from './assets/mysql.svg'
import nextjs from './assets/next-js.svg'
import python from './assets/python.svg'
import tailwind from './assets/tailwind.svg'
import django from './assets/django.svg'
import CardComponent from './Card.jsx'
import githubWhite from './assets/github_white.svg'
import motionbotPic from './assets/projects/motionbot.png'
import cataloguePic from './assets/projects/catalogue.png'
import shegels from './assets/projects/shegels.png'
import discordbot from './assets/projects/discordbot.png'
import financepic from './assets/projects/finance.png'



function App() {

  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  const motionBot= ['NextJS' , 'Django', 'Tailwind']
  const catalogue = ['Django', 'Postgres', 'React']
  const pomelo = ['React' , 'MySQL', 'NodeJS', 'Tailwind']
  const finance = ['React', 'NodeJS', 'MongoDB']
  const discordTag = ['Django' , 'Python']

  const targetRef = useRef(null);

  // Function to handle the scroll
  const scrollToAboutSection = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projectsRef = useRef(null);

  const scrollToProjectsSection = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const homeRef = useRef(null)
  const scrollToHomeSection = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   
      <div className = "bg-[#08192E]">
        <nav className = "flex font-rubik text-lg text-white sticky">
          <h2 className = "m-4 ml-4 font-semibold w-10/12"> aaron.dev</h2>
          <h2 className = "m-4" onClick = {scrollToHomeSection}>home</h2>
          <a><h2 className = "m-4" onClick = {scrollToAboutSection}>about</h2></a>
          <h2 className = "m-4" onClick = {scrollToProjectsSection}>projects</h2>
        </nav>


        <div ref = {homeRef}className = "flex-col flex items-center w-fit ">
          <div className = "flex mt-12 justify-center">
            <div className = "mt-12 w-4/12 flex-col flex gap-2">
              <h3 className = "text-base font-inter font-rubik text-[#3b8093] stroke-white"> Hi! My name is </h3>
              <h1 className = "text-white font-rubik text-4xl"> Aaron Justin Macias </h1>
              <h3 className = "text-gray-400 font-thin text-md">A fullstack web developer based in Davao City, Philippines. I'm currently taking my Bachelor of Science in Computer Science in Ateneo de Davao University. </h3>
              <div className = "flex gap-4 mt-2 mb-2 "> <a target="_blank" href = "https://github.com/catsnax"> <img className = "w-9"src = {githubWhite} ></img> </a> <a target="_blank" href = "https://www.linkedin.com/in/aaron-justin-macias-723454213/"><img className = "w-9"src = {linkedin}></img></a></div>
              <a className = "bg-white rounded-md w-5/12 text-sm p-2 " href = {resume} download> Download Resume</a>
            </div>
            <img src = {logo} className = "w-2/12 mb-16"></img>
          </div>

          <div ref={targetRef} ></div>
          <div ref={domRef} className={`transition-opacity duration-1000 ${
          isVisible ? 'animate-fade-in flex justify-center h-4/12 mt-64 ' : 'animate-fade-out flex justify-center h-7/12 mt-64 '
          }`}>
            <div  className = "flex w-9/12 font-inter text-white"> 
              <div className = "flex-col flex w-1/2 ">
                <h1 className = "font-rubik font-bold text-lg text-[#3b8093] mb-4"> I. ABOUT ME</h1>
                <h3 className = "font-rubik text-justify"> Hi! I'm Aaron and I build useful web applications.  As a fullstack developer, I have several experiences with building projects with its front-end and back-end. Currently, I am looking to pivot into specialization of either front-end or back-end programming. </h3>
                <h4 className = "mt-3"> A few technologies that I have been working with most recently are:</h4>
              </div>

            <div className = "flex flex-col text-center w-7/12 mb-80">
              <h2 className = "text-white text-xs font-thin font-rubik mb-6"> techstack </h2>
              <div className = "flex flex-col gap-4 items-center">
                <div className = "flex gap-4 items-center">
                  <span className = "w-16"></span>
                  <img className = "w-16" src = {html}></img>
                  <img className = "w-16" src = {css}></img>
                  <img className = "w-16" src = {javascript}></img>
                  <img className = "w-16" src = {reactpic}></img>
                  <img className = "w-16" src = {nextjs}></img>
                  <img className = "w-16" src = {tailwind}></img>                  
                </div>
                <div className = "flex gap-4 items-center">
                  <span className = "w-16"></span>
                  <img className = "w-16" src = {python}></img>
                  <img className = "w-16" src = {django}></img>
                  <img className = "w-16" src = {nodejs}></img>
                  <img className = "w-16" src = {mysql}></img>                
                  <img className = "w-16" src = {mongodb}></img>
                  <span className = "w-16"></span>
                </div>                
              </div>
            </div>
            
        </div>

      </div>
      
      
      <div className = "flex flex-col gap-4" >
        <span ref={projectsRef}></span>
        <span className = "self-center text-lg font-bold text-[#3b8093]" >II. Some Projects I've Built</span>

        <div className = "flex gap-6 justify-center h-5/6" >
          <CardComponent tags = {motionBot} image = {motionbotPic} title = "motionbot." githubLink = "https://github.com/catsnax/motionbot"  description = "a personal web application designed to facilitate the organization and random generation of debate motions. Users can input debate motions into a centralized database, categorize them with various filters, and generate random motions based on selected criteria. Used by myself for training as a debater."/>
          <CardComponent tags = {catalogue} image = {cataloguePic} title = "Cat-alogue" githubLink = "https://github.com/avrlalnex/cat-alogue"  description = "a web application that serves as a platform for aspiring pet-owners. Cat-alogue mainly displays cats that are for adoption with all the details that are needed that connects owners and aspiring pet-owners for a smooth adoption transaction. Project for FullStack course."/>
          <CardComponent tags = {pomelo} image = {shegels} title = "She-Gels Pomelo System"githubLink = "https://github.com/catsnax/softwareengineering" linkedinLink = {"facebook.com"} description = "a web application for a pomelo trading company that can order boxes of pomelos for customers and maintain checks of inventory and payroll for managing employees. Project for Software Engineering course."/>
        </div>
        <div className = "flex gap-4 justify-center h-5/6 mb-24">
          <CardComponent tags = {finance} image = {financepic} title = "Finance App" githubLink = "https://github.com/catsnax/finance-app" linkedinLink = {"facebook.com"} description = "a personal web application that's able to monitor loans and interest payments. It automates the process of calculating the interest margins and remaining money that borrowers had for the user. One of my earlier projects that's discontinued"/>
          <CardComponent tags = {discordTag} image = {discordbot} title = "Motion Discord Bot" githubLink = "https://github.com/catsnax/motionbot_discord" linkedinLink = {"facebook.com"} description = "a discord bot that has several different functionalities that are useful in online competitive debating such as timers, motion generators, and automated veto voting. Project is still ongoing for potential use of the debate varsity's discord server"/>
          <span className = "h-84 w-3/12"></span>
        </div>      
      </div>
           

        </div>
       
      </div>
    
  )
}

export default App
