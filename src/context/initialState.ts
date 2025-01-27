export interface stateType{
    sidebar:boolean
    postsCount:number
    usersCount:number
}

const initialState: stateType = {
    sidebar:false,
    postsCount:0,
    usersCount:0
}

export default initialState;