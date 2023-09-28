import { baseUrl } from "./cars";

export const getTeam = async() => {
    const response = await fetch(
      `https://car-rental-project-lishayst100.vercel.app/api/team`
    );
    const data = await response.json()
    return data.team
}