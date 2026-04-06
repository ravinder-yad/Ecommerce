# ShopVerse: Full-Stack Backend API Documentation 🏰📊✨

Yeh document ShopVerse ke saare backend endpoints ki complete list hai. Aap ise Postman ya Frontend integration ke liye use kar sakte hain.

## 🚀 Environment Configuration
- **Base URL**: `http://127.0.0.1:5000`
- **Global Headers**: 
    - `Content-Type: application/json` (Sabke liye)
    - `Authorization: Bearer <TOKEN>` (Sirf Private routes ke liye)

---

## 👤 1. Authentication Module (Global)
Saare users ke liye login aur registration.

### [POST] Register User
- **URL**: `http://127.0.0.1:5000/api/auth/register`
- **Body (JSON)**:
```json
{
  "fullName": "Ravindra Rao",
  "email": "ravindra@example.com",
  "password": "securePassword123",
  "createdAt": "2026-04-06T14:00:00.000Z"
}
```

### [POST] Login User
- **URL**: `http://127.0.0.1:5000/api/auth/login`
- **Body (JSON)**:
```json
{
  "email": "ravindra@example.com",
  "password": "securePassword123",
  "createdAt": "2026-04-06T14:00:00.000Z"
}
```

---

## 👤 2. User & Profile Module (Private)
User ki identity aur metadata.

### [GET] Get Profile
- **URL**: `http://127.0.0.1:5000/api/users/profile`
- **Auth**: `Bearer Token` Required.

### [PUT] Update Profile
- **URL**: `http://127.0.0.1:5000/api/users/profile`
- **Auth**: `Bearer Token` Required.
- **Body (JSON)**: `fullName`, `email` (Optional)

### [POST] Upload Avatar (Multer)
- **URL**: `http://127.0.0.1:5000/api/users/profile/upload`
- **Auth**: `Bearer Token` Required.
- **Body (Form-data)**: 
  - Key: `image` (Type: File)

---

## 🛍️ 3. Product Catalog (Public/Private)
Shopping items ki list.

### [GET] Fetch All Products
- **URL**: `http://127.0.0.1:5000/api/products`

### [GET] Fetch Single Product
- **URL**: `http://127.0.0.1:5000/api/products/:id`

### [POST] Create Product (Admin Only)
- **URL**: `http://127.0.0.1:5000/api/products`
- **Auth**: `Bearer Token` Required.

---

## 🛒 4. Cart Management (Private)
Personal shopping bag.

### [GET] Get My Cart
- **URL**: `http://127.0.0.1:5000/api/cart`
- **Auth**: `Bearer Token` Required.

### [POST] Update/Sync Cart
- **URL**: `http://127.0.0.1:5000/api/cart`
- **Auth**: `Bearer Token` Required.
- **Body (JSON)**: `cartItems` (Array of objects)

### [DELETE] Clear Cart
- **URL**: `http://127.0.0.1:5000/api/cart`
- **Auth**: `Bearer Token` Required.

---

## ❤️ 5. Wishlist Vault (Private)
Items user loves.

### [GET] Get My Wishlist
- **URL**: `http://127.0.0.1:5000/api/wishlist`
- **Auth**: `Bearer Token` Required.

### [POST] Add to Wishlist
- **URL**: `http://127.0.0.1:5000/api/wishlist/:productId`
- **Auth**: `Bearer Token` Required.

---

## 📦 6. Order Management (Private)
Real-world transactions.

### [POST] Create Order
- **URL**: `http://127.0.0.1:5000/api/orders`
- **Auth**: `Bearer Token` Required.
- **Body (JSON)**: `orderItems`, `shippingAddress`, `totalPrice` etc.

### [GET] Fetch My Orders
- **URL**: `http://127.0.0.1:5000/api/orders/myorders`
- **Auth**: `Bearer Token` Required.

---

## 🔔 7. Intelligence Hub (Private)
Notifications & alerts.

### [GET] Get My Notifications
- **URL**: `http://127.0.0.1:5000/api/notifications`
- **Auth**: `Bearer Token` Required.

### [PUT] Mark as Read
- **URL**: `http://127.0.0.1:5000/api/notifications/:id/read`
- **Auth**: `Bearer Token` Required.

---

> [!IMPORTANT]
> **Static Images**: Agar koi product ya profile image display karni hai, toh URL format ye hoga:
> `http://127.0.0.1:5000/uploads/profiles/filename.png` or `http://127.0.0.1:5000/uploads/products/filename.png`

Bhai, ye aapki **Master API Guide** hai! 🚀👑🏁✨
