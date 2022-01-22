import { UserActionType } from "./user.type"

export const SetCurrentUser = user => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
})