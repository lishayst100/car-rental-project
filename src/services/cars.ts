import Cars, { ContactType } from "../../types";


export const baseUrl = "https://car-rental-project-lishayst100.vercel.app/api"
//https://car-rental-project-lishayst100.vercel.app/api

export const addCar = async(car:Cars) => {

    try{
      const response = await fetch(`${baseUrl}/cars`, {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify(car),
      });
     if (!response.ok) {
       alert("Network response was not ok");
     }

     return response.json()

    }catch(e){
        console.error(e);
        alert("Error!");
    }
    
}


export const getCars = async() => {
  const response = await fetch(
    `${baseUrl}/cars`
  );
  const data = await response.json()
  return data.cars
}

export const getCar = async(id:string) => {
  const response = await fetch(`${baseUrl}/cars/${id}`);
  const data = await response.json();
  return data
}



export const addContact = async(contact:ContactType) => {
     try {
       const response = await fetch(`${baseUrl}/contact`, {
         method: "POST",
         headers: {
           "Context-Type": "application/json",
         },
         body: JSON.stringify(contact),
       });
       if (!response.ok) {
         alert("Network response was not ok");
       }

       return response.json();
     } catch (e) {
       console.error(e);
     }
}