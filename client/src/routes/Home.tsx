import Hero from "../components/Hero";
import MenuCarousel from "../components/MenuCarousel";
import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews.json";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 pt-16 min-[1050px]:pt-0 pb-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Welcome to Kon’ya Japan
          </h2>
          <p className="text-neutral-700">
            Traditional Japanese cuisine with a warm, family-friendly
            atmosphere.
          </p>
        </div>

        <MenuCarousel />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} rating={r.rating} text={r.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
