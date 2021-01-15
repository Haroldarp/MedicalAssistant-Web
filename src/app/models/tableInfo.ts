export class TableInfo{
    public id:number;
    public title:string;
    public description:string;
    public related:string;
    public archiveLink:string;
    public date:Date;

    constructor(json:any, doctor: boolean){
        this.id = json["id"];
        this.title = json["titulo"];
        this.description = json["descripcion"]
        this.related = doctor? json["paciente"] : json["doctor"];
        this.archiveLink = json["archivo"];
        this.date = new Date( json["fecha"]);
    }

}