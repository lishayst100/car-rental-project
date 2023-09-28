import { FaCalendarAlt, FaCarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


export const LABLES = [
  {
    icon: FaCarAlt,
    title: "Car Type",
    input: "select",
  },
  {
    icon: FaLocationDot,
    title: "Pick-up",
    input: "select",
  },
  {
    icon: FaLocationDot,
    title: "Drop-off",
    input: 'select'
  },
  {
    icon: FaCalendarAlt,
    title: "Pick-up",
    input: "date",
  },
  {
    icon: FaCalendarAlt,
    title: "Drop-off",
    input: "date",
  },
];


export const locations = [
  { value: "jerusalem", label: "Jerusalem" },
  { value: "tel aviv", label: "Tel Aviv" },
  { value: "haifa", label: "Haifa" },
  { value: "eilat", label: "Eilat" },
  { value: "hod-Hasharon", label: "Hod-Hasharon" },
];


