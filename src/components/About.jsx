import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About CinePalace</h1>
        <p>
          Welcome to <strong>CinePalace</strong>, your ultimate destination for
          an immersive cinematic experience. Our platform is dedicated to
          bringing you the finest collection of movies and TV shows, from
          timeless classics to the latest blockbusters. At CinePalace, we
          believe in the magic of movies and the power they hold to inspire,
          entertain, and connect us all.
        </p>

        <h2>Our Mission</h2>
        <p>
          At CinePalace, our mission is to create a seamless and enjoyable
          movie-watching experience for all our users. We are committed to
          providing high-quality content with easy access and a user-friendly
          interface that allows you to explore and enjoy a diverse range of
          films and shows. Our platform is designed to cater to movie lovers of
          all tastes and preferences, ensuring there’s something for everyone.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Extensive Movie Library:</strong> Explore a vast collection
            of movies from various genres, including Action, Drama, Comedy,
            Thriller, Horror, and more.
          </li>
          <li>
            <strong>Curated TV Shows:</strong> Dive into our selection of
            popular TV shows, carefully curated to provide you with hours of
            entertainment.
          </li>
          <li>
            <strong>High-Quality Streaming:</strong> Enjoy your favorite movies
            and shows in HD quality, with smooth streaming and minimal
            buffering.
          </li>
          <li>
            <strong>Exclusive Trailers:</strong> Get a sneak peek at the latest
            releases with our exclusive trailer section, featuring upcoming
            movies and shows.
          </li>
          <li>
            <strong>Flexible Renting Options:</strong> Rent your favorite movies
            and shows at affordable prices, with options to watch instantly or
            save for later.
          </li>
          <li>
            <strong>User-Centric Experience:</strong> Our website is designed
            with you in mind, offering a clean, intuitive layout and responsive
            design that works seamlessly across all devices.
          </li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          CinePalace aims to be more than just a movie website. We envision a
          platform where movie enthusiasts can come together, share their
          passion, and discover new stories. Whether you’re a casual viewer or a
          die-hard cinephile, CinePalace is your palace of entertainment, where
          the love for movies reigns supreme.
        </p>

        <h2>Join Us</h2>
        <p>
          Join the CinePalace community today and embark on a cinematic journey
          like no other. Whether you’re here to catch up on the latest releases,
          revisit old favorites, or explore hidden gems, CinePalace is your
          gateway to the world of movies.
        </p>
        <p className="creator-info">
          This website is created by <strong>TAUSEEF AKBAR ALI SHAIKH</strong>,
          a passionate developer dedicated to delivering top-notch entertainment
          experiences. Thank you for choosing CinePalace!
        </p>

        <p>
          <strong>CinePalace</strong> – Where Movies Come to Life.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
