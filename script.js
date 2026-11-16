// Complete Menu Database mapped with Categories & Accurate Prices
const menuItems = [
    // Burgers
    { id: 1, name: "Patty Burger", category: "burger", price: 250, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 2, name: "Tikka Burger", category: "burger", price: 300, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
    { id: 3, name: "Crisper Burger", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 4, name: "Double Decker", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
    { id: 5, name: "Zinger Burger", category: "burger", price: 250, image: "https://images.unsplash.com/photo-1572802419332-29907a41aa65?w=500" },
    { id: 6, name: "Al Burr Special Burger", category: "burger", price: 399, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 7, name: "Al Burr Tower", category: "burger", price: 350, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },

    // Pizzas
    { id: 8, name: "Al Burr Special Pizza (Small)", category: "pizza", price: 450, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 9, name: "Chicken Tikka Pizza (Medium)", category: "pizza", price: 800, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" },
    { id: 10, name: "Crown Crust Pizza (Large)", category: "pizza", price: 1399, image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500" },
    { id: 11, name: "Stuffer Pizza", category: "pizza", price: 500, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500" },

    // Rolls
    { id: 12, name: "Spin Roll (4 Pcs)", category: "rolls", price: 450, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 13, name: "Full Creamy Roll (4 Pcs)", category: "rolls", price: 450, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 14, name: "Al Burr Special Roll (4 Pcs)", category: "rolls", price: 500, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 15, name: "Chicken Paratha Roll", category: "rolls", price: 260, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500" },

    // Shawarma
    { id: 16, name: "Chicken Shawarma", category: "shawarma", price: 140, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 17, name: "Zinger Shawarma", category: "shawarma", price: 200, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 18, name: "Malai Boti Shawarma", category: "shawarma", price: 320, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },
    { id: 19, name: "Al Burr Pizza Shawarma", category: "shawarma", price: 350, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500" },

    // Pasta
    { id: 20, name: "Crunchy Pasta", category: "pasta", price: 350, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },
    { id: 21, name: "Hot & Spicy Pasta", category: "pasta", price: 500, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },
    { id: 22, name: "Full Creamy Pasta", category: "pasta", price: 500, image: "https://images.unsplash.com/photo-1621996346565-e3d5d6283298?w=500" },

    // Fries & Wings
    { id: 23, name: "Regular Fries", category: "fries", price: 120, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" },
    { id: 24, name: "Family Fries", category: "fries", price: 200, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" },
    { id: 25, name: "Crispy Wings (5 Pcs)", category: "fries", price: 230, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" },
    { id: 26, name: "Oven Baked Wings (6 Pcs)", category: "fries", price: 300, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500" }
];

let cart = [];
let customerInfo = { name: '', phone: '', address: '' };

// Splash Screen Timer
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').classList.add('hidden');
        document.getElementById('customer-screen').classList.remove('hidden');
    }, 2000);
});

// Customer Form Submit
document.getElementById('customer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    customerInfo.name = document.getElementById('cust-name').value;
    customerInfo.phone = document.getElementById('cust-phone').value;
    customerInfo.address = document.getElementById('cust-address').value;

    document.getElementById('customer-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
    displayMenuItems(menuItems);
});

// Display Menu Items in Grid
function displayMenuItems(items) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-body">
                <h3>${item.name}</h3>
                <div class="price">Rs. ${item.price}</div>
                <button class="add-btn" onclick="addToCart(${item.id})">کارٹ میں شامل کریں</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Category Filter Function
function filterCategory(category, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenuItems(filtered);
    }
}

// Add Item to Cart
function addToCart(id) {
    const product = menuItems.find(i => i.id === id);
    const cartItem = cart.find(i => i.id === id);
    if (cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const countBadge = document.getElementById('cart-count');
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countBadge.textContent = totalQty;

    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        let subtotal = item.price * item.qty;
        totalPrice += subtotal;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Rs. ${item.price} × ${item.qty} = <b>Rs. ${subtotal}</b></small>
            </div>
            <div class="qty-box">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        container.appendChild(row);
    });

    document.getElementById('cart-total-price').textContent = `Rs. ${totalPrice}`;
}

// Change Quantity (+ / -)
function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

// Open/Close Cart Modal
const cartModal = document.getElementById('cart-modal');
document.getElementById('cart-btn').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

// Direct WhatsApp Order
document.getElementById('whatsapp-checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('آپ کی کارٹ خالی ہے!');
        return;
    }

    let msg = `*--- نیا آرڈر (Al Burr Fast Food) ---*\n\n`;
    msg += `👤 *نام:* ${customerInfo.name}\n`;
    msg += `📞 *فون:* ${customerInfo.phone}\n`;
    msg += `📍 *ایڈریس:* ${customerInfo.address}\n\n`;
    msg += `🛒 *آرڈر کی تفصیلات:*\n`;

    let total = 0;
    cart.forEach((item, index) => {
        let sub = item.price * item.qty;
        total += sub;
        msg += `${index + 1}. ${item.name} (${item.qty}x) - Rs. ${sub}\n`;
    });

    msg += `\n💰 *کل رقم:* Rs. ${total}`;

    const phoneNo = "923070000166"; // Al Burr Fast Food WhatsApp number
    const waUrl = `https://wa.me/${phoneNo}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
});
