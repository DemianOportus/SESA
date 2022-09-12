import christmas from "./images/event-img/christmas.jpeg";
import welcomeweek from "./images/event-img/welcomeweek.jpeg";

const events = [
  {
    id: 1,
    img: welcomeweek,
    title: "Welcome Everyone",
    description:
      "Be welcomed by uOttawa's favorite Software Engineering Student Association!",
    ButtonLeadTo: "/events",
  },

  {
    id: 3,
    img: christmas,
    title: "Christmas Challenge",
    description:
      "Create the most beautiful Christmas website. Winner gets $1000.",
    ButtonLeadTo: "/events",
  },
];

export default events;
