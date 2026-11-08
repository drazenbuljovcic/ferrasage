import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header, Footer } from "../components";

// Placeholder page: copy this file as a starting point for a new route.
function MockPage() {
  return (
    <>
      <Helmet>
        <title>Mock page | Ferrasage</title>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-slate-300">
        <Header onNavigate={() => {}} />

        <main
          data-id="mock-page"
          className="flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 text-center"
        >
          <p className="mb-4 text-lg font-semibold tracking-wide text-[#8fa3c7]">
            - Mock page -
          </p>
          <h1 tabIndex={0} className="mb-6 text-4xl font-bold text-[var(--color-primary)] md:text-6xl">
            Coming soon
          </h1>
          <p className="mb-10 max-w-xl text-lg text-slate-400">
            This is a placeholder component for a new route.
          </p>
          <Link
            to="/"
            className="rounded-lg bg-[var(--color-primary)] px-8 py-4 font-medium text-white transition-all hover:scale-105"
          >
            Back to home
          </Link>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MockPage;
