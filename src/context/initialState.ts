interface UserDataType{
    id:string
    name:string
    joined:string
    email:string
    role:string
}
export interface stateType{
    sidebar:boolean
    postsCount:number
    usersCount:number
    userData:UserDataType
    showNotification: boolean
    notificationMessage:string
    notificationType:string
}

const initialState: stateType = {
    sidebar:false,
    postsCount:0,
    usersCount:0,
    userData:{
        id:'',
        name:'',
        joined:'',
        email:'',
        role:''
    },
    showNotification:false,
    notificationMessage: '',
    notificationType: ''
}

export default initialState;