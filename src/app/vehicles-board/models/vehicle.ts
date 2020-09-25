import * as moment from 'moment';

export class Vehicle {
    id?: string;
    content: string;
    start: string;
    group: number;

    constructor() {
        this.start = moment('01/12/2016', 'DD/MM/YYYY', true).format();
        this.group = Math.floor(Math.random() * 15);
    };
}
