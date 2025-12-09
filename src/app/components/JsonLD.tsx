export default function JsonLD() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Lost Secret: The Hidden Truth of Nalanda",
    author: {
      "@type": "Person",
      name: "Akash Pasricha",
    },
    publisher: {
      "@type": "Organization",
      name: "HubHawks",
      logo: {
        "@type": "ImageObject",
        url: "https://akashpasricha.com/logo.png",
      },
    },
    description: "A razor-sharp thriller that fuses ancient history with high-stakes espionage. Lost Secret weaves the mysteries of Nalanda with modern-day intrigue.",
    image: "https://akashpasricha.com/hero.png",
    genre: "Thriller",
    inLanguage: "en",
    url: "https://akashpasricha.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
