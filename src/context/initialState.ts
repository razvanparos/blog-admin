export interface stateType{
    sidebar:boolean
    postsCount:number
    usersCount:number
    userData:object
    postsSearch:string
}

const initialState: stateType = {
    sidebar:false,
    postsCount:0,
    usersCount:0,
    userData:{},
    postsSearch:''
}

export default initialState;