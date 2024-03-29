import { GetterTree } from 'vuex'
import { AuthState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<AuthState, RootState> = {
  fullName(state): string {
    const { user } = state
    const firstName = (user && user.firstName) || ''
    const lastName = (user && user.lastName) || ''

    return `${firstName} ${lastName}`
  },
  isAuth(state): boolean {
    return Boolean(state.token)
  }
}
