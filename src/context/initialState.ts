export interface stateType{
    sidebar:boolean
    postsCount:number
    usersCount:number
    userData:object
    postsSearch:string
    showNotification: boolean
    notificationMessage:string
    notificationType:string
}

const initialState: stateType = {
    sidebar:false,
    postsCount:0,
    usersCount:0,
    userData:{},
    postsSearch:'',
    showNotification:false,
    notificationMessage: '',
    notificationType: ''
}

export default initialState;