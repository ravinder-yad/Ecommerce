import ActivityLog from '../models/SQL/ActivityLog.js';
import Product from '../models/SQL/Product.js';

// 💂‍♂️ ShopVerse Activity Intelligence Middleware (Police-Grade)
export const trackActivity = (io) => {
  return async (req, res, next) => {
    // 🚀 Intercept 'res.json' to log after successful response
    const originalJson = res.json;
    res.json = function (data) {
      res.locals.body = data;
      return originalJson.apply(this, arguments);
    };

    res.on('finish', async () => {
      // 🚔 Define tracking logic based on route and outcome
      if (res.statusCode >= 200 && res.statusCode < 300) {
        let action = null;
        let metadata = {};

        // 🔍 Pattern: Authentication
        if (req.url.includes('/api/auth/login') && req.method === 'POST') {
          action = 'LOGIN';
          metadata = { email: req.body.email };
        }

        // 🔍 Pattern: Product Discoveries
        if (req.url.match(/\/api\/products\/[a-f0-9]+/) && req.method === 'GET') {
          action = 'VIEW_PRODUCT';
          const productId = req.url.split('/').pop();
          metadata = { productId };
          
          // 🏛️ Incremental view tracking for 'Police-grade' accuracy
          try {
            await Product.increment('views', { where: { id: productId } });
          } catch (err) { /* Silent fail for tracking robustness */ }
        }

        // 🔍 Pattern: Transactional Initiation
        if (req.url.includes('/api/orders') && req.method === 'POST') {
          action = 'ORDER_PLACED';
          metadata = { 
            orderId: res.locals.body?._id || res.locals.body?.id,
            total: req.body.totalPrice 
          };
        }

        // 🔍 Pattern: Possession (Add to Cart)
        if (req.url.includes('/api/cart') && req.method === 'POST') {
          action = 'ADD_TO_CART';
          metadata = { productId: req.body.productId };
        }

        // 💾 Permanently log the activity in the SQL Registry
        if (action) {
          try {
            const logEntry = await ActivityLog.create({
              userId: req.user ? req.user.id : null,
              action,
              metadata,
              ipAddress: req.ip || req.connection.remoteAddress,
              userAgent: req.headers['user-agent']
            });

            // ⚡ Real-time Digital Streaming to Command Center
            if (io) {
              io.emit('live_activity', {
                ...logEntry.toJSON(),
                user: req.user ? { fullName: req.user.fullName, email: req.user.email } : 'Anonymous'
              });
            }
          } catch (error) {
            console.error('❌ Activity Logging Failed:', error.message);
          }
        }
      }
    });

    next();
  };
};
