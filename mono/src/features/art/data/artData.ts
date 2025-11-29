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
    image: "/img/art/wolf_d.jpeg",
  },
  {
    id: "leopard",
    title: "Leopard",
    medium: "Color Pencils",
    image: "/img/art/leopard2.jpeg",
  },
  {
    id: "tiger",
    title: "Tiger",
    medium: "Color Pencils",
    image: "/img/art/tiger1.jpeg",
  },
  {
    id: "lion",
    title: "Lion",
    medium: "Lead Pencils",
    image: "/img/art/lion.jpeg",
  },
  {
    id: "wolf-lead",
    title: "Wolf",
    medium: "Lead Pencils",
    image: "/img/art/wolf_face.jpeg",
  },
  {
    id: "bird",
    title: "Just a Bird",
    medium: "Lead Pencils",
    image: "/img/art/bird_hd.jpeg",
  },
  {
    id: "mountains",
    title: "Misty Mountains",
    medium: "Lead Pencils",
    image: "/img/art/mount.jpeg",
  },
  {
    id: "duomo",
    title: "Duomo",
    medium: "Color Pencils",
    image: "/img/art/duomo.png",
  },
  {
    id: "jaipur",
    title: "Jaipur",
    medium: "Lead Pencils",
    image: "/img/art/jaipur.png",
  },
  {
    id: "temple",
    title: "Temple",
    medium: "Lead Pencils",
    image: "/img/art/temple.png",
  },
];

