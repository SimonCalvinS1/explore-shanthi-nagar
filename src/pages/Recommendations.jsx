import React from "react";

//fetch data from database

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      category: "Food & Dining",
      places: [
        {
          name: "MTR (Mavalli Tiffin Rooms)",
          description:
            "Legendary South Indian restaurant famous for dosas, idlis, and filter coffee since 1924.",
          location: "Lalbagh Road, near Shanti Nagar",
        },
        {
          name: "Koshy's Restaurant",
          description:
            "Iconic old-school Bangalore café serving continental and Indian cuisine.",
          location: "St. Marks Road, about 2 km from Shanti Nagar",
        },
        {
          name: "Konark Vegetarian Restaurant",
          description:
            "Popular for South and North Indian vegetarian meals with a family-friendly vibe.",
          location: "Residency Road, Shanti Nagar",
        },
        {
          name: "Corner House Ice Cream",
          description:
            "Local favorite ice cream chain — try the legendary Death by Chocolate!",
          location: "Residency Road, Richmond Town",
        },
        {
          name: "Empire Restaurant",
          description:
            "Go-to late-night spot known for grilled chicken and parotta.",
          location: "Church Street, about 2.5 km from Shanti Nagar",
        },
      ],
    },
    {
      id: 2,
      category: "Shopping",
      places: [
        {
          name: "Garuda Mall",
          description:
            "One of Bengaluru's biggest malls with fashion brands, a food court, and multiplex.",
          location: "Magrath Road, about 2 km from Shanti Nagar",
        },
        {
          name: "UB City Mall",
          description:
            "Luxury mall featuring designer boutiques, cafés, and fine dining options.",
          location: "Vittal Mallya Road, near Richmond Circle",
        },
        {
          name: "Commercial Street",
          description:
            "Vibrant street market for clothing, footwear, and accessories.",
          location: "Tasker Town, Shivaji Nagar (3 km away)",
        },
        {
          name: "Chickpet Market",
          description:
            "Historic marketplace for sarees, textiles, and wholesale goods.",
          location: "Chickpet, about 4 km from Shanti Nagar",
        },
        {
          name: "Cauvery Handicrafts Emporium",
          description:
            "Government-run store offering authentic Karnataka handicrafts and souvenirs.",
          location: "MG Road, 3 km from Shanti Nagar",
        },
      ],
    },
    {
      id: 3,
      category: "Parks & Recreation",
      places: [
        {
          name: "Cubbon Park",
          description:
            "Expansive green space with walking trails, gardens, and historic monuments.",
          location: "Kasturba Road, 2 km from Shanti Nagar",
        },
        {
          name: "Lalbagh Botanical Garden",
          description:
            "Historic botanical garden with rare plants and the iconic Glass House.",
          location: "Hosur Main Road, 2 km from Shanti Nagar",
        },
        {
          name: "Richmond Park",
          description:
            "Small, peaceful neighborhood park ideal for morning walks and relaxation.",
          location: "Richmond Town, adjacent to Shanti Nagar",
        },
        {
          name: "M N Krishna Rao Park",
          description:
            "Well-maintained park with jogging paths and playgrounds.",
          location: "Basavanagudi, 3.5 km away",
        },
        {
          name: "Freedom Park",
          description:
            "Historic former jail turned into a large public park and event space.",
          location: "Gandhi Nagar, 4 km away",
        },
      ],
    },
    {
      id: 4,
      category: "Universities & Colleges",
      places: [
        {
          name: "St. Joseph's University",
          description:
            "Prestigious institution known for arts, science, and commerce programs.",
          location: "Langford Road, Shanti Nagar",
        },
        {
          name: "Christ (Deemed to be University)",
          description:
            "Renowned multi-disciplinary university offering a global learning experience.",
          location: "Hosur Road, S.G. Palya (4 km away)",
        },
        {
          name: "Al-Ameen College of Law",
          description:
            "Leading law college affiliated to Karnataka State Law University.",
          location: "Lalbagh Main Road, Sudhama Nagar",
        },
        {
          name: "Bangalore Medical College and Research Institute",
          description:
            "Top government medical college with an attached teaching hospital.",
          location: "K.R. Road, Fort, Bengaluru",
        },
        {
          name: "St. Joseph's College of Commerce",
          description:
            "Renowned college offering undergraduate and postgraduate commerce programs.",
          location: "Brigade Road, 2 km from Shanti Nagar",
        },
      ],
    },
    {
      id: 5,
      category: "Travelling & Transport",
      places: [
        {
          name: "Shantinagar Bus Station (TTMC)",
          description:
            "Major BMTC transit hub connecting all parts of Bengaluru.",
          location: "BTS Main Road, Wilson Garden",
        },
        {
          name: "Richmond Circle Junction",
          description:
            "Busy traffic hub connecting Residency Road, Richmond Road, and Mission Road.",
          location: "Richmond Circle, Shanti Nagar",
        },
        {
          name: "Lalbagh Metro Station",
          description:
            "Nearest Namma Metro station providing connectivity to major city areas.",
          location: "Hosur Main Road, near Lalbagh Gate",
        },
        {
          name: "KR Market Metro Station",
          description:
            "Central metro station close to Lalbagh and city market areas.",
          location: "K.R. Market, 3 km from Shanti Nagar",
        },
        {
          name: "Kempegowda Bus Station (KBS - Majestic)",
          description:
            "Intercity and intracity bus terminal, easily reachable from Shantinagar.",
          location: "Gandhi Nagar, 4.5 km away",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-20">
      <h1 className="text-3xl text-center font-bold mb-6 text-gray-900">
        Explore Around Shanti Nagar
      </h1>
      <div className="space-y-8">
        {recommendations.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b pb-2 border-blue-200">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.places.map((place, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:bg-blue-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-medium mb-2 text-gray-800">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{place.description}</p>
                  <p className="text-sm text-green-800">📍 {place.location}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-2xl font-semibold text-pink-800 mt-10">
        🌸 Happy Exploring Bengaluru!
      </p>
    </div>
  );
};

export default Recommendations;
