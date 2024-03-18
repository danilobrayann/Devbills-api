type CategoryProps ={
id?: string,
title: string,
color: string,
}

export class Category {
  public id?: string;
  public title: string;
  public color: string;
  constructor({id, title, color}: CategoryProps) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

const category = new Category({
    title: 'titlo',
    color: '#f54'
});
