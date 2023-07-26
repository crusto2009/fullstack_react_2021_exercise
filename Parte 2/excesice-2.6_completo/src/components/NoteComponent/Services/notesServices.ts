import axios from 'axios'
const urlbase = "http://localhost:3330"
const urlNotepath = "/api/notes"

const getAll = () => {
    const request = axios.get(`${urlbase}/${urlNotepath}`)
    return  request.then(response => response.data)
}

const create = (newObject:any) => {
    const request = axios.post(`${urlbase}/${urlNotepath}`, newObject)
    return request.then(response => response.data)
}

const update = (id:any, newObject:any) => {
    const request = axios.put(`${urlbase}/${urlNotepath}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    update
}