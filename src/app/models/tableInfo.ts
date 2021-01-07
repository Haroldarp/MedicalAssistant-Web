export class TableInfo{
    public id:number;
    public title:string;
    public description:string;
    public related:string;
    public archiveLink:string;
    public date:string;

    constructor(json:any){
        this.id = json["id"];
        this.title = json["title"];
        this.description = json["description"]
        this.related = json["patient"] ?? json["doctor"];
        this.archiveLink = json["archiveLink"];
        this.date = json["date"];
    }

}