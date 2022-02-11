import axios from 'axios';

export async function fetchActivities() {
  const res = await axios.get('http://localhost:3000/activities');
  return res.data;
}

export async function postActivity(data) {
  const res = await axios.post('http://localhost:3000/activities', data);
  return res;
}

export async function filterService(service_name) {
  const res = await axios.get(
    `http://localhost:3000/services?service=${service_name}`
  );
  return res;
}
