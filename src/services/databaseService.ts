import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

async function fetchDatabaseData() {
    try {

        console.log(`full url: ${apiUrl}/home/database`);

        const response = await axios.get(`${apiUrl}/home/database`);

        if (response.status === 200) {
            console.log('response');
            console.log(response.data);
        }

    } catch (e) {
        console.error(`fetching data error ${e}`);
        return null;
    }
}


await fetchDatabaseData();