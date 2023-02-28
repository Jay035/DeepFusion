import { Container } from "react-bootstrap";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container className="my-4">
        <h3>Discover the benefits </h3>
        <div className="resources">
          <h5>Resources</h5>
          <p>
            The business landscape is challenging and keeps evolving every day.
            This means that entrepreneurs, freelancers, business owners and
            marketers need to keep learning in order to improve their knowledge
            and be armed with the right information that helps them grow. Get
            access to strategies and curated content which includes engaging
            articles, podcasts and videos to help you gain insight on different
            topics.
          </p>
        </div>
        <div className="connections">
          <h5>Connections</h5>
          <p>
            Connect, chat, ask and answer questions, share ideas and
            collaborate. We build and encourage the sense of belonging that
            being part of a community can generate.
          </p>
        </div>
        <div className="events">
          <h5>Events</h5>
          <p>
            Get access to exclusive events where you can learn, network and have
            fun.
          </p>
        </div>
        <div className="mentorship">
          <h5>Mentorship</h5>
          <p>
            Get access to seasoned professionals who will coach and offer expert
            advice and guidance to match your zeal.
          </p>
        </div>
        <div className="investors">
          <h5>Investors</h5>
          <p>
            Find the right investors for your business and get the support you
            need to start a new business or grow an existing one. Get access to
            our database and find a list of investors from around the world.
          </p>
        </div>
        <div className="">
          <h5>Helping you grow!</h5>
          <p>
            Building a business is challenging. We help ambitious entrepreneurs,
            freelancers, marketers and business owners to get access to the
            resources and connections they need to grow.
          </p>
          <a
            className="btn btn-outline-dark btn-md m-2"
            href="#"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            Subscribe
          </a>
        </div>
      </Container>
    </main>
  );
}
