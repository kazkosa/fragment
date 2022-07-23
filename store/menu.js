export const state = () => ({
  isOpen: false,
})

export const mutations = {
  toggleMenu(state) {
    state.isOpen = !state.isOpen
  },
  resetMenu(state) {
    state.isOpen = false
  },
}
export const getters = {
  getIsOpen: (state) => {
    return state.isOpen
  },
}
