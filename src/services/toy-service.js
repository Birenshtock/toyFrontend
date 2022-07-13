import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'
const KEY = 'toys_db'
const API = (process.env.NODE_ENV !== 'development') ?
    '/api/toy/' :
    '//localhost:3030/api/toy/';
_createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

function query(filterBy) {
    return axios.get(API, { params: filterBy })
        .then((res) => res.data)
        // return storageService.query(KEY)
}

function getById(toyId) {
    return axios.get(API + toyId)
        .then(res => {
            console.log('jj', res)
            return res.data
        })

    // return storageService.get(KEY, toyId)
}

function remove(toyId) {
    // return storageService.remove(KEY, toyId)
    return axios.delete(API + toyId)
        .then(res => res.data)

}

function save(toy) {
    // if (toy.id) return storageService.put(KEY, toy)
    // return storageService.post(KEY, toy)


    if (toy.id) {
        return axios.put(API + toy.id, toy).then((res) => res.data);
    } else {
        return axios.post(API, toy).then((res) => res.data);
    }
    // return axios.save(API + toyId)
    // .then(res => res.data)
}

function getEmptyToy() {
    return {
        id: null,
        name: '',
        price: null,
        labels: [],
        createdAt: '',
        inStock: true,
    }
}

function _createToys() {
    let toys = utilService.loadFromStorage(KEY)
    if (!toys || !toys.length) {
        toys = [
            { id: utilService.makeId(), name: 'Barby', labels: ['doll'], price: 980 },
            { id: utilService.makeId(), name: 'Catan', labels: ['box game'], price: 500 },
            { id: utilService.makeId(), name: 'bimba', labels: ['on wheels', 'baby', 'outdoor'], price: 305 },
        ]
        utilService.saveToStorage(KEY, toys)
    }
    return toys
}