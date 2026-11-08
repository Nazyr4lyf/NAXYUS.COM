"use client";
import {useEffect,useRef} from "react";
export default function WebGLHero(){
 const ref=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const canvas=ref.current;if(!canvas)return;
  const gl=canvas.getContext("webgl",{alpha:true,antialias:true});if(!gl)return;
  const vertex="attribute vec2 position; varying vec2 uv; void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}";
  const fragment="precision mediump float;varying vec2 uv;void main(){vec2 p=(uv-.5)*2.;float r=length(p);float a=atan(p.y,p.x);float wave=sin(a*5.0+r*24.0)*.018;float sphere=1.0-smoothstep(.15,1.0,r+wave);vec3 blue=vec3(.025,.20,.80);vec3 cyan=vec3(.0,.78,.95);vec3 violet=vec3(.30,.12,.72);vec3 color=mix(blue,cyan,clamp(uv.x*.75+uv.y*.25,0.,1.));color=mix(color,violet,smoothstep(.15,.85,uv.y)*.45);float light=pow(max(0.,1.-r),2.4);color+=vec3(.12,.34,.8)*light;gl_FragColor=vec4(color,sphere*.92);}";
  const compile=(type:number,source:string)=>{const s=gl.createShader(type);if(!s)return null;gl.shaderSource(s,source);gl.compileShader(s);return gl.getShaderParameter(s,gl.COMPILE_STATUS)?s:null;};
  const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
  const program=gl.createProgram();if(!program)return;gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
  gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(program,"position");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  const draw=()=>{const dpr=Math.min(window.devicePixelRatio||1,1.5),w=Math.floor(canvas.clientWidth*dpr),h=Math.floor(canvas.clientHeight*dpr);canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);gl.drawArrays(gl.TRIANGLES,0,6);};draw();
  return()=>{gl.deleteProgram(program);gl.deleteBuffer(buffer);gl.deleteShader(vs);gl.deleteShader(fs);};
 },[]);
 return <div className="visual" aria-hidden="true"><div className="planet"/><canvas ref={ref}/><i/><b/><span/></div>;
}
