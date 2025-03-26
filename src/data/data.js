import { ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, TabletMac } from "@mui/icons-material"

import post1 from "../images/Feed/post1.webp"
import post2 from "../images/Feed/post2.jpeg"
import post3 from "../images/Feed/post3.jpeg"
import post4 from "../images/Feed/post4.webp"

export const menuItems = [
  { icon: Home, text: "Home" },
  { icon: Person, text: "Friends" },
  { icon: List, text: "Lists" },
  { icon: PhotoCamera, text: "Camera" },
  { icon: PlayCircleOutline, text: "Videos" },
  { icon: TabletMac, text: "Apps" },
  { icon: Settings, text: "Settings" },
  { icon: ExitToApp, text: "Logout" },
]

export const posts = [
  {
    image: post1,
    title: "The Iconic Landmark of London",
    text: "Tower Bridge is one of London's most famous landmarks, spanning the River Thames since its completion in 1894. This iconic bascule and suspension bridge is known for its distinctive twin towers and stunning Victorian Gothic architecture. It was designed to allow ships to pass through by raising its central section, a feature still in use today.",
  },
  {
    image: post2,
    title: "Riding the Waves Around the World",
    text: "Surfers rely on balance, strength, and technique to catch waves, using different board types like shortboards for tricks and longboards for a smoother ride. The sport offers not only a physical challenge but also a deep connection with nature. Whether you're a beginner learning in gentle waters or an expert riding massive waves, surfing is an exciting way to experience the power of the ocean.",
  },
  {
    image: post3,
    title: "The Hamburger: A Worldwide Favorite",
    text: "The hamburger is one of the most popular and beloved foods around the world. Traditionally made with a juicy beef patty, lettuce, tomato, cheese, and a soft bun, it has evolved into countless variations. From classic American diners to gourmet restaurants, burgers come in many styles, including chicken, vegetarian, and even plant-based options.",
  },
  {
    image: post4,
    title: "Steak: A Classic Delight for Meat Lovers",
    text: "Steak is a beloved dish made from high-quality cuts of beef, cooked to perfection according to personal preference—rare, medium, or well-done. Popular cuts include ribeye, sirloin, filet mignon, and T-bone, each offering a unique texture and flavor.",
  },
]