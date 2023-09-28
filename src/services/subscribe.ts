import { SubscribeType } from "../../types";
import { baseUrl } from "./cars";

export const subscribe = async(email:SubscribeType) => {
    const response = await fetch(`${baseUrl}/sub"`,{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(email)

    });

    const result = await response.json();

    return result.message

}