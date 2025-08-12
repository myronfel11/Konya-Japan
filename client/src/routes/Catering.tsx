import Card from "../components/Card";

export default function Catering() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Catering</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold mb-3">What We Cater</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Corporate Events</li>
            <li>Family Gatherings</li>
            <li>Birthdays</li>
            <li>Weddings</li>
            <li>Custom Sushi Platters</li>
            <li>Private Dinners & Home Caterings</li>
            <li>Holiday Parties</li>
            <li>Festivals</li>
            <li>Graduation Parties</li>
            <li>Fundraisers and Charity Events</li>
            <li>Baby Showers</li>
          </ul>
        </Card>
        <Card>
          <img
            src="/images/menu/placeholder.jpg"
            alt="Catering"
            className="w-full h-64 object-cover rounded-xl"
          />
        </Card>
      </div>
    </section>
  );
}
