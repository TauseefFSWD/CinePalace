import React from "react";
import "./TVShows.css"; // Optional: Add styles specific to the TV Shows page
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import images for all TV shows
import show1Img from "../images/show1.jpg";
import show2Img from "../images/show2.jpg";
import show3Img from "../images/show3.jpg";
import show4Img from "../images/show4.jpg";
import show5Img from "../images/show5.jpg";
import show6Img from "../images/show6.jpg";
import show7Img from "../images/show7.jpg";
import show8Img from "../images/show8.jpg";
import show9Img from "../images/show9.jpg";
import show10Img from "../images/show10.jpg";
import show11Img from "../images/show11.jpg";
import show12Img from "../images/show12.jpg";
import show13Img from "../images/show13.jpg";
import show14Img from "../images/show14.jpg";
import show15Img from "../images/show15.jpg";
import show16Img from "../images/show16.jpg";
import show17Img from "../images/show17.jpg";
import show18Img from "../images/show18.jpg";
import show19Img from "../images/show19.jpg";
import show20Img from "../images/show20.jpg";
import show21Img from "../images/show21.jpg";
import show22Img from "../images/show22.jpg";
import show23Img from "../images/show23.jpg";
import show24Img from "../images/show24.jpg";
import show25Img from "../images/show25.jpg";

