// 9 - Object method
const rectangle = {
  width: 2,
  height: 5,
  getWidth: function() {
    return this.width;
  },
  getHeight: function() {
    return this.height;
  },
  getArea: function() {
    return `Dien tich:  ${this.width * this.height} cm2`;
  }
};

console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.getArea());
