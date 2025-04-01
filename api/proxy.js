import fetch from 'node-fetch';


export default function handler(req, res) {
    const targetUrl = req.query.url;
    if (!targetUrl || !/^https?:\/\//i.test(targetUrl)) {
        return res.status(400).send('URL invalide');
    }
    const response = await fetch(targetUrl);
    const content = await response.text();
    res.send(content);
}

