import Product from '../models/Product.js';


export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};


export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};


// 🎯 CREATE PRODUCT (Dynamic from Body)
export const createProduct = async (req, res) => {
  try {
    const { name, price, image, brand, category, countInStock, description } = req.body;

    const product = new Product({
      name,
      price,
      user: req.user._id,
      image,
      brand,
      category,
      countInStock,
      numReviews: 0,
      description,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data", error: error.message });
  }
};

// 🎯 UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, image, brand, category, countInStock } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.brand = brand || product.brand;
      product.category = category || product.category;
      product.countInStock = countInStock || product.countInStock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: "Update failed", error: error.message });
  }
};

// 🎯 DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product successfully removed from ShopVerse Treasury' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: "Deletion failed", error: error.message });
  }
};

// 🏛️ SEED PRODUCTS (Add initial products to database)
export const seedProducts = async (req, res) => {
  const products = [
    {
      name: "Supreme Leather Moto Jacket",
      price: 12900,
      image: "https://images.unsplash.com/photo-1551028711-031cda098383?auto=format&fit=crop&q=80",
      description: "Handcrafted Italian leather with diamond-stitched panels for the ultimate luxury aesthetic.",
      brand: "ShopVerse Elite",
      category: "Men",
      countInStock: 5
    },
    {
      name: "Classic Silk Wrap Dress",
      price: 8500,
      image: "https://images.unsplash.com/photo-1539008835279-43468093d223?auto=format&fit=crop&q=80",
      description: "Pure mulberry silk with a sophisticated silhouette, perfect for evening galas.",
      brand: "Vogue Collections",
      category: "Women",
      countInStock: 12
    },
    {
      name: "Gold-Plated Minimalist Watch",
      price: 15400,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80",
      description: "Precision Swiss movement with 18k gold plating and sapphire crystal glass.",
      brand: "Chronos",
      category: "Accessories",
      countInStock: 8
    },
    {
      name: "Ultra-Light Carbon Headphones",
      price: 32000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
      description: "Audiophile-grade sound with noise-canceling aerospace-grade carbon fiber casing.",
      brand: "SonicMax",
      category: "Tech",
      countInStock: 4
    },
    {
      name: "Professional Espresso Machine",
      price: 45900,
      image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80",
      description: "Dual boiler system for hospital-grade precision and barista-style results.",
      brand: "CafePro",
      category: "Electronics",
      countInStock: 3
    },
    {
        name: "Designer Wool Trench Coat",
        price: 18500,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80",
        description: "Merino wool blend with tailor-fitted lines and premium heavy-duty buttons.",
        brand: "WinterGold",
        category: "Women",
        countInStock: 7
    },
    {
        name: "Premium Wireless Mechanical Keyboard",
        price: 9500,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80",
        description: "Hotswappable switches with a solid CNC-milled aluminum frame.",
        brand: "KeyLogic",
        category: "Tech",
        countInStock: 15
    },
    {
        name: "Velvet Evening Clutch",
        price: 4200,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fd111c90?auto=format&fit=crop&q=80",
        description: "Rich velvet finish with a detachable gold chain and hidden card slots.",
        brand: "LuxeBags",
        category: "Accessories",
        countInStock: 20
    }
  ];

  try {
    await Product.deleteMany({}); // Optional: Clear old data first
    const createdProducts = await Product.insertMany(products);
    res.status(201).json({ message: "Seed Successful!", count: createdProducts.length });
  } catch (error) {
    res.status(500).json({ message: "Seed Failed", error: error.message });
  }
};
