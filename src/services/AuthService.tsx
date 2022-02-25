import { User, UserAttribute } from "../model/Model";

export  class AuthService{
    public async login(userName:string, passWord: string): Promise <User | undefined> {
        if (userName === "user" && passWord === "123") {
            return (
                {userName: userName,
                email: "someone@mail.com"}
                )
        }
        else{
            return undefined
        }
    }
    public async getUserAttributes(user:User):Promise<UserAttribute[]>{
        const result:UserAttribute[] =[]
        result.push({
            Name: 'desc',
            Value: 'Engineer'

        })
        result.push({
            Name: 'jim',
            Value: 'Cookr'

        })
        result.push({
            Name: 'Joe',
            Value: 'Clerk'

        })
        result.push({
            Name: 'Bob',
            Value: 'Teacher'

        })
        return(result)

    }
}