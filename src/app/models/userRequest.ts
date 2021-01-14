export class UserRequest{
    public username: string;
    public password: string;

    constructor(json:any){
        this.username = json["userName"];
        this.password = json["password"];
    }

}