import { toyService } from '../../services/toy-service'

export default {
    state: {
        toys: [],
        filterBy: {
            name: '',
            status: 'all',
        }
    },
    getters: {
        toys(state) {
            return state.toys
        },
    },
    mutations: {
        setFilter(state, { name, status }) {
            state.filterBy.name = name
            state.filterBy.status = status
            console.log('lllll', state.filterBy)
        },
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex((toy) => toy.id === toyId)
            state.toys.splice(idx, 1)
        },

        saveToy(state, { toy }) {
            const idx = state.toys.findIndex((currToy) => currToy.id === toy.id)
            if (idx !== -1) state.toys.splice(idx, 1, toy)
            else state.toys.push(toy)
        },
        addToy(state, { toy }) {
            state.toys.push(toy)
        },
    },
    actions: {
        loadToys({ commit }, { filterBy }) {
            console.log('uu', filterBy)
            toyService.query(filterBy)

            .then((toys) => {

                console.log('sss', toys);
                commit({ type: 'setToys', toys })
            })
        },
        removeToy({ commit }, { toyId }) {
            toyService.remove(toyId)
                .then(() => {
                    commit({ type: 'removeToy', toyId })
                })

        },
        saveToy({ commit }, { toy }) {
            console.log('dddd', toy)
            const actionType = (toy.id) ? 'saveToy' : 'addToy'
            return toyService.save(toy)
                .then((savedToy) => {
                    commit({ type: actionType, toy: savedToy })
                    return savedToy
                })

        }

    },
}