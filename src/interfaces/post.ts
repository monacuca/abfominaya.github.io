import { type Author } from "./author";
import { CarrouselImage } from "./carrousel_image";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  carrouselImages: CarrouselImage[];
  tags: string[];
  mediaType: string;
  video: string;
  preview?: boolean;
};
