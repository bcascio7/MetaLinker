import { Url } from "url";

export class MetaInfo {
    public title: string;
    public description: string;
    public url: Url
    public imageUrl: Url 

    constructor(theTitle: string, theDesciprtion: string, theUrl: Url, theImageUrl: Url) {
        this.title = theTitle;
        this.description = theDesciprtion;
        this.url = theUrl;
        this.imageUrl = theImageUrl;
    }
}