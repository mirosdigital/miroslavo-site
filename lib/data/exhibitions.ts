export type ExhibitionHighlight = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  aspect?: "landscape" | "portrait" | "square";
};

export type TimelineEntry = {
  when: string;
  event: string;
  where: string;
};

export type TimelineYear = {
  year: number;
  entries: TimelineEntry[];
};

export const bicdAmbassadorVideo = {
  youtubeId: "5uc8BWiWSJg",
} as const;

export const exhibitionHighlights: ExhibitionHighlight[] = [
  {
    id: "chamber-commerce-madrid",
    title: "Cámara de Comercio Hispano-Checa",
    date: "Mar 2026",
    location: "Madrid, Spain",
    description:
      "Commissioned artwork inauguration at the Czech–Spanish Chamber of Commerce — plus a workshop on art, enterprise, and values.",
    image: "/exhibitions/chamber-commerce-madrid.jpg",
    imageAlt:
      "Artwork inauguration at Cámara de Comercio Hispano-Checa, Madrid",
    aspect: "landscape",
  },
  {
    id: "giambrone-20-years",
    title: "Giambrone & Partners — 20 Years",
    date: "Nov 2025 – Jan 2026",
    location: "Barcelona, Spain",
    description:
      "Two-month exhibition of original paintings during the international law firm's 20th anniversary — including acquisition of a fine art print for their collection.",
    image: "/exhibitions/giambrone-barcelona.jpg",
    imageAlt: "Paintings on display at Giambrone & Partners, Barcelona",
    aspect: "landscape",
  },
  {
    id: "circle-of-art-marbella",
    title: "Circle of Art — Marbella",
    date: "Oct 2025",
    location: "Los Naranjos Golf, Marbella, Spain",
    description:
      "First-ever exhibition of Art Buoys — a collaboration between Oxcala of Sweden and NoHo House Barcelona.",
    image: "/art-services/oxcala-buoy-installation.png",
    imageAlt: "Oxcala art buoy installation at Circle of Art, Marbella",
    aspect: "landscape",
  },
  {
    id: "bicd-2025",
    title: "Barcelona International Community Day",
    date: "Oct 2025",
    location: "Maritime Museum, Barcelona, Spain",
    description:
      "Host ambassador for Barcelona International Community Day — round table on culture and creativity, following a workshop on building a living from your passions in 2024.",
    image: "/art-services/workshops.png",
    imageAlt: "Workshop and speaking at Barcelona International Community Day",
    aspect: "landscape",
  },
  {
    id: "art-in-motion-noho",
    title: "Art in Motion",
    date: "Jan – Feb 2025",
    location: "NoHo House, Barcelona, Spain",
    description:
      "Live painting and mural work at NoHo House — colour, gesture, and movement in a hospitality setting.",
    image: "/art/studio-practice.jpg",
    imageAlt: "Live painting at Art in Motion, NoHo House, Barcelona",
    aspect: "landscape",
  },
  {
    id: "gallery-opening-benesov",
    title: "Miroslavo Art Gallery — Opening",
    date: "Mar 2024",
    location: "Benešov, Czech Republic",
    description:
      "Opening of the Miroslavo Art Gallery in Benešov — a permanent space to show the work, connect with collectors, and share the practice with the local community.",
    image: "/exhibitions/gallery-opening-benesov.jpg",
    imageAlt: "Miroslavo Art Gallery opening in Benešov, Czech Republic",
    aspect: "landscape",
  },
  {
    id: "raima-alg",
    title: "ALG × RAIMA",
    date: "May 2024",
    location: "Barcelona, Spain",
    description:
      "Art exhibition and live painting performance with RAIMA — work created in dialogue with the audience and space.",
    image: "/commissions/raima-live-painting.jpg",
    imageAlt: "Live painting performance at RAIMA, Barcelona",
    aspect: "landscape",
  },
  {
    id: "connext-harvard",
    title: "Connext Conference",
    date: "May 2023",
    location: "Harvard Business School Online, Boston, USA",
    description:
      "Global Symphony — abstract painting and virtual closing presentation for the annual Connext conference, created for the Harvard Business School Online community.",
    image: "/exhibitions/connext-global-symphony.png",
    imageAlt:
      "Global Symphony painting by Miroslavo for Harvard Business School Online Connext conference",
    aspect: "square",
  },
];

