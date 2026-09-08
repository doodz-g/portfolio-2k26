import { ImageResponse } from "next/og";
export const alt="Eduvigis Garcia — QA Engineer & Software Tester";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#f5f3eb",color:"#0b2623",padding:"76px",fontFamily:"sans-serif"}}><div style={{display:"flex",fontSize:28,fontWeight:800}}>EG<span style={{color:"#ff825c"}}>.</span></div><div style={{display:"flex",flexDirection:"column"}}><div style={{fontSize:78,fontWeight:800,letterSpacing:"-4px"}}>I find what others miss.</div><div style={{fontSize:30,marginTop:24,color:"#526864"}}>Eduvigis Garcia · QA Engineer & Software Tester</div></div><div style={{display:"flex",height:12,width:180,background:"#b7f36b",borderRadius:10}}/></div>,size)}
