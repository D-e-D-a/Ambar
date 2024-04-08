export interface SmallCardProps {
  custom_field?: {
    price?: number | string;
    place?: string;
  };
  slug: string;
  _id?: number | string;
  className?: string;
  thumbnailurl?: string;
  imgDescription?: string;
  title?: string;
  summary?: string;
  link: string;
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
  // title: any;
  // categoryname: string;
  items: SmallCardProps[];
}