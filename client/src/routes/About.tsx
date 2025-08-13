// src/routes/About.tsx
import Card from "../components/Card";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">About Us</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="text-neutral-700">
              Kon’ya Japan is a Japanese restaurant aiming to bring the
              authentic Japanese cuisine experience to Calgary. "Kon’ya" in
              English means "tonight," which ties into our tagline:
              <span className="italic"> “Taste Japan tonight”</span>.
            </p>
            <p className="text-neutral-700">
              Our mission is to bring traditional Japanese cuisine to customers
              while creating an imitation-luxury experience in a family-oriented
              and affordable setting.
            </p>
          </div>
        </Card>

        <Card>
          <img
            src="/images/location/nolan.jpg"
            alt="Kon’ya Japan Restaurant"
            className="w-full h-64 object-cover rounded-xl"
          />
        </Card>
      </div>
    </section>
  );
}
