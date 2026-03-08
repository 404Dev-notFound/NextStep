const container = document.querySelector(".aurora-container");

const renderer = new ogl.Renderer({alpha:true});
const gl = renderer.gl;

container.appendChild(gl.canvas);

const vertex = `
attribute vec2 position;
void main(){
gl_Position = vec4(position,0.0,1.0);
}
`;

const fragment = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

vec3 color1 = vec3(0.5,0.1,0.6);
vec3 color2 = vec3(0.2,0.7,0.9);

void main(){

vec2 uv = gl_FragCoord.xy/uResolution;

float wave = sin(uv.x*6.0 + uTime*0.7);

vec3 color = mix(color1,color2,uv.x + wave*0.1);

gl_FragColor = vec4(color,0.35);

}
`;

const geometry = new ogl.Triangle(gl);

const program = new ogl.Program(gl,{
vertex,
fragment,
uniforms:{
uTime:{value:0},
uResolution:{value:[window.innerWidth,window.innerHeight]}
}
});

const mesh = new ogl.Mesh(gl,{geometry,program});

function resize(){
renderer.setSize(window.innerWidth,window.innerHeight);
program.uniforms.uResolution.value=[window.innerWidth,window.innerHeight];
}

window.addEventListener("resize",resize);
resize();

function update(t){

requestAnimationFrame(update);

program.uniforms.uTime.value=t*0.001;

renderer.render({scene:mesh});

}

requestAnimationFrame(update);
