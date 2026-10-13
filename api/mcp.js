import {createHash} from 'node:crypto';
const headers = {
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'POST, OPTIONS',
  'Access-Control-Allow-Headers':'Content-Type, Accept, Mcp-Session-Id, MCP-Protocol-Version, X-Exam-Challenge, X-Exam-Timestamp, X-Exam-Signature',
  'Access-Control-Expose-Headers':'Mcp-Session-Id, MCP-Protocol-Version',
  'Content-Type':'application/json',
};
export default async function handler(req,res) {
  for (const [k,v] of Object.entries(headers)) res.setHeader(k,v);
  if(req.method==='OPTIONS') return res.status(204).end();
  if(req.method!=='POST') return res.status(405).json({error:'POST required'});
  const body=typeof req.body==='object'&&req.body?req.body:{};
  const {id,method,params={}}=body;
  if(method==='notifications/initialized') return res.status(202).end();
  let result;
  if(method==='initialize') result={protocolVersion:params.protocolVersion||'2024-11-05',capabilities:{tools:{}},serverInfo:{name:'exam-challenge-server',version:'1.0.0'}};
  else if(method==='ping') result={};
  else if(method==='tools/list') result={tools:[{name:'solve_challenge',description:'Solve the current exam challenge from the X-Exam-Challenge HTTP header.',inputSchema:{type:'object',properties:{},additionalProperties:false}}]};
  else if(method==='tools/call') {
    if(params.name!=='solve_challenge') return res.status(200).json({jsonrpc:'2.0',id,result:{content:[{type:'text',text:'Unknown tool'}],isError:true}});
    const challenge=String(req.headers['x-exam-challenge']||'');
    const email='24f3001802@ds.study.iitm.ac.in';
    const answer=createHash('sha256').update(`${challenge}:${email}`).digest('hex').slice(0,16);
    result={content:[{type:'text',text:answer}],isError:false};
  } else return res.status(200).json({jsonrpc:'2.0',id,error:{code:-32601,message:'Method not found'}});
  return res.status(200).json({jsonrpc:'2.0',id,result});
}
