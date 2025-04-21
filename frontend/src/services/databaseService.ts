import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchDatabaseData() {
    try {
        const response = await axios.get(`${apiUrl}/home/database`);

        if (response.status === 200) {
            return response.data;
        }

    } catch (e) {
        console.error(`fetching data error ${e}`);
        return null;
    }
}


await fetchDatabaseData();