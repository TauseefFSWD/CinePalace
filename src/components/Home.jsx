import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import movie images
import inceptionImg from "../assets/m1.jpg";
import matrixImg from "../assets/m2.jpg";
import interstellarImg from "../assets/m3.jpg";
import avatarImg from "../assets/m4.jpg";
import titanicImg from "../assets/m5.jpg";
import godfatherImg from "../assets/m6.jpg";
import pulpFictionImg from "../assets/m7.jpg";
import fightClubImg from "../assets/m8.jpg";
import darkKnightImg from "../assets/m9.jpg";
import mm10 from "../assets/m10.jpg";
import mm11 from "../assets/m11.jpg";
import mm12 from "../assets/m12.jpg";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const response = await axios.get("https://netback.onrender.com/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsername(response.data.username);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigate("/");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Movie data for each section
  const movieSections = [
    {
      sectionTitle: "Action Movies",
      movies: [
        {
          id: "1",
          title: "Inception",
          image: inceptionImg,
          youtubeLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
          rentLink: "/payment/inception",
          rentAmount: "₹180",
          description:
            "A skilled thief, the absolute best in the dangerous art of extraction, is offered a chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
        },
        {
          id: "2",
          title: "The Matrix",
          image: matrixImg,
          youtubeLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
          rentLink: "/payment/matrix",
          rentAmount: "₹190",
          description:
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        },
        {
          id: "3",
          title: "Interstellar",
          image: interstellarImg,
          youtubeLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
          rentLink: "/payment/interstellar",
          rentAmount: "₹150",
          description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        },
      ],
    },
    {
      sectionTitle: "Romantic Movies",
      movies: [
        {
          id: "4",
          title: "Avatar",
          image: avatarImg,
          youtubeLink: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
          rentLink: "/payment/avatar",
          rentAmount: "₹140",
          description:
            "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        },
        {
          id: "5",
          title: "Titanic",
          image: titanicImg,
          youtubeLink: "https://www.youtube.com/watch?v=2e-eXJ6K64E",
          rentLink: "/payment/titanic",
          rentAmount: "₹100",
          description:
            "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        },
        {
          id: "6",
          title: "The Godfather",
          image: godfatherImg,
          youtubeLink: "https://www.youtube.com/watch?v=sY1S34973zA",
          rentLink: "/payment/godfather",
          rentAmount: "₹180",
          description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        },
      ],
    },
    {
      sectionTitle: "Drama Movies",
      movies: [
        {
          id: "7",
          title: "Pulp Fiction",
          image: pulpFictionImg,
          youtubeLink: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
          rentLink: "/payment/pulp-fiction",
          rentAmount: "₹180",
          description:
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        },
        {
          id: "8",
          title: "Fight Club",
          image: fightClubImg,
          youtubeLink: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
          rentLink: "/payment/fight-club",
          rentAmount: "₹280",
          description:
            "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        },
        {
          id: "9",
          title: "The Dark Knight",
          image: darkKnightImg,
          youtubeLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
          rentLink: "/payment/dark-knight",
          rentAmount: "₹200",
          description:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, pushing Batman to his limits.",
        },
      ],
    },
    {
      sectionTitle: "Comedy Movies",
      movies: [
        {
          id: "10",
          title: "Superbad",
          image: mm10,
          youtubeLink: "https://www.youtube.com/watch?v=4eaPqF3F6Bo",
          rentLink: "/payment/superbad",
          rentAmount: "₹180",
          description:
            "Two high school friends navigate their last days of school and attempt to make the most of their remaining time together.",
        },
        {
          id: "11",
          title: "The Hangover",
          image: mm11,
          youtubeLink: "https://www.youtube.com/watch?v=2T5C9tPq-Ls",
          rentLink: "/payment/hangover",
          rentAmount: "₹190",
          description:
            "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing.",
        },
        {
          id: "12",
          title: "Step Brothers",
          image: mm12,
          youtubeLink: "https://www.youtube.com/watch?v=6t8h4S9L80A",
          rentLink: "/payment/step-brothers",
          rentAmount: "₹120",
          description:
            "Two middle-aged, lazy men become stepbrothers when their single parents marry, leading to a series of comedic mishaps.",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </header>
        <section className="movies-sections">
          {movieSections.map((section, index) => (
            <div key={index} className="movie-section">
              <h2>{section.sectionTitle}</h2>
              <div className="movies-list">
                {section.movies.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="movie-image"
                    />
                    <div className="movie-details">
                      <h3>{movie.title}</h3>
                      <p>{movie.description}</p>
                      <div className="button-container">
                        <a
                          href={movie.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="play-button"
                        >
                          Watch Trailer
                        </a>
                        <button className="rent-button">
                          {" "}
                          <a
                            href={`/payment?title=${encodeURIComponent(
                              movie.title
                            )}&amount=${encodeURIComponent(movie.rentAmount)}`}
                            className="rent-button"
                          >
                            Rent for {movie.rentAmount}
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
