import React from "react";
import "./Movies.css"; // Optional: Add styles specific to the Movies page
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import images for all movies
import blackPantherImg from "../images/a1.jpg";
import avengersImg from "../images/a2.jpg";
import inceptionImg from "../images/a3.jpg";
import parasiteImg from "../images/a4.jpg";
import theSocialNetworkImg from "../images/a5.jpg";
import granTurismoImg from "../images/a6.jpg";
import laLaLandImg from "../images/a7.jpg";
import goodFellasImg from "../images/a8.jpg";
import theShiningImg from "../images/a9.jpg";
import ingloriousBasterdsImg from "../images/a10.jpg";
import g from "../images/b1.jpg";
import driveImg from "../images/b2.jpg";
import whiplashImg from "../images/b3.jpg";
import arrivalImg from "../images/b4.jpg";
import moonlightImg from "../images/b5.jpg";
import theShapeOfWaterImg from "../images/b6.jpg";
import birdBoxImg from "../images/b7.jpg";
import theLighthouseImg from "../images/b8.jpg";
import theWitchImg from "../images/b9.jpg";
import theBabadookImg from "../images/b10.jpg";

import bollywoodMovie1Img from "../images/c1.jpg";
import bollywoodMovie2Img from "../images/c2.jpg";
import bollywoodMovie4Img from "../images/c4.jpg";
import bollywoodMovie3Img from "../images/c3.jpg";
import bollywoodMovie5Img from "../images/c5.jpg";
import bollywoodMovie6Img from "../images/c6.jpg";
import bollywoodMovie7Img from "../images/c7.jpg";
import bollywoodMovie8Img from "../images/c8.jpg";

import h from "../images/c9.jpg";
import f from "../images/c10.jpg";

