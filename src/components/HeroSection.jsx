export default function HeroSection() {
  return (
    <div
      id="intro-example"
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">
              Resources and connections that helps you grow!{" "}
            </h1>
            <p className="mb-4">
              Deepfusion is a platform for entrepreneurs, freelancers, business
              owners and marketers who are interested in getting access to
              resources and connections that helps them grow.
            </p>
            <a
              className="btn btn-outline-light btn-lg m-2"
              href="#"
              role="button"
              rel="nofollow"
              target="_blank"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
