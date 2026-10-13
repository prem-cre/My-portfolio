export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({error:'Method not allowed'});
  const c = {port:8000, workers:1, debug:false, log_level:'info', api_key:'default-secret-000'};
  Object.assign(c, {workers:10, api_key:'key-yif9erj1bx'});
  Object.assign(c, {workers:13, log_level:'debug', api_key:'key-cw8mmii795'});
  Object.assign(c, {workers:13, debug:true, api_key:'key-ilext6ab5m'});
  let sets = req.query?.set ?? [];
  if (!Array.isArray(sets)) sets = [sets];
  for (const entry of sets) {
    const i = String(entry).indexOf('=');
    if (i > 0) c[String(entry).slice(0,i)] = String(entry).slice(i+1);
  }
  c.port = parseInt(c.port,10); c.workers = parseInt(c.workers,10);
  c.debug = typeof c.debug === 'boolean' ? c.debug : /^(true|1|yes|on)$/i.test(String(c.debug));
  c.log_level = String(c.log_level); c.api_key = '****';
  return res.status(200).json(c);
}
