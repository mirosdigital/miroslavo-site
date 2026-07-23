/** Client & collector reviews */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "dominika-sejkova",
    quote:
      "I had a crazy idea: a painting I would see first on my birthday, based on my dreams. I contacted Miroslavo, explained my plan and all my wishes, and waited for the result. What I received was way better than my already super-high expectations — great communication, terms as we agreed, very well-organised transport to Czechia, and the painting itself is just awesome and breathtaking.",
    author: "Dominika Sejková",
    company: "Custom commission",
    context: "Dream commission · Czechia",
  },
  {
    id: "alan-mcclelland",
    quote:
      "I loved the painting Miroslavo did for Club 23 Barcelona, and was delighted to find that he could do a signed print for me. I ordered one straight away — it made it all the way to the UK quickly and well packaged. It really brightens the mood in my house. I'm sure this will be the first of many pieces of his work I will acquire.",
    author: "Alan McClelland",
    company: "United Kingdom",
    context: "Signed print · Club 23 Barcelona",
  },
  {
    id: "zbynek",
    quote:
      "Míra and his work under the Miroslavo brand are stunning — an incredibly skilled artist with excellent ideas and completely original work. Communication was excellent and friendly. Delivery of my painting from Barcelona to Czechia was completely trouble-free, safely packed in sturdy boards, with a handwritten dedication that was a lovely surprise.",
    author: "Zbynek",
    company: "Czech Republic",
    context: "Original painting · shipped from Barcelona",
  },
  {
    id: "pharmacie-figuerolles",
    quote:
      "I contacted Miro to create a logo for the pharmacy — modern, but always easily identifiable for patients. He created a new visual identity with different lines playing with shades of green, while keeping the identity intact. Very responsive and helpful — he understood what I was looking for in a few exchanges and created the logo very quickly.",
    author: "Roberta Ciotola",
    role: "Owner",
    company: "Pharmacie Figuerolles",
    context: "Logo & visual identity",
  },
];