const tvShowSections = [
  {
    sectionTitle: "Trending TV Shows",
    shows: [
      {
        id: "1",
        title: "Breaking Bad",
        image: show1Img,
        youtubeLink: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        rentLink: "/payment/breaking-bad",
        rentAmount: "₹150",
        description:
          "A high school chemistry teacher turned methamphetamine kingpin.",
      },
      {
        id: "2",
        title: "Game of Thrones",
        image: show2Img,
        youtubeLink: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
        rentLink: "/payment/game-of-thrones",
        rentAmount: "₹200",
        description: "Noble families vie for control of the Iron Throne.",
      },
      {
        id: "3",
        title: "Stranger Things",
        image: show3Img,
        youtubeLink: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        rentLink: "/payment/stranger-things",
        rentAmount: "₹180",
        description:
          "Kids uncover a series of supernatural mysteries in their small town.",
      },
      {
        id: "4",
        title: "The Crown",
        image: show4Img,
        youtubeLink: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
        rentLink: "/payment/the-crown",
        rentAmount: "₹250",
        description: "The reign of Queen Elizabeth II.",
      },
      {
        id: "5",
        title: "The Mandalorian",
        image: show5Img,
        youtubeLink: "https://www.youtube.com/watch?v=aOC8E8z_ifw",
        rentLink: "/payment/the-mandalorian",
        rentAmount: "₹150",
        description: "A lone bounty hunter in the outer reaches of the galaxy.",
      },
    ],
  },
  {
    sectionTitle: "Popular TV Shows",
    shows: [
      {
        id: "6",
        title: "Friends",
        image: show6Img,
        youtubeLink: "https://www.youtube.com/watch?v=hDNNmeeJs1Q",
        rentLink: "/payment/friends",
        rentAmount: "₹120",
        description: "A group of friends living in Manhattan.",
      },
      {
        id: "7",
        title: "The Witcher",
        image: show7Img,
        youtubeLink: "https://www.youtube.com/watch?v=ndl1W4ltcmg",
        rentLink: "/payment/the-witcher",
        rentAmount: "₹170",
        description:
          "A mutated monster-hunter struggles to find his place in a world.",
      },
      {
        id: "8",
        title: "The Office",
        image: show8Img,
        youtubeLink: "https://www.youtube.com/watch?v=xb3_Nq2rXJY",
        rentLink: "/payment/the-office",
        rentAmount: "₹130",
        description: "A mockumentary on a group of typical office workers.",
      },
      {
        id: "9",
        title: "Narcos",
        image: show9Img,
        youtubeLink: "https://www.youtube.com/watch?v=U7elNhHwgBU",
        rentLink: "/payment/narcos",
        rentAmount: "₹180",
        description: "The rise of drug kingpins in Colombia.",
      },
      {
        id: "10",
        title: "Sherlock",
        image: show10Img,
        youtubeLink: "https://www.youtube.com/watch?v=qlcWFoNqZHc",
        rentLink: "/payment/sherlock",
        rentAmount: "₹190",
        description:
          "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
      },
    ],
  },
  {
    sectionTitle: "Top-Rated Series",
    shows: [
      {
        id: "11",
        title: "The Boys",
        image: show11Img,
        youtubeLink: "https://www.youtube.com/watch?v=MqPz9H_Hd3M",
        rentLink: "/payment/the-boys",
        rentAmount: "₹160",
        description:
          "A group of vigilantes sets out to take down corrupt superheroes.",
      },
      {
        id: "12",
        title: "Westworld",
        image: show12Img,
        youtubeLink: "https://www.youtube.com/watch?v=IuS5huqOND4",
        rentLink: "/payment/westworld",
        rentAmount: "₹170",
        description:
          "A dark odyssey about the dawn of artificial consciousness.",
      },
      {
        id: "13",
        title: "Dark",
        image: show13Img,
        youtubeLink: "https://www.youtube.com/watch?v=rrwycJ08PSA",
        rentLink: "/payment/dark",
        rentAmount: "₹200",
        description:
          "A family saga with a supernatural twist, set in a German town.",
      },
      {
        id: "14",
        title: "Peaky Blinders",
        image: show14Img,
        youtubeLink: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        rentLink: "/payment/peaky-blinders",
        rentAmount: "₹150",
        description: "A gangster family epic set in 1919 Birmingham.",
      },
      {
        id: "15",
        title: "Black Mirror",
        image: show15Img,
        youtubeLink: "https://www.youtube.com/watch?v=jROLrhQkK78",
        rentLink: "/payment/black-mirror",
        rentAmount: "₹150",
        description:
          "An anthology series exploring a twisted, high-tech multiverse.",
      },
    ],
  },
  {
    sectionTitle: "Featured TV Shows",
    shows: [
      {
        id: "16",
        title: "Chernobyl",
        image: show16Img,
        youtubeLink: "https://www.youtube.com/watch?v=s9APLXM9Ei8",
        rentLink: "/payment/chernobyl",
        rentAmount: "₹160",
        description:
          "A dramatization of the true story of one of the worst man-made catastrophes in history.",
      },
      {
        id: "17",
        title: "The Handmaid's Tale",
        image: show17Img,
        youtubeLink: "https://www.youtube.com/watch?v=dKoIPuifJvE",
        rentLink: "/payment/handmaids-tale",
        rentAmount: "₹170",
        description:
          "Set in a dystopian future, women are forced into servitude.",
      },
      {
        id: "18",
        title: "Money Heist",
        image: show18Img,
        youtubeLink: "https://www.youtube.com/watch?v=hMANIarjT50",
        rentLink: "/payment/money-heist",
        rentAmount: "₹200",
        description:
          "A criminal mastermind plans the biggest heist in history.",
      },
      {
        id: "19",
        title: "Fargo",
        image: show19Img,
        youtubeLink: "https://www.youtube.com/watch?v=Ke4zqM8Kxfg",
        rentLink: "/payment/fargo",
        rentAmount: "₹190",
        description:
          "Various chronicles of deception, intrigue, and murder in and around frozen Minnesota.",
      },
      {
        id: "20",
        title: "The Simpsons",
        image: show20Img,
        youtubeLink: "https://www.youtube.com/watch?v=sGnFnm4mrdI",
        rentLink: "/payment/the-simpsons",
        rentAmount: "₹100",
        description:
          "The satiric adventures of a working-class family in the town of Springfield.",
      },
    ],
  },
  {
    sectionTitle: "Fan Favorites",
    shows: [
      {
        id: "21",
        title: "House of Cards",
        image: show21Img,
        youtubeLink: "https://www.youtube.com/watch?v=e6El7tD8kG0",
        rentLink: "/payment/house-of-cards",
        rentAmount: "₹200",
        description:
          "A ruthless politician will stop at nothing to conquer Washington D.C.",
      },
      {
        id: "22",
        title: "The Umbrella Academy",
        image: show22Img,
        youtubeLink: "https://www.youtube.com/watch?v=0DAmWHxeoKw",
        rentLink: "/payment/umbrella-academy",
        rentAmount: "₹170",
        description:
          "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
      },
      {
        id: "23",
        title: "Lucifer",
        image: show23Img,
        youtubeLink: "https://www.youtube.com/watch?v=X4bF_quwNtw",
        rentLink: "/payment/lucifer",
        rentAmount: "₹150",
        description: "The Devil decides to take a vacation from Hell.",
      },
      {
        id: "24",
        title: "Ozark",
        image: show24Img,
        youtubeLink: "https://www.youtube.com/watch?v=5hAXVqrljbs",
        rentLink: "/payment/ozark",
        rentAmount: "₹180",
        description:
          "A financial planner relocates his family to the Ozarks to launder money.",
      },
      {
        id: "25",
        title: "13 Reasons Why",
        image: show25Img,
        youtubeLink: "https://www.youtube.com/watch?v=JebwYGn5Z3E",
        rentLink: "/payment/13-reasons-why",
        rentAmount: "₹160",
        description:
          "Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah.",
      },
    ],
  },
];

const TVShows = () => {
  return (
    <div>
      <Navbar />
      <div className="tvshows-container">
        <h1>TV Shows</h1>
        <p>Browse a selection of popular TV shows.</p>
        {tvShowSections.map((section) => (
          <div key={section.sectionTitle} className="tvshow-section">
            <h2>{section.sectionTitle}</h2>
            <div className="tvshows-grid">
              {section.shows.map((show) => (
                <div key={show.id} className="tvshow-card">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="tvshow-image"
                  />
                  <h3>{show.title}</h3>
                  <p>{show.description}</p>
                  <a
                    href={show.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watch-trailer-button"
                  >
                    Watch Trailer
                  </a>
                  <Link
                    to={`/payment?title=${encodeURIComponent(
                      show.title
                    )}&amount=${encodeURIComponent(show.rentAmount)}`}
                    className="rent-button"
                  >
                    Rent for {show.rentAmount}
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

export default TVShows;
