export const vertexShader = `
      varying vec3 vPos;
      
      void main() {
        vPos = position;
        vec3 viewPosition = (modelViewMatrix * vec4(position, 1.)).xyz;
        gl_Position = projectionMatrix * vec4(viewPosition, 1.);
      }
    `;

export const fragmentShader = `
      uniform sampler2D ringTexture;
      uniform float innerRadius;
      uniform float outerRadius;

      varying vec3 vPos;

      vec4 color() {
        vec2 uv = vec2(0);
        uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
        if (uv.x < 0.0 || uv.x > 1.0) {
          discard;
       }
         
        vec4 pixel = texture2D(ringTexture, uv);
        return pixel;
      }

      void main() {
        gl_FragColor = color();
      }
    `;
