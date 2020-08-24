import Dry from "json-dry";

class Category {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
  }
}

Category.unDry = function (value) {
  let category = new Category(value);
  return category;
}

Dry.registerClass("Category", Category);

export default Category;
