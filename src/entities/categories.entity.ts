type CategoriesProps = {
  id?: string;
  title: string;
  color: string;
};

export class Categories {
  public id?: string;
  public title: string;
  public color: string;
  constructor({ id, title, color }: CategoriesProps) {
    this.id = id;
    this.title = title;
    this.color = color.toUpperCase();
  }
}

const category = new Categories({
  title: "titlo",
  color: "#f54",
});
