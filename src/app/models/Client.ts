export class Client {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    id?: string;


    constructor(firstName: string, lastName: string, city: string, country: string, id?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
        this.id = id;
    }


}
