import axios from 'axios'

const axiosClient = req => {
  // We are on the server
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/',
      headers: req.headers,
    })
  }
  // We are on the browser
  return axios.create({
    baseURL: '/api',
    headers: { 'content-type': 'application/json' },
  })
}

export default axiosClient
