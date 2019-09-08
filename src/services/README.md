## The Services directory

Here you should add services, that are basially some ApiClients created with axios.

```js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  all(query = '') {
    return apiClient.get(`/addresses/${query}`);
  },
  find(id) {
    return apiClient.get('/addresses/' + id);
  },
  create(data) {
    return apiClient.post(`/addresses`, data);
  },
  update(addressId, data) {
    return apiClient.put(`/addresses/${addressId}`, data);
  },
  delete(addressId) {
    return apiClient.delete(`/addresses/${addressId}`);
  }
};
```
