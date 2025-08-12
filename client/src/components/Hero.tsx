export default function Hero() {
  return (
    <section className="relative">
      <video
        className="w-full h-[45vh] lg:h-[60vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className="text-white text-3xl lg:text-5xl font-semibold drop-shadow">
          Kon’ya Japan
        </h1>
      </div>
    </section>
  );
}
