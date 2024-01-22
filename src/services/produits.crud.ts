import axios from "axios";

export const getProduit = async () => {
    let data;
    let req = await axios.get('http://localhost:3001/api/produit')
    
    return req;
}