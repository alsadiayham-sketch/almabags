const DEFAULT_PRODUCTS = [
    { id: 1, name: "شنطة يد جلد كلاسيك", brand: "Michael Kors", category: "شنط يد", sizes: [{ size: "وسط", unit: "حجم", price: 350 }, { size: "كبير", unit: "حجم", price: 450 }], discount: 0, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 2, name: "حقيبة كتف أنيقة", brand: "Coach", category: "شنط كتف", sizes: [{ size: "صغير", unit: "حجم", price: 280 }, { size: "وسط", unit: "حجم", price: 340 }], discount: 0, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop", status: "normal" },
    { id: 3, name: "شنطة كتف بسلسلة ذهبية", brand: "Guess", category: "شنط كتف", sizes: [{ size: "صغير", unit: "حجم", price: 310 }, { size: "وسط", unit: "حجم", price: 390 }], discount: 10, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", status: "special" },
    { id: 4, name: "حقيبة ظهر عملية", brand: "Zara", category: "شنط ظهر", sizes: [{ size: "صغير", unit: "حجم", price: 220 }, { size: "وسط", unit: "حجم", price: 290 }], discount: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", status: "normal" },
    { id: 5, name: "كلاتش سهرة مخمل", brand: "Aldo", category: "كلاتش", sizes: [{ size: "صغير", unit: "حجم", price: 180 }, { size: "وسط", unit: "حجم", price: 230 }], discount: 0, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop", status: "special" },
    { id: 6, name: "شنطة توت يومية", brand: "Nine West", category: "شنط يد", sizes: [{ size: "وسط", unit: "حجم", price: 260 }, { size: "كبير", unit: "حجم", price: 330 }], discount: 0, image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=400&h=400&fit=crop", status: "normal" },
    { id: 7, name: "شنطة كروس بودي عصرية", brand: "Michael Kors", category: "شنط كتف", sizes: [{ size: "صغير", unit: "حجم", price: 240 }, { size: "وسط", unit: "حجم", price: 295 }], discount: 0, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 8, name: "محفظة جلد بسحاب", brand: "Coach", category: "محافظ", sizes: [{ size: "صغير", unit: "حجم", price: 95 }, { size: "وسط", unit: "حجم", price: 130 }], discount: 0, image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop", status: "normal" },
    { id: 9, name: "شنطة سفر خفيفة", brand: "Guess", category: "شنط سفر", sizes: [{ size: "وسط", unit: "حجم", price: 420 }, { size: "كبير", unit: "حجم", price: 520 }], discount: 5, image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop", status: "special" },
    { id: 10, name: "حقيبة يد فاخرة", brand: "Zara", category: "شنط يد", sizes: [{ size: "صغير", unit: "حجم", price: 380 }, { size: "وسط", unit: "حجم", price: 470 }], discount: 0, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 11, name: "ميني باج للمشاوير", brand: "Aldo", category: "شنط يد", sizes: [{ size: "صغير", unit: "حجم", price: 170 }, { size: "وسط", unit: "حجم", price: 220 }], discount: 0, image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&h=400&fit=crop", status: "normal" },
    { id: 12, name: "شنطة يد جلد ناعم", brand: "Nine West", category: "شنط يد", sizes: [{ size: "وسط", unit: "حجم", price: 300 }, { size: "كبير", unit: "حجم", price: 390 }], discount: 0, image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=400&h=400&fit=crop", status: "normal" },
    { id: 13, name: "شنطة كتف جلدية كلاسيكية", brand: "Michael Kors", category: "شنط كتف", sizes: [{ size: "وسط", unit: "حجم", price: 360 }, { size: "كبير", unit: "حجم", price: 440 }], discount: 0, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", status: "special" },
    { id: 14, name: "حقيبة يد بسلسلة", brand: "Coach", category: "شنط يد", sizes: [{ size: "صغير", unit: "حجم", price: 290 }, { size: "وسط", unit: "حجم", price: 350 }], discount: 0, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop", status: "normal" },
    { id: 15, name: "شنطة كاجوال يومية", brand: "Guess", category: "شنط كتف", sizes: [{ size: "صغير", unit: "حجم", price: 230 }, { size: "وسط", unit: "حجم", price: 285 }], discount: 0, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", status: "normal" },
    { id: 16, name: "حقيبة ظهر أنيقة", brand: "Zara", category: "شنط ظهر", sizes: [{ size: "صغير", unit: "حجم", price: 210 }, { size: "وسط", unit: "حجم", price: 275 }], discount: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 17, name: "كلاتش جلد مطرز", brand: "Aldo", category: "كلاتش", sizes: [{ size: "صغير", unit: "حجم", price: 190 }, { size: "وسط", unit: "حجم", price: 240 }], discount: 0, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop", status: "normal" },
    { id: 18, name: "شنطة توت كبيرة للعمل", brand: "Nine West", category: "شنط يد", sizes: [{ size: "وسط", unit: "حجم", price: 340 }, { size: "كبير", unit: "حجم", price: 420 }], discount: 8, image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=400&h=400&fit=crop", status: "special" },
    { id: 19, name: "شنطة كروس بودي صغيرة", brand: "Michael Kors", category: "شنط كتف", sizes: [{ size: "صغير", unit: "حجم", price: 250 }, { size: "وسط", unit: "حجم", price: 310 }], discount: 0, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop", status: "normal" },
    { id: 20, name: "محفظة كلاسيكية متعددة الجيوب", brand: "Coach", category: "محافظ", sizes: [{ size: "صغير", unit: "حجم", price: 110 }, { size: "وسط", unit: "حجم", price: 145 }], discount: 0, image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?w=400&h=400&fit=crop", status: "bestseller" },
    { id: 21, name: "شنطة سفر جلدية", brand: "Guess", category: "شنط سفر", sizes: [{ size: "وسط", unit: "حجم", price: 480 }, { size: "كبير", unit: "حجم", price: 610 }], discount: 0, image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=400&h=400&fit=crop", status: "soldout" },
    { id: 22, name: "حقيبة يد للمناسبات", brand: "Zara", category: "شنط يد", sizes: [{ size: "صغير", unit: "حجم", price: 320 }, { size: "وسط", unit: "حجم", price: 410 }], discount: 0, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", status: "normal" },
    { id: 23, name: "ميني كلاتش معدني", brand: "Aldo", category: "كلاتش", sizes: [{ size: "صغير", unit: "حجم", price: 160 }, { size: "وسط", unit: "حجم", price: 205 }], discount: 0, image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?w=400&h=400&fit=crop", status: "special" },
    { id: 24, name: "شنطة يد جلد فاخرة", brand: "Nine West", category: "شنط يد", sizes: [{ size: "وسط", unit: "حجم", price: 370 }, { size: "كبير", unit: "حجم", price: 460 }], discount: 0, image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=400&h=400&fit=crop", status: "bestseller" }
];

const DEFAULT_DISCOUNTS = [];

const DEFAULT_SITE_SETTINGS = {
    whatsappNumber: '972569236758',
    heroSubtitle: 'أرقى الشنط والحقائب الأصلية في فلسطين',
    aboutText: 'متجر ألما للشنط - نوفر لكِ أرقى الشنط والحقائب من أفضل الماركات العالمية\n\nجميع منتجاتنا أصلية ومضمونة مع خدمة توصيل لجميع المناطق',
    instagramLink: 'https://www.instagram.com/alma.bags.ps/',
    tiktokLink: ''
};

function makeBrandLogo(name) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80"><rect width="220" height="80" rx="16" fill="#FDF8EE"/><rect x="6" y="6" width="208" height="68" rx="12" fill="#FFFDF8" stroke="#C9A96E" stroke-width="2"/><text x="110" y="47" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#8B6914">' + name + '</text></svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const BRANDS_DATA = [
    { name: 'Michael Kors', logo: makeBrandLogo('Michael Kors') },
    { name: 'Coach', logo: makeBrandLogo('Coach') },
    { name: 'Guess', logo: makeBrandLogo('Guess') },
    { name: 'Zara', logo: makeBrandLogo('Zara') },
    { name: 'Aldo', logo: makeBrandLogo('Aldo') },
    { name: 'Nine West', logo: makeBrandLogo('Nine West') }
];

function normalizeSizeEntry(entry) {
    if (!entry) return { size: '', unit: 'حجم', price: 0 };
    var rawUnit = String(entry.unit || 'حجم').trim();
    var normalizedUnit = rawUnit === 'g' || rawUnit === 'ml' || rawUnit === 'حجم' ? rawUnit : 'حجم';
    return {
        size: String(entry.size || '').trim(),
        unit: normalizedUnit,
        price: Number(entry.price) || 0
    };
}

function normalizeProduct(product) {
    const sizes = Array.isArray(product && product.sizes) && product.sizes.length
        ? product.sizes.map(normalizeSizeEntry)
        : [normalizeSizeEntry({ size: product && product.size, unit: product && product.unit, price: product && product.price })];

    return {
        id: Number(product && product.id) || Date.now(),
        name: (product && product.name) || '',
        brand: (product && product.brand) || '',
        category: (product && product.category) || '',
        sizes: sizes.filter(function (size) { return size.size && size.price >= 0; }),
        discount: Number(product && product.discount) || 0,
        image: (product && product.image) || '',
        status: (product && product.status) || 'normal'
    };
}

function normalizeProducts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeProduct).sort(function (a, b) { return a.id - b.id; });
}

function normalizeDiscount(discount) {
    var values = [];
    if (discount && discount.values && Array.isArray(discount.values)) {
        values = discount.values;
    } else if (discount && discount.value) {
        values = String(discount.value).split(',').map(function (v) { return v.trim(); }).filter(Boolean);
    }
    return {
        id: String(discount && discount.id ? discount.id : Date.now()),
        type: ['brand', 'category', 'manual', 'all'].indexOf(discount && discount.type) >= 0 ? discount.type : 'manual',
        value: values.join(', '),
        values: values,
        percentage: Number(discount && discount.percentage) || 0,
        description: String(discount && discount.description ? discount.description : '').trim(),
        expiresAt: discount && discount.expiresAt ? discount.expiresAt : ''
    };
}

function normalizeDiscounts(list) {
    return (Array.isArray(list) ? list : []).map(normalizeDiscount);
}

function extractWhatsappNumber(input) {
    const raw = String(input || '').trim();
    if (!raw) return DEFAULT_SITE_SETTINGS.whatsappNumber;
    const fromLink = raw.indexOf('wa.me/') >= 0 ? raw.split('wa.me/')[1] : raw;
    return fromLink.replace(/[^\d]/g, '');
}

function buildWhatsAppUrl(number, message) {
    const safeNumber = extractWhatsappNumber(number);
    const text = message ? '?text=' + encodeURIComponent(message) : '';
    return 'https://wa.me/' + safeNumber + text;
}

function normalizeSettings(settings) {
    const source = settings || {};
    return {
        whatsappNumber: extractWhatsappNumber(source.whatsappNumber || source.whatsappLink || DEFAULT_SITE_SETTINGS.whatsappNumber),
        heroSubtitle: String(source.heroSubtitle || DEFAULT_SITE_SETTINGS.heroSubtitle),
        aboutText: String(source.aboutText || DEFAULT_SITE_SETTINGS.aboutText),
        instagramLink: String(source.instagramLink || DEFAULT_SITE_SETTINGS.instagramLink),
        tiktokLink: String(source.tiktokLink || DEFAULT_SITE_SETTINGS.tiktokLink)
    };
}

function getSizeData(product, sizeIdx) {
    if (!product || !Array.isArray(product.sizes) || !product.sizes.length) return { size: '', unit: 'حجم', price: 0 };
    const safeIndex = Math.max(0, Math.min(Number(sizeIdx) || 0, product.sizes.length - 1));
    return product.sizes[safeIndex];
}

function getUnitLabel(unit) {
    if (unit === 'حجم') return '';
    return unit === 'g' ? 'غرام' : 'مل';
}

function getSizeLabel(sizeData) {
    if (!sizeData) return '';
    if (sizeData.unit === 'حجم') return String(sizeData.size || '');
    return String(sizeData.size) + ' ' + getUnitLabel(sizeData.unit);
}

function getProductDiscountPercent(product, discounts) {
    let discountPercent = Number(product && product.discount) || 0;
    var now = new Date().toISOString().slice(0, 10);
    normalizeDiscounts(discounts).forEach(function (discount) {
        if (discount.expiresAt && discount.expiresAt < now) return;
        if (discount.type === 'all') discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'brand' && discount.values.indexOf(product.brand) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
        if (discount.type === 'category' && discount.values.indexOf(product.category) >= 0) discountPercent = Math.max(discountPercent, discount.percentage);
    });
    return discountPercent;
}

function getFinalPrice(product, sizeIdx, discounts) {
    const sizeData = getSizeData(product, sizeIdx);
    const discountPercent = getProductDiscountPercent(product, discounts || []);
    if (discountPercent > 0) {
        return {
            original: Number(sizeData.price) || 0,
            final: Math.round((Number(sizeData.price) || 0) * (1 - discountPercent / 100)),
            hasDiscount: true,
            discountPercent: discountPercent
        };
    }

    return {
        original: Number(sizeData.price) || 0,
        final: Number(sizeData.price) || 0,
        hasDiscount: false,
        discountPercent: 0
    };
}

function normalizeCartItems(cartItems, productsList) {
    const safeProducts = Array.isArray(productsList) ? productsList : normalizeProducts(DEFAULT_PRODUCTS);
    return (Array.isArray(cartItems) ? cartItems : []).map(function (item) {
        const product = safeProducts.find(function (entry) { return entry.id === Number(item.id || item.productId); });
        const maxSizeIndex = product && product.sizes.length ? product.sizes.length - 1 : 0;
        const requestedSize = Number.isInteger(item.sizeIdx) ? item.sizeIdx : parseInt(item.sizeIdx || 0, 10) || 0;
        const sizeIdx = Math.max(0, Math.min(requestedSize, maxSizeIndex));
        return {
            id: Number(item.id || item.productId),
            sizeIdx: sizeIdx,
            qty: Math.max(1, parseInt(item.qty || 1, 10) || 1),
            price: Number(item.price) || (product ? getSizeData(product, sizeIdx).price : 0)
        };
    }).filter(function (item) {
        return item.id;
    });
}

function formatCurrency(value) {
    return '₪' + (Number(value) || 0);
}

function formatDateTime(dateValue) {
    const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleString('ar-PS', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function makeOrderId() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let idx = 0; idx < 5; idx += 1) {
        code += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return 'ORD-' + code;
}
