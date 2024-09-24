const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; 
    if (!apiKey) {
        return res.status(401).json({ error: 'API key missing' });
    }
    
    if (apiKey !== process.env.API_KEY) { 
        return res.status(403).json({ error: 'Unauthorized access' });
    }
    
    next(); 
};
module.exports = {verifyApiKey}
