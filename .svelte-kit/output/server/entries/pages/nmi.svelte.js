import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../chunks/index-2835083a.js";
import { H as Header } from "../../chunks/header-7ea0180d.js";
var blackjack_1 = "/_app/assets/blackjack_1-0943b4a5.png";
var blackjack_2 = "/_app/assets/blackjack_2-ceffb53e.png";
var fridge_1 = "/_app/assets/fridge_1-f248dd56.png";
var fridge_2 = "/_app/assets/fridge_2-c73fe718.png";
var crazy_crypto = "/_app/assets/crazy-crypto-d0eaac53.png";
var egoh_site = "/_app/assets/egoh-site-e667f64f.png";
var nmi_logo = "/_app/assets/nmi-logo-4001a5fd.jpeg";
const Nmi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, { initTransparent: true }, {}, {})}
<div class="${"flex flex-col justify-center w-full"}"><div class="${"hero min-h-screen"}"><div class="${"hero-content lg:flex-row-reverse flex-col-reverse"}"><div class="${"flex-col"}"><div class="${"mockup-phone border-primary w-76 z-40"}"><div class="${"display"}"><div class="${"artboard artboard-demo phone-1 z-30"}"><div class="${"carousel z-20"}"><div id="${"rich1"}" class="${"carousel-item w-full z-20"}"><img${add_attribute("src", blackjack_1, 0)} alt="${"blackjack 1"}" class="${"mr-8 rounded"}"></div>
                <div id="${"rich2"}" class="${"carousel-item w-full z-20"}"><img${add_attribute("src", blackjack_2, 0)} alt="${"blackjack 2"}" class="${"mr-8 rounded"}"></div>
                <div id="${"rich3"}" class="${"carousel-item w-full z-20"}"><img${add_attribute("src", fridge_2, 0)} alt="${"fridge 1"}" class="${"mr-8 rounded"}"></div>
                <div id="${"rich4"}" class="${"carousel-item w-full z-20"}"><img${add_attribute("src", fridge_1, 0)} alt="${"fridge 2"}" class="${"mr-8 rounded"}"></div></div></div></div></div>
        <div class="${"flex justify-center py-2 gap-2"}"><a href="${"#rich1"}" class="${"btn btn-xs"}">1</a>
          <a href="${"#rich2"}" class="${"btn btn-xs"}">2</a>
          <a href="${"#rich3"}" class="${"btn btn-xs"}">3</a>
          <a href="${"#rich4"}" class="${"btn btn-xs"}">4</a></div></div>
      <div><h1 class="${"text-5xl font-bold"}">Rich Media Production</h1>
        <p class="${"py-6 pr-6"}">The Rich Media Production course was my first experience with a
          development course at the New Media Institute. I developed skills in
          native application development in the Xcode IDE using Swift. I found
          the syntax of Swift to be very intuitive and fun to work with. This
          course sparked a passion for mobile development that I am pursuing
          through freelance work at UGA. I also created an iOS development
          course targeted at middle school coders that was inspired by this
          class.
        </p>
        <p class="${"py-6 pr-6"}">The first app I am featuring here is my version of the card game,
          blackjack. I wanted to create a game in Swift, because I\u2019ve always
          been interested in all the game logic that goes on behind the scenes
          in order to make your favorite games work. This app taught me a lot
          about data structures in Swift and how to manage ObservableObjects. It
          also taught me that I am very bad at blackjack and should stay as far
          away from Las Vegas as possible.
        </p>
        <p class="${"py-6 pr-6"}">One of my favorite applications that I\u2019ve created in this course was
          the \u201CMy Fridge\u201D app. This app was much more utility-based than the
          other projects I\u2019v created and it helped me gain a deeper
          understanding of many technical concepts in Swift (i.e. Push
          Notifications, App Icons, JSON Requests). I aimed to create a tool
          that could be used to keep track of the items in your fridge and
          remind you (via Push Notifications) when food is about to expire. I
          also utilized a recipe search API in order to give the user custom
          recommendations based on the items in their fridge. I hope to continue
          developing this app outside of the scope of the class and possibly put
          it on the App Store.
        </p></div></div></div>
  <div class="${"divider"}"></div>
  <div class="${"hero min-h-screen"}"><div class="${"hero-content lg:flex-row-reverse flex-col-reverse"}"><div class="${"flex-col"}"><div class="${"mockup-window border bg-base-300 lg:w-128 w-auto"}"><div class="${"flex justify-center bg-base-200"}"><div class="${"carousel"}"><div id="${"adv1"}" class="${"carousel-item w-full"}"><img${add_attribute("src", crazy_crypto, 0)} alt="${""}"></div>
              <div id="${"adv2"}" class="${"carousel-item w-full"}"><img${add_attribute("src", egoh_site, 0)} alt="${""}"></div></div></div></div>
        <div class="${"flex justify-center py-2 gap-2"}"><a href="${"#adv1"}" class="${"btn btn-xs"}">1</a>
          <a href="${"#adv2"}" class="${"btn btn-xs"}">2</a></div></div>
      <div><h1 class="${"text-5xl font-bold"}">Advanced New Media Production</h1>
        <p class="${"py-6 pr-6"}">This course marked my third semester being involved at the New Media
          Institute. I\u2019ve had previous experience using HTML, CSS, and
          Javascript, but this class helped me refine my web development skills
          to the point where I was able to work on a freelance project for my
          final project. I also got a chance to really explore the interesting
          (and extremely frustrating) world of Javascript, and I was surprised
          by what it allowed me to do.
        </p>
        <p class="${"py-6 pr-6"}">One of my favorite projects was my midterm, where I built a page
          tracking the top 200 cryptocurrencies ranked by market capitalization.
          The list view shows each coin\u2019s: rank, name, logo, price, 24 change in
          price, market cap, 24 hour volume, and circulating supply. Each name
          can be clicked that brings you to a dynamic page that pulls deeper
          information for that coin from the CoinGecko API based on the name you
          click. It was fun learning how to use the CoinGecko API and building a
          single page that could be used for all 200 coins.
        </p>
        <p class="${"py-6 pr-6"}">Near the end of the semester, I reached out to a cryptocurrency
          project on Reddit and asked if I could get involved with development.
          One of the team members answered back saying they needed a dashboard
          built tracking relevant statistics for their token. Equipped with my
          new web development skills, I was able to put together the full
          website and host it using Heroku. When I released the website, there
          was an influx of users which quickly started causing issues because of
          the way I was calling the APIs. I put together a fix by pulling the
          data on the dashboard from my own database and hosting a script that
          would update the database every 45 seconds with the current data. It\u2019s
          been such an awesome opportunity to put the skills I learned in this
          class to the test in a real world situation and at the time I posted
          this the website has had 500+ unique visitors.
        </p></div></div></div>
  <div class="${"divider"}"></div>
  <div class="${"hero min-h-screen"}"><div class="${"hero-content lg:flex-row-reverse flex-col-reverse"}"><div><div class="${"mockup-window border bg-base-300 lg:w-128 w-auto"}"><img${add_attribute("src", nmi_logo, 0)} alt="${""}" class="${"w-full"}"></div></div>
      <div><h1 class="${"text-5xl font-bold"}">NMIXperts</h1>
        <p class="${"py-6 pr-6"}">Along with my Advanced New Media Production class this semester, I
          participated in the NMIXperts program where I held office hours two
          times a week and served as a resource for other NMI students to ask
          questions. My area of \u201CXpertise\u201D was development which tends to align
          with the heaviest questions, such as: \u201CCan I build an app that does
          X?\u201D Or more often: \u201CHow do I center this text on my website?\u201D
        </p>
        <p class="${"py-6 pr-6"}">Jokes aside, this was an amazing opportunity as it allowed me to
          explore specific areas of development (i.e. creating passes in the
          Apple Wallet, interacting with HealthKit, etc.) that I probably would
          not have gotten a chance to try in my own projects. And I could do all
          this while assisting my classmates and hopefully making their
          experience with NMI classes better. It was a cool feeling getting
          attached to projects as students I helped came back with more
          questions.
        </p>
        <p class="${"py-6 pr-6"}">I was a coding teacher for 6th - 12th grade kids over the past two
          semesters and lots of the teaching skills I developed while working
          that job carried over to my experience as a student tutor. It\u2019s
          extremely rewarding when someone comes to me with a question and by
          the end of our conversation, they\u2019re able to understand their own
          question and be able to answer it next time.
        </p></div></div></div></div>`;
});
export { Nmi as default };
