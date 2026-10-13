import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const rows=require('./ledger-data.json');
const rates={USD:1,EUR:1.02,INR:0.0122};
const months={january:0,jan:0,february:1,feb:1,march:2,mar:2,april:3,apr:3,may:4,june:5,jun:5,july:6,jul:6,august:7,aug:7,september:8,sep:8,october:9,oct:9,november:10,nov:10,december:11,dec:11};
const regionNames=['North','South','East','West','Central'];
function filters(q){
 const s=q.toLowerCase();
 let region=regionNames.find(x=>new RegExp(`\\b${x.toLowerCase()}(?:ern)?\\b`).test(s));
 let product=[...new Set(rows.map(r=>r.product))].find(x=>s.includes(x.toLowerCase()));
 let customer=(s.match(/\bc\s*\d{4}\b/i)||[])[0]?.replace(/\s/g,'').toUpperCase();
 let month=null,year=null; for(const [m,n] of Object.entries(months)){const re=new RegExp(`\\b${m}\\s+(20\\d{2})\\b`);const z=s.match(re);if(z){month=n;year=+z[1];break;}}
 if(year===null){const z=s.match(/\b(20\d{2})\b/);if(z)year=+z[1];}
 let currency=(s.match(/\b(usd|eur|inr)\b/i)||[])[1]?.toUpperCase()||'USD';
 return {region,product,customer,month,year,currency};
}
function businessMonth(v){const p=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Kolkata',year:'numeric',month:'numeric'}).formatToParts(new Date(v));const o=Object.fromEntries(p.map(x=>[x.type,x.value]));return [+o.year,+o.month-1];}
function solve(question){
 const q=String(question||''); const s=q.toLowerCase(); const f=filters(q);
 let kind=/refund|refunded|refunds/.test(s)?'refunded':'paid';
 let candidates=rows.filter(r=>r.status===kind);
 if(f.region)candidates=candidates.filter(r=>r.region.toLowerCase()===f.region.toLowerCase());
 if(f.product)candidates=candidates.filter(r=>r.product.toLowerCase()===f.product.toLowerCase());
 if(f.customer)candidates=candidates.filter(r=>r.customer===f.customer);
 if(f.year!==null||f.month!==null)candidates=candidates.filter(r=>{const [y,m]=businessMonth(r.created_at);return(f.year===null||y===f.year)&&(f.month===null||m===f.month)});
 const value=r=>r.amount*(rates[r.currency]||1)/(rates[f.currency]||1);
 const total=candidates.reduce((a,r)=>a+value(r),0);
 if(/distinct|unique/.test(s)&&/customer/.test(s)) return new Set(candidates.map(r=>r.customer)).size;
 if(/distinct|unique/.test(s)&&/product/.test(s)) return new Set(candidates.map(r=>r.product)).size;
 if(/\b(which|what|name|top|highest|most|best)\b/.test(s)&&/product/.test(s)){
   const metric=/units|quantity|best.?selling|most sold/.test(s)&&!/revenue|sales value|amount/.test(s)?(r=>r.qty):(r=>value(r));
   const g=new Map(); for(const r of candidates)g.set(r.product,(g.get(r.product)||0)+metric(r));
   const best=[...g].sort((a,b)=>b[1]-a[1]); return best.length?best[0][0]:'';
 }
 if(/\b(which|what|name|top|highest|most|best)\b/.test(s)&&/customer/.test(s)){
   const g=new Map(); for(const r of candidates)g.set(r.customer,(g.get(r.customer)||0)+value(r));
   const best=[...g].sort((a,b)=>b[1]-a[1]); return best.length?best[0][0]:'';
 }
 if(/average|avg\b/.test(s)) return candidates.length?Number((total/candidates.length).toFixed(2)):0;
 if(/how many|number of|count of|count\b/.test(s)&&/customer/.test(s)) return new Set(candidates.map(r=>r.customer)).size;
 if(/how many|number of|count of|count\b/.test(s)&&/(orders?|transactions?|refunds?)/.test(s)) return candidates.length;
 if(/how many|number of|count of|count\b|units? sold|quantity/.test(s)&&/units?|items?|products?/.test(s)) return candidates.reduce((a,r)=>a+r.qty,0);
 return Number(total.toFixed(2));
}
export default async function handler(req,res){
 res.setHeader('Access-Control-Allow-Origin','*');res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');
 if(req.method==='OPTIONS')return res.status(204).end();
 if(req.method!=='POST')return res.status(405).json({error:'POST required'});
 try {const q=req.body?.question;if(!q)return res.status(400).json({error:'question required'});return res.status(200).json({answer:solve(q)});}catch(e){return res.status(500).json({error:'Unable to answer question'});}
}
