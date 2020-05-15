import { Url } from "url";

export class CategoryInfo {
    public title: string;
    public imageUrl: Url 
    public id: string;

    constructor(theTitle: string, theImageUrl: Url, theId: string = '') {
        this.title = theTitle;
        this.imageUrl = theImageUrl;
        this.id = theId;
    }
}