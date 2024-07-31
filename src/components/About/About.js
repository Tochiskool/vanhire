import React from "react";
import NavBar from "../NavBar/NavBar";
import "../Home/home.css";
import Trieste from "./trieste.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <NavBar />

      <section>
        <div className='imgContainer'>
          <img
            className='imageStyle'
            src={Trieste}
            alt='City of Trieste'
            title='A picture of the city of Tireste'
          />
          <div className='contentContainer'>
            <h1>Welccome to my Van hire Company</h1>
            <p>The best place to find cheap vans at affordablel prices</p>
          </div>
        </div>
      </section>
      <section className='aboutSection'>
        <h3>Get to your Destination through us!</h3>
        <div>
          <h4>Don't squeeze in a sedan when you could relax in a van</h4>
          <p>
            Out mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.(Hitch costs extra 😃)
          </p>
        </div>
        <article className='about-page-quote'>
          <blockquote>
            <h2>
              Your destination is waiting. <br /> Your van is ready
            </h2>
            <hr />
            <Link to='/vans'>Explore our vans</Link>
          </blockquote>
        </article>
      </section>
    </>
  );
};

export default About;
