/**
 * Art Data
 * Data for the art gallery section
 */

export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  image: string;
}

export const artworks: ArtPiece[] = [
  {
    id: "wolf-color",
    title: "Wolf",
    medium: "Color Pencils",
    image: "/img/art/wolf_d.webp",
  },
  {
    id: "leopard",
    title: "Leopard",
    medium: "Color Pencils",
    image: "/img/art/leopard2.webp",
  },
  {
    id: "tiger",
    title: "Tiger",
    medium: "Color Pencils",
    image: "/img/art/tiger1.webp",
  },
  {
    id: "lion",
    title: "Lion",
    medium: "Lead Pencils",
    image: "/img/art/lion.webp",
  },
  {
    id: "wolf-lead",
    title: "Wolf",
    medium: "Lead Pencils",
    image: "/img/art/wolf_face.webp",
  },
  {
    id: "bird",
    title: "Just a Bird",
    medium: "Lead Pencils",
    image: "/img/art/bird_hd.webp",
  },
  {
    id: "mountains",
    title: "Misty Mountains",
    medium: "Lead Pencils",
    image: "/img/art/mount.webp",
  },
  {
    id: "duomo",
    title: "Duomo",
    medium: "Color Pencils",
    image: "/img/art/duomo.webp",
  },
  {
    id: "jaipur",
    title: "Jaipur",
    medium: "Lead Pencils",
    image: "/img/art/jaipur.webp",
  },
  {
    id: "temple",
    title: "Temple",
    medium: "Lead Pencils",
    image: "/img/art/temple.webp",
  },
];

