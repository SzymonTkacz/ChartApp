export class UsersResponse {
    results: User[]
}

export class User {    
    name: UserName
    dob: UserInfo
}

export class UserName {
    title: string
    first: string
    last: string
}

export class UserInfo {
    age: number
    date: string
}