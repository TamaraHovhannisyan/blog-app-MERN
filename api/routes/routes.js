export function register(req, res) { 
    const { username, password } = req.body;
    res.json({ requestData: { username, password } });
}
