const User = require('./user.model');
const Product = require('./product.model');
const Cart = require('./cart.model');
const Order = require('./order.model');
const InCart = require('./inCart.model');
const InOrder = require('./inOrder.model');

User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Cart, { through: InCart });
Cart.belongsToMany(Product, { through: InCart });

Product.belongsToMany(Order, { through: InOrder });
Order.belongsToMany(Product, { through: InOrder });
