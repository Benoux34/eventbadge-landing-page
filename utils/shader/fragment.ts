const fragment = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 1.0 * vDisplacement * u_intensity * sin(vUv.y);

    // Utiliser la coordonnée de texture vUv.y comme position sur l'axe Y
    float yPos = vUv.y;

    // Définir les couleurs
    vec3 color1 = vec3(0.043, 0.517, 0.996); // #0B84FE
    vec3 color2 = vec3(0.184, 0.000, 0.882); // #2f00e1

    vec3 color = mix(color2, color1, yPos);
    color *= 0.7 + distort;

    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragment;
