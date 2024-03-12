import axios from 'axios';

const API_KEY = process.env.PHM_API_KEY;
const API_SECRET = process.env.PHM_API_SECRET;

const baseURL = 'https://api.phemex.com';

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-phemex-access-token': API_KEY,
    },
});

// Function to make authenticated requests
const makeRequest = async (method, path, data = {}) => {
    const timestamp = Date.now().toString();
    const signaturePayload = `${method}${path}${timestamp}${JSON.stringify(data)}`;
    const signature = crypto.createHmac('sha256', API_SECRET).update(signaturePayload).digest('hex');

    const config = {
        headers: {
            'x-phemex-access-token': API_KEY,
            'x-phemex-request-signature': signature,
            'x-phemex-request-timestamp': timestamp,
        },
    };

    if (method === 'GET') {
        return instance.get(path, config);
    } else if (method === 'POST') {
        return instance.post(path, data, config);
    }
    // Add more methods as needed

    throw new Error(`Unsupported method: ${method}`);
};

export { makeRequest };
