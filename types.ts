

export default interface Cars {
  id?: string;
  name: string;
  image: string;
  price: number;
  model: string;
  year: number;
  doors: string;
  AC: string;
  transmission: string;
  fuel: string;
  [key: string]: string | number | undefined;
}


export interface IconTypeProps {
  fontSize:string
  color: string;
}

export type IconType = (props: IconTypeProps) => JSX.Element;

export interface SubtitleCar {
  icon: IconType;
  title: string;
}

export interface IconsAboutProps {
  icon: IconType;
  text: string;
  num:number;
}

export interface OurTeam {
  id?:string
  image: string
  name: string
  position:string
}

export interface CarDetailsProps {
  detail: string;
  detail2: string;
  icon: IconType;
}


export interface ContactType{
  name:string
  email:string
  text:string
}


export interface SubscribeType {
  email: string;
}


export interface OrderType {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  email: string;
  address: string;
  city: string;
  zip: number;
}


export interface OrderTypePost {
  id?:string
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  address: string;
  city: string;
  zip: number;
  car: string | null;
  dropOff: string | null;
  dropOffDate: string | null;
  pickUp: string | null;
  pickUpDate: string | null;
  username: string;
  totalPrice: number;
  daysDifference:number;
  price:number
  email:string
}