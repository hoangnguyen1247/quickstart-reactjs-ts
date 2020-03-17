export interface IStaff {
    id: string,
}

export class Staff {
    
    id: string;

    constructor(entityDto?: IStaff) {
        this.id = entityDto ? entityDto.id : "";
    }
}
