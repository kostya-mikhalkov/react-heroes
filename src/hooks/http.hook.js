import { useCallback } from "react";

export const useHttp = () => {
    // const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        // setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            // setProcess('error');
            throw e;
        }
    }, []);

    const requestDelete = async (url, id, method = 'DELETE') => {
        try {
            const response = await fetch(`${url}/${id}`, {method});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json()
        } catch(e) {
            throw e;
        }
    }

    const postRequest = async (url, body, method = 'POST', headers = {'Content-Type': 'application/json'}) => {

        // setProcess('loading');

        try {
            const response = await fetch(url, {method, body: JSON.stringify(body), headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            // setProcess('error');
            throw e;
        }
    };

    // const clearError = useCallback(() => {
        // setProcess('loading');
    // }, []);

    return {request,
            requestDelete,
            postRequest, 
            // clearError, 
            // process, 
            // setProcess
        }
}