export const exhibitionTimeline: TimelineYear[] = [
  {
    year: 2026,
    entries: [
      {
        when: "6 Mar",
        event:
          "Commissioned artwork inauguration & workshop — Arte Empresa & Valores",
        where: "Cámara de Comercio Hispano-Checa, Madrid, Spain",
      },
      {
        when: "May – Jun",
        event: "Artist in Transition — online exhibition",
        where: "Online",
      },
      {
        when: "Jul",
        event: "First-ever auction — 9 works sold to collectors",
        where: "Online",
      },
    ],
  },
  {
    year: 2025,
    entries: [
      {
        when: "Nov – Jan 2026",
        event: "20-Year Anniversary Exhibition",
        where: "Giambrone & Partners, Barcelona, Spain",
      },
      {
        when: "23 – 25 Oct",
        event: "Circle of Art — Life Buoys exhibition",
        where: "Marbella, Spain",
      },
      {
        when: "25 Oct",
        event: "Round table on creativity",
        where: "Barcelona International Community Day, Spain",
      },
      {
        when: "10 – 17 Oct",
        event: "We Unite Art to Eradicate Polio",
        where: "Rotary Club Sant Cugat, Spain",
      },
      {
        when: "23 Sep",
        event: "Czech & Slovak entrepreneurial networking",
        where: "Glòries Entrepreneurship Centre, Barcelona, Spain",
      },
      {
        when: "Aug",
        event: "Summer residency",
        where: "Miroslavo Art Gallery, Benešov, Czechia",
      },
      {
        when: "Feb – Mar",
        event: "From Struggle to Personal Growth",
        where: "TOC Hostel, Barcelona, Spain",
      },
      {
        when: "Jan – Feb",
        event: "Art in Motion",
        where: "NoHo House, Barcelona, Spain",
      },
    ],
  },
  {
    year: 2024,
    entries: [
      {
        when: "Dec",
        event: "Artistic Advent with Miroslav",
        where: "Miroslavo Art Gallery, Benešov, Czechia",
      },
      {
        when: "Nov",
        event: "Live painting & Maritime Series inauguration",
        where: "El Charco & Florian Virgili Gallery, Barcelona, Spain",
      },
      {
        when: "Sep",
        event: "Host ambassador — workshop at BICD",
        where: "Maritime Museum, Barcelona, Spain",
      },
      {
        when: "Sep",
        event: "Workshop at El Charco",
        where: "Barcelona, Spain",
      },
      {
        when: "Jun",
        event: "Painting exhibition & contest",
        where: "Passeig de Sant Joan, Barcelona, Spain",
      },
      {
        when: "May",
        event: "ALG × RAIMA — art exhibition & performance",
        where: "Barcelona, Spain",
      },
      {
        when: "Mar",
        event: "Miroslavo Art Gallery — opening",
        where: "Benešov, Czech Republic",
      },
      {
        when: "Mar – May",
        event: "Regional Designers Group Show",
        where: "Museum of Art and Design, Benešov, Czech Republic",
      },
    ],
  },
  {
    year: 2023,
    entries: [
      {
        when: "Nov",
        event: "Art walk in the streets of Barcelona",
        where: "Barcelona, Spain",
      },
      {
        when: "May",
        event: "Live painting at Connext Conference",
        where: "Harvard Business School Online, Boston, USA",
      },
    ],
  },
  {
    year: 2022,
    entries: [
      {
        when: "Oct – Dec",
        event: "26a Mostra de Pintura — Festa Major de Gràcia",
        where: "Espai Albert Musons, Barcelona, Spain",
      },
      {
        when: "Feb – Apr",
        event: "Regional Artists Group Show",
        where: "Museum of Art and Design, Benešov, Czech Republic",
      },
      {
        when: "Jan – Jun",
        event: "Showroom exhibition",
        where: "KGS Legal, Prague, Czech Republic",
      },
    ],
  },
  {
    year: 2021,
    entries: [
      {
        when: "Oct – Jan 2022",
        event: "Transformation — solo exhibition",
        where: "Museum of Art and Design, Benešov, Czech Republic",
      },
      {
        when: "Jul – Aug",
        event: "Painting presentations & gastronomy events",
        where: "Club 23, Barcelona, Spain",
      },
      {
        when: "Feb – Mar",
        event: "Online exhibition & Aesthetica Magazine feature",
        where: "London, UK",
      },
    ],
  },
  {
    year: 2020,
    entries: [
      {
        when: "Nov – Jan",
        event: "Exposición Colectiva Internacional",
        where: "Miluna Art Gallery, Barcelona, Spain",
      },
      {
        when: "Jun – Sep",
        event: "(Esp)eranza",
        where: "Business Club 23, Barcelona, Spain",
      },
      {
        when: "Feb",
        event: "Live painting — Valentine's Day",
        where: "Club 23, Barcelona, Spain",
      },
    ],
  },
  {
    year: 2019,
    entries: [
      {
        when: "Nov – Dec",
        event: "Exhibition of Regional Artists",
        where: "Museum of Art and Design, Benešov, Czech Republic",
      },
      {
        when: "Jul – Aug",
        event: "Arte y Vino & live painting performances",
        where: "Barcelona, Spain",
      },
      {
        when: "Mar – Aug",
        event: "Exposed Exhibition on Balmes",
        where: "Barcelona, Spain",
      },
    ],
  },
  {
    year: 2018,
    entries: [
      {
        when: "Nov – Dec",
        event: "Exhibition of Regional Artists",
        where: "Museum of Art and Design, Benešov, Czech Republic",
      },
      {
        when: "Jan",
        event: "BAF Bergamo Arte Fiera",
        where: "Bergamo, Italy",
      },
      {
        when: "Dec – Mar",
        event: "Utopa International Design Exhibition",
        where: "Zhuzhou, China",
      },
    ],
  },
  {
    year: 2017,
    entries: [
      {
        when: "Nov",
        event: "Shenzhen International Industrial Design Fair",
        where: "Shenzhen, China",
      },
      {
        when: "Oct",
        event: "40×40 Exhibition",
        where: "Budapest, Hungary",
      },
      {
        when: "Sep",
        event: "FOAID — Festival of Architecture and Interior Design",
        where: "Mumbai, India",
      },
      {
        when: "Jun",
        event: "MOOD exhibition",
        where: "Ex Chiesa di San Francesco, Como, Italy",
      },
    ],
  },
  {
    year: 2016,
    entries: [
      {
        when: "Various",
        event: "MOOD, Bologna Design Week, Cube Design Museum, FOAID Mumbai",
        where: "Italy, Netherlands, India, Czech Republic, Spain",
      },
    ],
  },
];
