export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-300 aspect-[16/6]">
      <video
        className="absolute inset-0 size-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white drop-shadow-lg text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Kon’ya Japan
        </h1>

        {/* NEW subtitle */}
        <p className="mt-3 italic font-semibold tracking-wide drop-shadow text-[color:var(--brand-red)] text-lg sm:text-xl lg:text-2xl">
          Taste Japan Tonight
        </p>
      </div>
    </section>
  );
}
