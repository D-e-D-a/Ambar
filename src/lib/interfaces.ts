export interface SmallCardProps {
  id?: number | string;
  className?: string;
  imgUrl?: string;
  imgDescription?: string;
  title?: string;
  description?: string;
  price?: number;
  place?: string;
  link: string;
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
