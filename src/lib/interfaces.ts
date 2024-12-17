export interface BlogProps {
  summary?: string;
  custom_field?: {
    price?: string;
    place?: string;
  };
  author?: string;
  title?: string;
  published_at?: string;
  _id?: string;
  slug: string;
  thumbnail_id?: string;
  created_at?: string;
  updated_at?: string;
  lang?: string;
  project_id?: string;
  thumbnailurl?: string;
  categoryname?: string;
}

export interface BigCardProps {
  img?: string;
  imgTitle?: string;
  cardTitle: string;
  cardText?: string;
  linkText?: string;
  linkUrl?: string;
  price?: number;
  textDisplayClassName?: string;
  frameCount?: number;
  frameWidth?: number;
  frameHeight?: number;
}

export interface cardsProps {
  items: BlogProps[];
}
