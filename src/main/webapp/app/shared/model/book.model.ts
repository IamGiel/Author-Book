import { Moment } from 'moment';
import { IAuthor } from 'app/shared/model/author.model';

export interface IBook {
  id?: string;
  title?: string;
  description?: string;
  publicationDate?: Moment;
  price?: number;
  name?: IAuthor;
}

export class Book implements IBook {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public publicationDate?: Moment,
    public price?: number,
    public name?: IAuthor
  ) {}
}