const movieSections = [
  {
    sectionTitle: "Action Movies",
    movies: [
      {
        id: "1",
        title: "Black Panther",
        image: blackPantherImg,
        youtubeLink: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        rentLink: "/payment/black-panther",
        rentAmount: "₹150",
        description:
          "T'Challa, the Black Panther, returns home to Wakanda to take the throne after his father’s death.",
      },
      {
        id: "2",
        title: "Avengers: Endgame",
        image: avengersImg,
        youtubeLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        rentLink: "/payment/avengers-endgame",
        rentAmount: "₹200",
        description:
          "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      },
      {
        id: "3",
        title: "Inception",
        image: inceptionImg,
        youtubeLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        rentLink: "/payment/inception",
        rentAmount: "₹180",
        description:
          "A thief who enters the dreams of others to steal secrets must perform an inception to have his criminal history erased.",
      },
      {
        id: "4",
        title: "Parasite",
        image: parasiteImg,
        youtubeLink: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
        rentLink: "/payment/parasite",
        rentAmount: "₹250",
        description:
          "A dark comedy about a family that schemes to become employed by a wealthy family.",
      },
      {
        id: "5",
        title: "The Social Network",
        image: theSocialNetworkImg,
        youtubeLink: "https://www.youtube.com/watch?v=lB95KLmpLR4",
        rentLink: "/payment/social-network",
        rentAmount: "₹150",
        description:
          "The story of the founders of the social-networking website, Facebook.",
      },
    ],
  },
  {
    sectionTitle: "Thriller Movies",
    movies: [
      {
        id: "6",
        title: "Gran Turismo",
        image: granTurismoImg,
        youtubeLink: "https://www.youtube.com/watch?v=w5tWYmIOWei",
        rentLink: "/payment/gran-turismo",
        rentAmount: "₹170",
        description:
          "Based on the true story of a teenager who dreams of becoming a professional race car driver.",
      },
      {
        id: "7",
        title: "La La Land",
        image: laLaLandImg,
        youtubeLink: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
        rentLink: "/payment/la-la-land",
        rentAmount: "₹140",
        description:
          "A jazz musician and an aspiring actress fall in love but struggle to maintain their relationship as they pursue their dreams.",
      },
      {
        id: "8",
        title: "Goodfellas",
        image: goodFellasImg,
        youtubeLink: "https://www.youtube.com/watch?v=qo5C7iSsb5E",
        rentLink: "/payment/goodfellas",
        rentAmount: "₹190",
        description:
          "The true story of Henry Hill, a mobster who rises through the ranks of the Mafia.",
      },
      {
        id: "9",
        title: "The Shining",
        image: theShiningImg,
        youtubeLink: "https://www.youtube.com/watch?v=5Cb3ik6zP2I",
        rentLink: "/payment/shining",
        rentAmount: "₹160",
        description:
          "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.",
      },
      {
        id: "10",
        title: "Inglourious Basterds",
        image: ingloriousBasterdsImg,
        youtubeLink: "https://www.youtube.com/watch?v=KnrRy6kS6Y8",
        rentLink: "/payment/inglourious-basterds",
        rentAmount: "₹180",
        description:
          "A group of Jewish-American soldiers plan to assassinate Nazi leaders in occupied France.",
      },
    ],
  },
  {
    sectionTitle: "Sci-Fi Movies",
    movies: [
      {
        id: "11",
        title: "1917",
        image: g,
        youtubeLink: "https://www.youtube.com/watch?v=gZjX3vVrhGk",
        rentLink: "/payment/1917",
        rentAmount: "₹190",
        description:
          "As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
      },
      {
        id: "12",
        title: "Drive",
        image: driveImg,
        youtubeLink: "https://www.youtube.com/watch?v=KHiXESGsM1I",
        rentLink: "/payment/drive",
        rentAmount: "₹160",
        description:
          "A Hollywood stunt driver who moonlights as a getaway driver finds himself pulled into a dangerous underworld.",
      },
      {
        id: "13",
        title: "Whiplash",
        image: whiplashImg,
        youtubeLink: "https://www.youtube.com/watch?v=7d_jQycdQJ8",
        rentLink: "/payment/whiplash",
        rentAmount: "₹140",
        description:
          "A young drummer enrols at a music conservatory where he encounters a demanding instructor.",
      },
      {
        id: "14",
        title: "Arrival",
        image: arrivalImg,
        youtubeLink: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
        rentLink: "/payment/arrival",
        rentAmount: "₹180",
        description:
          "A linguist is recruited by the military to assist in translating alien communications.",
      },
      {
        id: "15",
        title: "Moonlight",
        image: moonlightImg,
        youtubeLink: "https://www.youtube.com/watch?v=9NJj12tJzqc",
        rentLink: "/payment/moonlight",
        rentAmount: "₹200",
        description:
          "A young African-American man grapples with his identity and sexuality while growing up in Miami.",
      },
    ],
  },
  {
    sectionTitle: "Horror Movies",
    movies: [
      {
        id: "16",
        title: "The Shape of Water",
        image: theShapeOfWaterImg,
        youtubeLink: "https://www.youtube.com/watch?v=XFYWazblaUA",
        rentLink: "/payment/shape-of-water",
        rentAmount: "₹200",
        description:
          "A mute woman who works as a cleaning lady at a high-security government laboratory develops a relationship with a mysterious amphibian creature.",
      },
      {
        id: "17",
        title: "Bird Box",
        image: birdBoxImg,
        youtubeLink: "https://www.youtube.com/watch?v=6o7FjH7kB0Y",
        rentLink: "/payment/bird-box",
        rentAmount: "₹180",
        description:
          "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children must make it through a forest and river blindfolded to avoid the supernatural entity.",
      },
      {
        id: "18",
        title: "The Lighthouse",
        image: theLighthouseImg,
        youtubeLink: "https://www.youtube.com/watch?v=Hywz9F9hRFQ",
        rentLink: "/payment/lighthouse",
        rentAmount: "₹190",
        description:
          "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
      },
      {
        id: "19",
        title: "The Witch",
        image: theWitchImg,
        youtubeLink: "https://www.youtube.com/watch?v=iQXmlfQfWm8",
        rentLink: "/payment/witch",
        rentAmount: "₹160",
        description:
          "A Puritan family encounters forces of evil in the woods beyond their New England farm.",
      },
      {
        id: "20",
        title: "The Babadook",
        image: theBabadookImg,
        youtubeLink: "https://www.youtube.com/watch?v=k5mI3yXKsl4",
        rentLink: "/payment/babadook",
        rentAmount: "₹170",
        description:
          "A mother and her son are haunted by a sinister presence that emerges from a mysterious book.",
      },
    ],
  },
  {
    sectionTitle: "Bollywood Movies",
    movies: [
      {
        id: "21",
        title: "Dil Chahta Hai",
        image: bollywoodMovie1Img,
        youtubeLink: "https://www.youtube.com/watch?v=bcDpLX2NEMM",
        rentLink: "/payment/dil-chahta-hai",
        rentAmount: "₹150",
        description:
          "Three inseparable childhood friends, now in their 20s, must deal with new friendships, romance, and challenges.",
      },
      {
        id: "22",
        title: "3 Idiots",
        image: bollywoodMovie2Img,
        youtubeLink: "https://www.youtube.com/watch?v=K0eDlSxSZEk",
        rentLink: "/payment/3-idiots",
        rentAmount: "₹180",
        description:
          "Three friends embark on a journey to find their estranged friend while reflecting on their time in college.",
      },
      {
        id: "23",
        title: "Kabhi Khushi Kabhie Gham",
        image: bollywoodMovie3Img,
        youtubeLink: "https://www.youtube.com/watch?v=p9NxNdmg76Q",
        rentLink: "/payment/kabhi-khushi-kabhie-gham",
        rentAmount: "₹200",
        description:
          "A family drama about the complex relationships within an Indian family and the tensions caused by love and conflict.",
      },
      {
        id: "24",
        title: "Jab We Met",
        image: bollywoodMovie4Img,
        youtubeLink: "https://www.youtube.com/watch?v=SE4lN0wHJks",
        rentLink: "/payment/jab-we-met",
        rentAmount: "₹150",
        description:
          "A chance encounter between a businessman and a bubbly girl changes their lives forever.",
      },
      {
        id: "25",
        title: "Zindagi Na Milegi Dobara",
        image: bollywoodMovie5Img,
        youtubeLink: "https://www.youtube.com/watch?v=AB3RkVu5pfU",
        rentLink: "/payment/zindagi-na-milegi-dobara",
        rentAmount: "₹170",
        description:
          "Three friends set out on a road trip across Spain and discover the true meaning of life and friendship.",
      },
      {
        id: "26",
        title: "Queen",
        image: bollywoodMovie6Img,
        youtubeLink: "https://www.youtube.com/watch?v=ZbWkXkZnS6A",
        rentLink: "/payment/queen",
        rentAmount: "₹160",
        description:
          "A young woman embarks on a solo honeymoon trip to Europe after her fiancé calls off their wedding.",
      },
      {
        id: "27",
        title: "Piku",
        image: bollywoodMovie7Img,
        youtubeLink: "https://www.youtube.com/watch?v=MB3p5js7aDA",
        rentLink: "/payment/piku",
        rentAmount: "₹150",
        description:
          "A daughter struggles to balance her life between her career and caring for her aging father.",
      },
      {
        id: "28",
        title: "Barfi!",
        image: bollywoodMovie8Img,
        youtubeLink: "https://www.youtube.com/watch?v=RoJe1Qh6HEI",
        rentLink: "/payment/barfi",
        rentAmount: "₹180",
        description:
          "A love story about a mute and deaf man and the women who come into his life.",
      },
      {
        id: "29",
        title: "Chakde! India",
        image: h,
        youtubeLink: "https://www.youtube.com/watch?v=_2WvXUxxN_I",
        rentLink: "/payment/chakde-india",
        rentAmount: "₹200",
        description:
          "A former hockey player coaches the Indian women's national hockey team to victory in the World Cup.",
      },
      {
        id: "30",
        title: "Lagaan",
        image: f,
        youtubeLink: "https://www.youtube.com/watch?v=EZINgOsvfFM",
        rentLink: "/payment/lagaan",
        rentAmount: "₹190",
        description:
          "In 1890s India, villagers challenge British colonizers to a game of cricket to avoid a harsh tax.",
      },
    ],
  },
];

const Movies = () => {
  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <h1>Movies</h1>
        <p>Here you can browse a selection of popular movies.</p>
        {movieSections.map((section) => (
          <div key={section.sectionTitle} className="movie-section">
            <h2>{section.sectionTitle}</h2>
            <div className="movies-grid">
              {section.movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                  <a
                    href={movie.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watch-trailer-button"
                  >
                    Watch Trailer
                  </a>
                  <Link
                    to={`/payment?title=${encodeURIComponent(
                      movie.title
                    )}&amount=${encodeURIComponent(movie.rentAmount)}`}
                    className="rent-button"
                  >
                    Rent for {movie.rentAmount}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
