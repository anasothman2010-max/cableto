// Cableto Interactive E-Commerce Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // State
    let cart = JSON.parse(localStorage.getItem('cableto_cart')) || [];
    
    // DOM Elements
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartBadge = document.getElementById('cart-badge');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalEl = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const verifyBtn = document.getElementById('verify-btn');
    const serialInput = document.getElementById('serial-code');
    const verifyResult = document.getElementById('verify-result');
    const dealerForm = document.getElementById('dealer-form');

    // Cart Drawer Toggle
    function toggleCart(show) {
        if (show) {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        } else {
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    }

    cartBtn.addEventListener('click', () => toggleCart(true));
    closeCartBtn.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));

    // Update Cart UI
    function updateCartUI() {
        cartBadge.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); margin-top: 40px;">السلة فارغة حالياً</p>';
            cartTotalEl.textContent = '0 ج.م';
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.title}">
                    <div style="flex: 1;">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${item.price} ج.م × ${item.quantity}</div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ff4d4d; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }).join('');

        cartTotalEl.textContent = `${total.toLocaleString()} ج.م`;
        localStorage.setItem('cableto_cart', JSON.stringify(cart));
    }

    // Add to Cart Function
    window.addToCart = function(id, title, price, img) {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ id, title, price: parseFloat(price), img, quantity: 1 });
        }
        updateCartUI();
        toggleCart(true);
    };

    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        updateCartUI();
    };

    // Event Delegation for Product Buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const title = btn.dataset.title;
            const price = btn.dataset.price;
            const img = btn.dataset.img;
            addToCart(id, title, price, img);
        });
    });

    document.querySelectorAll('.buy-now-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const title = btn.dataset.title;
            const price = btn.dataset.price;
            const img = btn.dataset.img;
            addToCart(id, title, price, img);
            alert(`سيتم توجيهك الآن لإتمام شراء: ${title}`);
        });
    });

    // Catalog Filter Tabs
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Serial Authenticity Verification Engine
    verifyBtn.addEventListener('click', () => {
        const code = serialInput.value.trim().toUpperCase();
        if (!code) {
            verifyResult.className = 'verify-result error';
            verifyResult.textContent = 'الرجاء إدخال السيريال كود الموجود على العلبة.';
            return;
        }

        // Demo valid pattern
        if (code.startsWith('CABLETO') || code.startsWith('CBL') || code.length >= 8) {
            verifyResult.className = 'verify-result success';
            verifyResult.innerHTML = '<i class="fa-solid fa-circle-check"></i> منتج أصلي 100% من شركة كابليتو (Cableto) - ضمان 12 شهراً مفعل بنجاح!';
        } else {
            verifyResult.className = 'verify-result error';
            verifyResult.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> الكود غير صحيح، يرجى التثبت من الأرقام أو التواصل مع الدعم الفني.';
        }
    });

    // B2B Dealer Form Submit
    if (dealerForm) {
        dealerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('dealer-name').value;
            alert(`تم استلام طلبك بنجاح ياريس! سيتواصل معك مدير مبيعات بالجملة في كابليتو لطلب: (${name}) خلال ساعات.`);
            dealerForm.reset();
        });
    }

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('سلة التسوق فارغة!');
            return;
        }
        alert('شكراً لتسوقك من كابليتو! تم تجهيز طلبك وسيتم التوصيل لك خلال 24-48 ساعة.');
        cart = [];
        updateCartUI();
        toggleCart(false);
    });

    // Initial render
    updateCartUI();
});
