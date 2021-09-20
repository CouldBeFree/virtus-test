import axiosFactory from 'axios'

export const axios = axiosFactory.create({
	baseURL: 'http://localhost:3000'
})

axios.interceptors.response.use(serializeData)

function serializeData(response) {
	return response.data
}
