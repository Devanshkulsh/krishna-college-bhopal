import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative overflow-hidden bg-[#168486]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-[#d68a1f]/10" />

        <div className="relative mx-auto flex min-h-[220px] max-w-[1720px] items-center justify-center px-4 text-center sm:px-6 lg:min-h-[250px] lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f2b45d] sm:text-[13px]">
              Shri Krishna Ayurvedic Hospital
            </p>
            <h1 className="mt-5 text-[36px] font-extrabold leading-none text-white sm:text-[44px] lg:text-[50px]">
              Page Not Found
            </h1>
          </div>
        </div>

        <div className="h-[4px] w-full bg-[#d68a1f]" />
      </section>

      <section className="py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-3xl font-bold text-[#14245f]">
            The page you requested is not available.
          </h2>
          <p className="mt-4 text-[16px] leading-8 text-gray-600">
            Please use the navigation menu to continue exploring the website.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex rounded-xl bg-[#e98b0c] px-7 py-4 font-semibold !text-white transition hover:bg-[#0a756d]"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
