import axios from 'axios'

const urlBase = "http://localhost:3001"
const urlPath = "notes"

const getAll = () => {
    const request = axios.get(`${urlBase}/${urlPath}`)
    return request.then((response) => response.data)
}

const create = (contact: any) => {
    const request = axios.post(`${urlBase}/${urlPath}`, contact)
    return request.then((response) => response.data)
}

const update = (id: any,updatecontact:any) => {
    const request = axios.put(`${urlBase}/${urlPath}/${id}`,updatecontact)
    return request.then((response) => response.data)
}

const remove = (id: any) => {
    const request = axios.delete(`${urlBase}/${urlPath}/${id}`)
    return request.then((response) => response.data)
}



export default { getAll, create, update, remove }