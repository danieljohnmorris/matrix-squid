import{U as At,c as ur,N as bt,S as pr,C as Je,F as Pa,V as Le,R as hr,e as je,w as Ke,a as _t,l as ui,b as Da,M as en,W as pi,d as Rt,f as rt,L as $t,H as Bt,D as Dt,B as St,g as dn,h as Pn,p as mr,i as mn,j as hi,k as _r,m as wt,O as La,n as $e,E as gr,o as Qe,P as Mn,A as vr,q as yn,r as Lt,s as jt,t as tn,u as un,v as Xt,x as Rn,y as Sr,z as Er,G as pn,I as vt,J as Zn,K as hn,Q as nn,T as Jn,X as xr,Y as Zt,Z as mi,_ as Mr,$ as Tr,a0 as rn,a1 as Ar,a2 as br,a3 as Rr,a4 as Cr,a5 as Pr,a6 as Dr,a7 as Lr,a8 as Ur,a9 as wr,aa as Ir,ab as yr,ac as Nr,ad as Fr,ae as Or,af as Br,ag as Gr,ah as Hr,ai as Nn,aj as vn,ak as Vr,al as zt,am as kr,an as Wr,ao as ei,ap as zr,aq as ti,ar as Xr,as as Yr,at as Kr,au as Ua,av as Be,aw as qr,ax as Zr,ay as It,az as fn,aA as Tn,aB as $r,aC as Ut,aD as ln,aE as Ft,aF as jr,aG as wa,aH as Ia,aI as ya,aJ as Cn,aK as Na,aL as Fa,aM as Oa,aN as Ba,aO as Dn,aP as Qr,aQ as Jr,aR as eo,aS as to,aT as Ga,aU as no,aV as io,aW as ao,aX as Fn,aY as On,aZ as Bn,a_ as Gn,a$ as _i,b0 as gi,b1 as vi,b2 as Si,b3 as Ei,b4 as xi,b5 as Mi,b6 as Ti,b7 as Ai,b8 as bi,b9 as Ri,ba as Ci,bb as Pi,bc as Di,bd as Li,be as Ui,bf as wi,bg as Ii,bh as yi,bi as Ni,bj as Fi,bk as Oi,bl as Bi,bm as Gi,bn as Hi,bo as Vi,bp as ki,bq as Wi,br as zi,bs as Xi,bt as Yi,bu as Ki,bv as ro,bw as oo,bx as so,by as lo,bz as co,bA as fo,bB as uo,bC as po,bD as qi,bE as ho,bF as An,bG as mo,bH as Zi,bI as $i,bJ as ji,bK as Ha,bL as _o,bM as go,bN as vo,bO as Va,bP as $n,bQ as ka,bR as Wa,bS as So,bT as za,bU as Xa,bV as Ya,bW as Ka,bX as qa,bY as Za,bZ as $a,b_ as Qi,b$ as ja,c0 as Hn,c1 as Vn,c2 as Eo,c3 as xo,c4 as Ji,c5 as mt,c6 as Mo,c7 as To,c8 as Ao,c9 as bo,ca as Ro,cb as Co,cc as Po,cd as Do,ce as Lo,cf as Uo,cg as wo,ch as Jt,ci as Qt,cj as ea,ck as ta,cl as Io,cm as yo}from"./three-core-DAsTs3LU.js";function Qa(){let e=null,n=!1,t=null,i=null;function o(r,c){t(r,c),i=e.requestAnimationFrame(o)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(o),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function No(e){const n=new WeakMap;function t(m,D){const x=m.array,P=m.usage,R=x.byteLength,p=e.createBuffer();e.bindBuffer(D,p),e.bufferData(D,x,P),m.onUploadCallback();let _;if(x instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&x instanceof Float16Array)_=e.HALF_FLOAT;else if(x instanceof Uint16Array)m.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(x instanceof Int16Array)_=e.SHORT;else if(x instanceof Uint32Array)_=e.UNSIGNED_INT;else if(x instanceof Int32Array)_=e.INT;else if(x instanceof Int8Array)_=e.BYTE;else if(x instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:p,type:_,bytesPerElement:x.BYTES_PER_ELEMENT,version:m.version,size:R}}function i(m,D,x){const P=D.array,R=D.updateRanges;if(e.bindBuffer(x,m),R.length===0)e.bufferSubData(x,0,P);else{R.sort((_,E)=>_.start-E.start);let p=0;for(let _=1;_<R.length;_++){const E=R[p],I=R[_];I.start<=E.start+E.count+1?E.count=Math.max(E.count,I.start+I.count-E.start):(++p,R[p]=I)}R.length=p+1;for(let _=0,E=R.length;_<E;_++){const I=R[_];e.bufferSubData(x,I.start*P.BYTES_PER_ELEMENT,P,I.start,I.count)}D.clearUpdateRanges()}D.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),n.get(m)}function r(m){m.isInterleavedBufferAttribute&&(m=m.data);const D=n.get(m);D&&(e.deleteBuffer(D.buffer),n.delete(m))}function c(m,D){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const P=n.get(m);(!P||P.version<m.version)&&n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const x=n.get(m);if(x===void 0)n.set(m,t(m,D));else if(x.version<m.version){if(x.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(x.buffer,m,D),x.version=m.version}}return{get:o,remove:r,update:c}}var Fo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Go=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ho=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ko=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ko=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$o=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,es=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ts=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ns=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,is=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,as=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rs=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,os=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ss=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ls=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ds=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,us="gl_FragColor = linearToOutputTexel( gl_FragColor );",ps=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ms=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_s=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ss=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Es=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ms=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ts=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,As=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rs=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ps=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ds=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ls=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Us=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ws=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Is=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ys=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ns=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Os=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ks=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ws=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xs=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ys=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ks=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$s=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,js=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Js=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,el=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,il=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,al=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ol=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ll=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ul=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ml=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_l=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,El=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ml=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Al=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ll=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ul=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Il=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ol=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ql=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$l=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ql=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ec=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ic=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ac=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Fo,alphahash_pars_fragment:Oo,alphamap_fragment:Bo,alphamap_pars_fragment:Go,alphatest_fragment:Ho,alphatest_pars_fragment:Vo,aomap_fragment:ko,aomap_pars_fragment:Wo,batching_pars_vertex:zo,batching_vertex:Xo,begin_vertex:Yo,beginnormal_vertex:Ko,bsdfs:qo,iridescence_fragment:Zo,bumpmap_pars_fragment:$o,clipping_planes_fragment:jo,clipping_planes_pars_fragment:Qo,clipping_planes_pars_vertex:Jo,clipping_planes_vertex:es,color_fragment:ts,color_pars_fragment:ns,color_pars_vertex:is,color_vertex:as,common:rs,cube_uv_reflection_fragment:os,defaultnormal_vertex:ss,displacementmap_pars_vertex:ls,displacementmap_vertex:cs,emissivemap_fragment:fs,emissivemap_pars_fragment:ds,colorspace_fragment:us,colorspace_pars_fragment:ps,envmap_fragment:hs,envmap_common_pars_fragment:ms,envmap_pars_fragment:_s,envmap_pars_vertex:gs,envmap_physical_pars_fragment:Ps,envmap_vertex:vs,fog_vertex:Ss,fog_pars_vertex:Es,fog_fragment:xs,fog_pars_fragment:Ms,gradientmap_pars_fragment:Ts,lightmap_pars_fragment:As,lights_lambert_fragment:bs,lights_lambert_pars_fragment:Rs,lights_pars_begin:Cs,lights_toon_fragment:Ds,lights_toon_pars_fragment:Ls,lights_phong_fragment:Us,lights_phong_pars_fragment:ws,lights_physical_fragment:Is,lights_physical_pars_fragment:ys,lights_fragment_begin:Ns,lights_fragment_maps:Fs,lights_fragment_end:Os,logdepthbuf_fragment:Bs,logdepthbuf_pars_fragment:Gs,logdepthbuf_pars_vertex:Hs,logdepthbuf_vertex:Vs,map_fragment:ks,map_pars_fragment:Ws,map_particle_fragment:zs,map_particle_pars_fragment:Xs,metalnessmap_fragment:Ys,metalnessmap_pars_fragment:Ks,morphinstance_vertex:qs,morphcolor_vertex:Zs,morphnormal_vertex:$s,morphtarget_pars_vertex:js,morphtarget_vertex:Qs,normal_fragment_begin:Js,normal_fragment_maps:el,normal_pars_fragment:tl,normal_pars_vertex:nl,normal_vertex:il,normalmap_pars_fragment:al,clearcoat_normal_fragment_begin:rl,clearcoat_normal_fragment_maps:ol,clearcoat_pars_fragment:sl,iridescence_pars_fragment:ll,opaque_fragment:cl,packing:fl,premultiplied_alpha_fragment:dl,project_vertex:ul,dithering_fragment:pl,dithering_pars_fragment:hl,roughnessmap_fragment:ml,roughnessmap_pars_fragment:_l,shadowmap_pars_fragment:gl,shadowmap_pars_vertex:vl,shadowmap_vertex:Sl,shadowmask_pars_fragment:El,skinbase_vertex:xl,skinning_pars_vertex:Ml,skinning_vertex:Tl,skinnormal_vertex:Al,specularmap_fragment:bl,specularmap_pars_fragment:Rl,tonemapping_fragment:Cl,tonemapping_pars_fragment:Pl,transmission_fragment:Dl,transmission_pars_fragment:Ll,uv_pars_fragment:Ul,uv_pars_vertex:wl,uv_vertex:Il,worldpos_vertex:yl,background_vert:Nl,background_frag:Fl,backgroundCube_vert:Ol,backgroundCube_frag:Bl,cube_vert:Gl,cube_frag:Hl,depth_vert:Vl,depth_frag:kl,distance_vert:Wl,distance_frag:zl,equirect_vert:Xl,equirect_frag:Yl,linedashed_vert:Kl,linedashed_frag:ql,meshbasic_vert:Zl,meshbasic_frag:$l,meshlambert_vert:jl,meshlambert_frag:Ql,meshmatcap_vert:Jl,meshmatcap_frag:ec,meshnormal_vert:tc,meshnormal_frag:nc,meshphong_vert:ic,meshphong_frag:ac,meshphysical_vert:rc,meshphysical_frag:oc,meshtoon_vert:sc,meshtoon_frag:lc,points_vert:cc,points_frag:fc,shadow_vert:dc,shadow_frag:uc,sprite_vert:pc,sprite_frag:hc},re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Tt={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new Le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Tt.physical={uniforms:mt([Tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Sn={r:0,b:0,g:0},Vt=new ka,mc=new en;function _c(e,n,t,i,o,r){const c=new Je(0);let m=o===!0?0:1,D,x,P=null,R=0,p=null;function _(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){const M=v.backgroundBlurriness>0;A=n.get(A,M)}return A}function E(v){let A=!1;const M=_(v);M===null?f(c,m):M&&M.isColor&&(f(M,1),A=!0);const F=e.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function I(v,A){const M=_(A);M&&(M.isCubeTexture||M.mapping===Dn)?(x===void 0&&(x=new wt(new Jn(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:$n(Tt.backgroundCube.uniforms),vertexShader:Tt.backgroundCube.vertexShader,fragmentShader:Tt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(x)),Vt.copy(A.backgroundRotation),Vt.x*=-1,Vt.y*=-1,Vt.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vt.y*=-1,Vt.z*=-1),x.material.uniforms.envMap.value=M,x.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(mc.makeRotationFromEuler(Vt)),x.material.toneMapped=rt.getTransfer(M.colorSpace)!==$e,(P!==M||R!==M.version||p!==e.toneMapping)&&(x.material.needsUpdate=!0,P=M,R=M.version,p=e.toneMapping),x.layers.enableAll(),v.unshift(x,x.geometry,x.material,0,0,null)):M&&M.isTexture&&(D===void 0&&(D=new wt(new Ba(2,2),new It({name:"BackgroundMaterial",uniforms:$n(Tt.background.uniforms),vertexShader:Tt.background.vertexShader,fragmentShader:Tt.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),D.geometry.deleteAttribute("normal"),Object.defineProperty(D.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(D)),D.material.uniforms.t2D.value=M,D.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,D.material.toneMapped=rt.getTransfer(M.colorSpace)!==$e,M.matrixAutoUpdate===!0&&M.updateMatrix(),D.material.uniforms.uvTransform.value.copy(M.matrix),(P!==M||R!==M.version||p!==e.toneMapping)&&(D.material.needsUpdate=!0,P=M,R=M.version,p=e.toneMapping),D.layers.enableAll(),v.unshift(D,D.geometry,D.material,0,0,null))}function f(v,A){v.getRGB(Sn,Va(e)),t.buffers.color.setClear(Sn.r,Sn.g,Sn.b,A,r)}function l(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),D!==void 0&&(D.geometry.dispose(),D.material.dispose(),D=void 0)}return{getClearColor:function(){return c},setClearColor:function(v,A=1){c.set(v),m=A,f(c,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,f(c,m)},render:E,addToRenderList:I,dispose:l}}function gc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},o=p(null);let r=o,c=!1;function m(C,V,z,W,Y){let B=!1;const O=R(C,W,z,V);r!==O&&(r=O,x(r.object)),B=_(C,W,z,Y),B&&E(C,W,z,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,M(C,V,z,W),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function D(){return e.createVertexArray()}function x(C){return e.bindVertexArray(C)}function P(C){return e.deleteVertexArray(C)}function R(C,V,z,W){const Y=W.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const O=C.isInstancedMesh===!0?C.id:0;let ie=B[O];ie===void 0&&(ie={},B[O]=ie);let ae=ie[z.id];ae===void 0&&(ae={},ie[z.id]=ae);let Me=ae[Y];return Me===void 0&&(Me=p(D()),ae[Y]=Me),Me}function p(C){const V=[],z=[],W=[];for(let Y=0;Y<t;Y++)V[Y]=0,z[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:W,object:C,attributes:{},index:null}}function _(C,V,z,W){const Y=r.attributes,B=V.attributes;let O=0;const ie=z.getAttributes();for(const ae in ie)if(ie[ae].location>=0){const Ae=Y[ae];let he=B[ae];if(he===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),Ae===void 0||Ae.attribute!==he||he&&Ae.data!==he.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function E(C,V,z,W){const Y={},B=V.attributes;let O=0;const ie=z.getAttributes();for(const ae in ie)if(ie[ae].location>=0){let Ae=B[ae];Ae===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(Ae=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(Ae=C.instanceColor));const he={};he.attribute=Ae,Ae&&Ae.data&&(he.data=Ae.data),Y[ae]=he,O++}r.attributes=Y,r.attributesNum=O,r.index=W}function I(){const C=r.newAttributes;for(let V=0,z=C.length;V<z;V++)C[V]=0}function f(C){l(C,0)}function l(C,V){const z=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;z[C]=1,W[C]===0&&(e.enableVertexAttribArray(C),W[C]=1),Y[C]!==V&&(e.vertexAttribDivisor(C,V),Y[C]=V)}function v(){const C=r.newAttributes,V=r.enabledAttributes;for(let z=0,W=V.length;z<W;z++)V[z]!==C[z]&&(e.disableVertexAttribArray(z),V[z]=0)}function A(C,V,z,W,Y,B,O){O===!0?e.vertexAttribIPointer(C,V,z,Y,B):e.vertexAttribPointer(C,V,z,W,Y,B)}function M(C,V,z,W){I();const Y=W.attributes,B=z.getAttributes(),O=V.defaultAttributeValues;for(const ie in B){const ae=B[ie];if(ae.location>=0){let Me=Y[ie];if(Me===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const Ae=Me.normalized,he=Me.itemSize,Ne=n.get(Me);if(Ne===void 0)continue;const et=Ne.buffer,tt=Ne.type,X=Ne.bytesPerElement,J=tt===e.INT||tt===e.UNSIGNED_INT||Me.gpuType===Ga;if(Me.isInterleavedBufferAttribute){const ne=Me.data,De=ne.stride,Te=Me.offset;if(ne.isInstancedInterleavedBuffer){for(let Re=0;Re<ae.locationSize;Re++)l(ae.location+Re,ne.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Re=0;Re<ae.locationSize;Re++)f(ae.location+Re);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Re=0;Re<ae.locationSize;Re++)A(ae.location+Re,he/ae.locationSize,tt,Ae,De*X,(Te+he/ae.locationSize*Re)*X,J)}else{if(Me.isInstancedBufferAttribute){for(let ne=0;ne<ae.locationSize;ne++)l(ae.location+ne,Me.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ne=0;ne<ae.locationSize;ne++)f(ae.location+ne);e.bindBuffer(e.ARRAY_BUFFER,et);for(let ne=0;ne<ae.locationSize;ne++)A(ae.location+ne,he/ae.locationSize,tt,Ae,he*X,he/ae.locationSize*ne*X,J)}}else if(O!==void 0){const Ae=O[ie];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(ae.location,Ae);break;case 3:e.vertexAttrib3fv(ae.location,Ae);break;case 4:e.vertexAttrib4fv(ae.location,Ae);break;default:e.vertexAttrib1fv(ae.location,Ae)}}}}v()}function F(){h();for(const C in i){const V=i[C];for(const z in V){const W=V[z];for(const Y in W){const B=W[Y];for(const O in B)P(B[O].object),delete B[O];delete W[Y]}}delete i[C]}}function L(C){if(i[C.id]===void 0)return;const V=i[C.id];for(const z in V){const W=V[z];for(const Y in W){const B=W[Y];for(const O in B)P(B[O].object),delete B[O];delete W[Y]}}delete i[C.id]}function y(C){for(const V in i){const z=i[V];for(const W in z){const Y=z[W];if(Y[C.id]===void 0)continue;const B=Y[C.id];for(const O in B)P(B[O].object),delete B[O];delete Y[C.id]}}}function d(C){for(const V in i){const z=i[V],W=C.isInstancedMesh===!0?C.id:0,Y=z[W];if(Y!==void 0){for(const B in Y){const O=Y[B];for(const ie in O)P(O[ie].object),delete O[ie];delete Y[B]}delete z[W],Object.keys(z).length===0&&delete i[V]}}}function h(){Z(),c=!0,r!==o&&(r=o,x(r.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:h,resetDefaultState:Z,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:d,releaseStatesOfProgram:y,initAttributes:I,enableAttribute:f,disableUnusedAttributes:v}}function vc(e,n,t){let i;function o(x){i=x}function r(x,P){e.drawArrays(i,x,P),t.update(P,i,1)}function c(x,P,R){R!==0&&(e.drawArraysInstanced(i,x,P,R),t.update(P,i,R))}function m(x,P,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,x,0,P,0,R);let _=0;for(let E=0;E<R;E++)_+=P[E];t.update(_,i,1)}function D(x,P,R,p){if(R===0)return;const _=n.get("WEBGL_multi_draw");if(_===null)for(let E=0;E<x.length;E++)c(x[E],P[E],p[E]);else{_.multiDrawArraysInstancedWEBGL(i,x,0,P,0,p,0,R);let E=0;for(let I=0;I<R;I++)E+=P[I]*p[I];t.update(E,i,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=m,this.renderMultiDrawInstances=D}function Sc(e,n,t,i){let o;function r(){if(o!==void 0)return o;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");o=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(y){return!(y!==Lt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(y){const d=y===Bt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==At&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Ft&&!d)}function D(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=t.precision!==void 0?t.precision:"highp";const P=D(x);P!==x&&(Ke("WebGLRenderer:",x,"not supported, using",P,"instead."),x=P);const R=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),_=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),F=e.getParameter(e.MAX_SAMPLES),L=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:D,textureFormatReadable:c,textureTypeReadable:m,precision:x,logarithmicDepthBuffer:R,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:E,maxTextureSize:I,maxCubemapSize:f,maxAttributes:l,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:M,maxSamples:F,samples:L}}function Ec(e){const n=this;let t=null,i=0,o=!1,r=!1;const c=new Ua,m=new Be,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(R,p){const _=R.length!==0||p||i!==0||o;return o=p,i=R.length,_},this.beginShadows=function(){r=!0,P(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(R,p){t=P(R,p,0)},this.setState=function(R,p,_){const E=R.clippingPlanes,I=R.clipIntersection,f=R.clipShadows,l=e.get(R);if(!o||E===null||E.length===0||r&&!f)r?P(null):x();else{const v=r?0:i,A=v*4;let M=l.clippingState||null;D.value=M,M=P(E,p,A,_);for(let F=0;F!==A;++F)M[F]=t[F];l.clippingState=M,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=v}};function x(){D.value!==t&&(D.value=t,D.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function P(R,p,_,E){const I=R!==null?R.length:0;let f=null;if(I!==0){if(f=D.value,E!==!0||f===null){const l=_+I*4,v=p.matrixWorldInverse;m.getNormalMatrix(v),(f===null||f.length<l)&&(f=new Float32Array(l));for(let A=0,M=_;A!==I;++A,M+=4)c.copy(R[A]).applyMatrix4(v,m),c.normal.toArray(f,M),f[M+3]=c.constant}D.value=f,D.needsUpdate=!0}return n.numPlanes=I,n.numIntersection=0,f}}const Ot=4,na=[.125,.215,.35,.446,.526,.582],Wt=20,xc=256,on=new La,ia=new Je;let kn=null,Wn=0,zn=0,Xn=!1;const Mc=new Le;class aa{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,o=100,r={}){const{size:c=256,position:m=Mc}=r;kn=this._renderer.getRenderTarget(),Wn=this._renderer.getActiveCubeFace(),zn=this._renderer.getActiveMipmapLevel(),Xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const D=this._allocateTargets();return D.depthBuffer=!0,this._sceneToCubeUV(n,i,o,D,m),t>0&&this._blur(D,0,0,t),this._applyPMREM(D),this._cleanup(D),D}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(kn,Wn,zn),this._renderer.xr.enabled=Xn,n.scissorTest=!1,qt(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===hn||n.mapping===nn?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),kn=this._renderer.getRenderTarget(),Wn=this._renderer.getActiveCubeFace(),zn=this._renderer.getActiveMipmapLevel(),Xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Bt,format:Lt,colorSpace:Pn,depthBuffer:!1},o=ra(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ra(n,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tc(r)),this._blurMaterial=bc(r,n,t),this._ggxMaterial=Ac(r,n,t)}return o}_compileMaterial(n){const t=new wt(new mn,n);this._renderer.compile(t,on)}_sceneToCubeUV(n,t,i,o,r){const D=new Mn(90,1,t,i),x=[1,-1,1,1,1,1],P=[1,1,1,-1,-1,-1],R=this._renderer,p=R.autoClear,_=R.toneMapping;R.getClearColor(ia),R.toneMapping=bt,R.autoClear=!1,R.state.buffers.depth.getReversed()&&(R.setRenderTarget(o),R.clearDepth(),R.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Jn,new xr({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,f=I.material;let l=!1;const v=n.background;v?v.isColor&&(f.color.copy(v),n.background=null,l=!0):(f.color.copy(ia),l=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(D.up.set(0,x[A],0),D.position.set(r.x,r.y,r.z),D.lookAt(r.x+P[A],r.y,r.z)):M===1?(D.up.set(0,0,x[A]),D.position.set(r.x,r.y,r.z),D.lookAt(r.x,r.y+P[A],r.z)):(D.up.set(0,x[A],0),D.position.set(r.x,r.y,r.z),D.lookAt(r.x,r.y,r.z+P[A]));const F=this._cubeSize;qt(o,M*F,A>2?F:0,F,F),R.setRenderTarget(o),l&&R.render(I,D),R.render(n,D)}R.toneMapping=_,R.autoClear=p,n.background=v}_textureToCubeUV(n,t){const i=this._renderer,o=n.mapping===hn||n.mapping===nn;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oa());const r=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=r;const m=r.uniforms;m.envMap.value=n;const D=this._cubeSize;qt(t,0,0,3*D,2*D),i.setRenderTarget(t),i.render(c,on)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let r=1;r<o;r++)this._applyGGXFilter(n,r-1,r);t.autoClear=i}_applyGGXFilter(n,t,i){const o=this._renderer,r=this._pingPongRenderTarget,c=this._ggxMaterial,m=this._lodMeshes[i];m.material=c;const D=c.uniforms,x=i/(this._lodMeshes.length-1),P=t/(this._lodMeshes.length-1),R=Math.sqrt(x*x-P*P),p=0+x*1.25,_=R*p,{_lodMax:E}=this,I=this._sizeLods[i],f=3*I*(i>E-Ot?i-E+Ot:0),l=4*(this._cubeSize-I);D.envMap.value=n.texture,D.roughness.value=_,D.mipInt.value=E-t,qt(r,f,l,3*I,2*I),o.setRenderTarget(r),o.render(m,on),D.envMap.value=r.texture,D.roughness.value=0,D.mipInt.value=E-i,qt(n,f,l,3*I,2*I),o.setRenderTarget(n),o.render(m,on)}_blur(n,t,i,o,r){const c=this._pingPongRenderTarget;this._halfBlur(n,c,t,i,o,"latitudinal",r),this._halfBlur(c,n,i,i,o,"longitudinal",r)}_halfBlur(n,t,i,o,r,c,m){const D=this._renderer,x=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const P=3,R=this._lodMeshes[o];R.material=x;const p=x.uniforms,_=this._sizeLods[i]-1,E=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Wt-1),I=r/E,f=isFinite(r)?1+Math.floor(P*I):Wt;f>Wt&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wt}`);const l=[];let v=0;for(let y=0;y<Wt;++y){const d=y/I,h=Math.exp(-d*d/2);l.push(h),y===0?v+=h:y<f&&(v+=2*h)}for(let y=0;y<l.length;y++)l[y]=l[y]/v;p.envMap.value=n.texture,p.samples.value=f,p.weights.value=l,p.latitudinal.value=c==="latitudinal",m&&(p.poleAxis.value=m);const{_lodMax:A}=this;p.dTheta.value=E,p.mipInt.value=A-i;const M=this._sizeLods[o],F=3*M*(o>A-Ot?o-A+Ot:0),L=4*(this._cubeSize-M);qt(t,F,L,3*M,2*M),D.setRenderTarget(t),D.render(R,on)}}function Tc(e){const n=[],t=[],i=[];let o=e;const r=e-Ot+1+na.length;for(let c=0;c<r;c++){const m=Math.pow(2,o);n.push(m);let D=1/m;c>e-Ot?D=na[c-e+Ot-1]:c===0&&(D=0),t.push(D);const x=1/(m-2),P=-x,R=1+x,p=[P,P,R,P,R,R,P,P,R,R,P,R],_=6,E=6,I=3,f=2,l=1,v=new Float32Array(I*E*_),A=new Float32Array(f*E*_),M=new Float32Array(l*E*_);for(let L=0;L<_;L++){const y=L%3*2/3-1,d=L>2?0:-1,h=[y,d,0,y+2/3,d,0,y+2/3,d+1,0,y,d,0,y+2/3,d+1,0,y,d+1,0];v.set(h,I*E*L),A.set(p,f*E*L);const Z=[L,L,L,L,L,L];M.set(Z,l*E*L)}const F=new mn;F.setAttribute("position",new fn(v,I)),F.setAttribute("uv",new fn(A,f)),F.setAttribute("faceIndex",new fn(M,l)),i.push(new wt(F,null)),o>Ot&&o--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function ra(e,n,t){const i=new Rt(e,n,t);return i.texture.mapping=Dn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qt(e,n,t,i,o){e.viewport.set(n,t,i,o),e.scissor.set(n,t,i,o)}function Ac(e,n,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ln(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function bc(e,n,t){const i=new Float32Array(Wt),o=new Le(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:Wt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function oa(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function sa(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ln(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Ln(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ja extends Rt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},o=[i,i,i,i,i,i];this.texture=new Wa(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Jn(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:$n(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:Ut});r.uniforms.tEquirect.value=t;const c=new wt(o,r),m=t.minFilter;return t.minFilter===$t&&(t.minFilter=vt),new So(1,10,this).update(n,c),t.minFilter=m,c.geometry.dispose(),c.material.dispose(),this}clear(n,t=!0,i=!0,o=!0){const r=n.getRenderTarget();for(let c=0;c<6;c++)n.setRenderTarget(this,c),n.clear(t,i,o);n.setRenderTarget(r)}}function Rc(e){let n=new WeakMap,t=new WeakMap,i=null;function o(p,_=!1){return p==null?null:_?c(p):r(p)}function r(p){if(p&&p.isTexture){const _=p.mapping;if(_===Hn||_===Vn)if(n.has(p)){const E=n.get(p).texture;return m(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const I=new Ja(E.height);return I.fromEquirectangularTexture(e,p),n.set(p,I),p.addEventListener("dispose",x),m(I.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const _=p.mapping,E=_===Hn||_===Vn,I=_===hn||_===nn;if(E||I){let f=t.get(p);const l=f!==void 0?f.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==l)return i===null&&(i=new aa(e)),f=E?i.fromEquirectangular(p,f):i.fromCubemap(p,f),f.texture.pmremVersion=p.pmremVersion,t.set(p,f),f.texture;if(f!==void 0)return f.texture;{const v=p.image;return E&&v&&v.height>0||I&&v&&D(v)?(i===null&&(i=new aa(e)),f=E?i.fromEquirectangular(p):i.fromCubemap(p),f.texture.pmremVersion=p.pmremVersion,t.set(p,f),p.addEventListener("dispose",P),f.texture):null}}}return p}function m(p,_){return _===Hn?p.mapping=hn:_===Vn&&(p.mapping=nn),p}function D(p){let _=0;const E=6;for(let I=0;I<E;I++)p[I]!==void 0&&_++;return _===E}function x(p){const _=p.target;_.removeEventListener("dispose",x);const E=n.get(_);E!==void 0&&(n.delete(_),E.dispose())}function P(p){const _=p.target;_.removeEventListener("dispose",P);const E=t.get(_);E!==void 0&&(t.delete(_),E.dispose())}function R(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:R}}function Cc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const o=e.getExtension(i);return n[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Da("WebGLRenderer: "+i+" extension not supported."),o}}}function Pc(e,n,t,i){const o={},r=new WeakMap;function c(R){const p=R.target;p.index!==null&&n.remove(p.index);for(const E in p.attributes)n.remove(p.attributes[E]);p.removeEventListener("dispose",c),delete o[p.id];const _=r.get(p);_&&(n.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function m(R,p){return o[p.id]===!0||(p.addEventListener("dispose",c),o[p.id]=!0,t.memory.geometries++),p}function D(R){const p=R.attributes;for(const _ in p)n.update(p[_],e.ARRAY_BUFFER)}function x(R){const p=[],_=R.index,E=R.attributes.position;let I=0;if(E===void 0)return;if(_!==null){const v=_.array;I=_.version;for(let A=0,M=v.length;A<M;A+=3){const F=v[A+0],L=v[A+1],y=v[A+2];p.push(F,L,L,y,y,F)}}else{const v=E.array;I=E.version;for(let A=0,M=v.length/3-1;A<M;A+=3){const F=A+0,L=A+1,y=A+2;p.push(F,L,L,y,y,F)}}const f=new(E.count>=65535?Eo:xo)(p,1);f.version=I;const l=r.get(R);l&&n.remove(l),r.set(R,f)}function P(R){const p=r.get(R);if(p){const _=R.index;_!==null&&p.version<_.version&&x(R)}else x(R);return r.get(R)}return{get:m,update:D,getWireframeAttribute:P}}function Dc(e,n,t){let i;function o(p){i=p}let r,c;function m(p){r=p.type,c=p.bytesPerElement}function D(p,_){e.drawElements(i,_,r,p*c),t.update(_,i,1)}function x(p,_,E){E!==0&&(e.drawElementsInstanced(i,_,r,p*c,E),t.update(_,i,E))}function P(p,_,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,r,p,0,E);let f=0;for(let l=0;l<E;l++)f+=_[l];t.update(f,i,1)}function R(p,_,E,I){if(E===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let l=0;l<p.length;l++)x(p[l]/c,_[l],I[l]);else{f.multiDrawElementsInstancedWEBGL(i,_,0,r,p,0,I,0,E);let l=0;for(let v=0;v<E;v++)l+=_[v]*I[v];t.update(l,i,1)}}this.setMode=o,this.setIndex=m,this.render=D,this.renderInstances=x,this.renderMultiDraw=P,this.renderMultiDrawInstances=R}function Lc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,c,m){switch(t.calls++,c){case e.TRIANGLES:t.triangles+=m*(r/3);break;case e.LINES:t.lines+=m*(r/2);break;case e.LINE_STRIP:t.lines+=m*(r-1);break;case e.LINE_LOOP:t.lines+=m*r;break;case e.POINTS:t.points+=m*r;break;default:je("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:i}}function Uc(e,n,t){const i=new WeakMap,o=new _t;function r(c,m,D){const x=c.morphTargetInfluences,P=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,R=P!==void 0?P.length:0;let p=i.get(m);if(p===void 0||p.count!==R){let h=function(){y.dispose(),i.delete(m),m.removeEventListener("dispose",h)};p!==void 0&&p.texture.dispose();const _=m.morphAttributes.position!==void 0,E=m.morphAttributes.normal!==void 0,I=m.morphAttributes.color!==void 0,f=m.morphAttributes.position||[],l=m.morphAttributes.normal||[],v=m.morphAttributes.color||[];let A=0;_===!0&&(A=1),E===!0&&(A=2),I===!0&&(A=3);let M=m.attributes.position.count*A,F=1;M>n.maxTextureSize&&(F=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const L=new Float32Array(M*F*4*R),y=new Ha(L,M,F,R);y.type=Ft,y.needsUpdate=!0;const d=A*4;for(let Z=0;Z<R;Z++){const C=f[Z],V=l[Z],z=v[Z],W=M*F*4*Z;for(let Y=0;Y<C.count;Y++){const B=Y*d;_===!0&&(o.fromBufferAttribute(C,Y),L[W+B+0]=o.x,L[W+B+1]=o.y,L[W+B+2]=o.z,L[W+B+3]=0),E===!0&&(o.fromBufferAttribute(V,Y),L[W+B+4]=o.x,L[W+B+5]=o.y,L[W+B+6]=o.z,L[W+B+7]=0),I===!0&&(o.fromBufferAttribute(z,Y),L[W+B+8]=o.x,L[W+B+9]=o.y,L[W+B+10]=o.z,L[W+B+11]=z.itemSize===4?o.w:1)}}p={count:R,texture:y,size:new Qe(M,F)},i.set(m,p),m.addEventListener("dispose",h)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)D.getUniforms().setValue(e,"morphTexture",c.morphTexture,t);else{let _=0;for(let I=0;I<x.length;I++)_+=x[I];const E=m.morphTargetsRelative?1:1-_;D.getUniforms().setValue(e,"morphTargetBaseInfluence",E),D.getUniforms().setValue(e,"morphTargetInfluences",x)}D.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),D.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:r}}function wc(e,n,t,i,o){let r=new WeakMap;function c(x){const P=o.render.frame,R=x.geometry,p=n.get(x,R);if(r.get(p)!==P&&(n.update(p),r.set(p,P)),x.isInstancedMesh&&(x.hasEventListener("dispose",D)===!1&&x.addEventListener("dispose",D),r.get(x)!==P&&(t.update(x.instanceMatrix,e.ARRAY_BUFFER),x.instanceColor!==null&&t.update(x.instanceColor,e.ARRAY_BUFFER),r.set(x,P))),x.isSkinnedMesh){const _=x.skeleton;r.get(_)!==P&&(_.update(),r.set(_,P))}return p}function m(){r=new WeakMap}function D(x){const P=x.target;P.removeEventListener("dispose",D),i.releaseStatesOfObject(P),t.remove(P.instanceMatrix),P.instanceColor!==null&&t.remove(P.instanceColor)}return{update:c,dispose:m}}const Ic={[$a]:"LINEAR_TONE_MAPPING",[Za]:"REINHARD_TONE_MAPPING",[qa]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[Xa]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function yc(e,n,t,i,o){const r=new Rt(n,t,{type:e,depthBuffer:i,stencilBuffer:o}),c=new Rt(n,t,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),m=new mn;m.setAttribute("position",new hi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new hi([0,2,0,0,2,0],2));const D=new _r({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new wt(m,D),P=new La(-1,1,1,-1,0,1);let R=null,p=null,_=!1,E,I=null,f=[],l=!1;this.setSize=function(v,A){r.setSize(v,A),c.setSize(v,A);for(let M=0;M<f.length;M++){const F=f[M];F.setSize&&F.setSize(v,A)}},this.setEffects=function(v){f=v,l=f.length>0&&f[0].isRenderPass===!0;const A=r.width,M=r.height;for(let F=0;F<f.length;F++){const L=f[F];L.setSize&&L.setSize(A,M)}},this.begin=function(v,A){if(_||v.toneMapping===bt&&f.length===0)return!1;if(I=A,A!==null){const M=A.width,F=A.height;(r.width!==M||r.height!==F)&&this.setSize(M,F)}return l===!1&&v.setRenderTarget(r),E=v.toneMapping,v.toneMapping=bt,!0},this.hasRenderPass=function(){return l},this.end=function(v,A){v.toneMapping=E,_=!0;let M=r,F=c;for(let L=0;L<f.length;L++){const y=f[L];if(y.enabled!==!1&&(y.render(v,F,M,A),y.needsSwap!==!1)){const d=M;M=F,F=d}}if(R!==v.outputColorSpace||p!==v.toneMapping){R=v.outputColorSpace,p=v.toneMapping,D.defines={},rt.getTransfer(R)===$e&&(D.defines.SRGB_TRANSFER="");const L=Ic[p];L&&(D.defines[L]=""),D.needsUpdate=!0}D.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(I),v.render(x,P),I=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),c.dispose(),m.dispose(),D.dispose()}}const er=new Po,jn=new Rn(1,1),tr=new Ha,nr=new To,ir=new Wa,la=[],ca=[],fa=new Float32Array(16),da=new Float32Array(9),ua=new Float32Array(4);function an(e,n,t){const i=e[0];if(i<=0||i>0)return e;const o=n*t;let r=la[o];if(r===void 0&&(r=new Float32Array(o),la[o]=r),n!==0){i.toArray(r,0);for(let c=1,m=0;c!==n;++c)m+=t,e[c].toArray(r,m)}return r}function lt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Un(e,n){let t=ca[n];t===void 0&&(t=new Int32Array(n),ca[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Nc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Fc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function Oc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(lt(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function Bc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function Gc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;ua.set(i),e.uniformMatrix2fv(this.addr,!1,ua),ct(t,i)}}function Hc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;da.set(i),e.uniformMatrix3fv(this.addr,!1,da),ct(t,i)}}function Vc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(lt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(lt(t,i))return;fa.set(i),e.uniformMatrix4fv(this.addr,!1,fa),ct(t,i)}}function kc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function Xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function Yc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Kc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(lt(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function qc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(lt(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function Zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(lt(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function $c(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o);let r;this.type===e.SAMPLER_2D_SHADOW?(jn.compareFunction=t.isReversedDepthBuffer()?ei:ti,r=jn):r=er,t.setTexture2D(n||r,o)}function jc(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(n||nr,o)}function Qc(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(n||ir,o)}function Jc(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(n||tr,o)}function ef(e){switch(e){case 5126:return Nc;case 35664:return Fc;case 35665:return Oc;case 35666:return Bc;case 35674:return Gc;case 35675:return Hc;case 35676:return Vc;case 5124:case 35670:return kc;case 35667:case 35671:return Wc;case 35668:case 35672:return zc;case 35669:case 35673:return Xc;case 5125:return Yc;case 36294:return Kc;case 36295:return qc;case 36296:return Zc;case 35678:case 36198:case 36298:case 36306:case 35682:return $c;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return Jc}}function tf(e,n){e.uniform1fv(this.addr,n)}function nf(e,n){const t=an(n,this.size,2);e.uniform2fv(this.addr,t)}function af(e,n){const t=an(n,this.size,3);e.uniform3fv(this.addr,t)}function rf(e,n){const t=an(n,this.size,4);e.uniform4fv(this.addr,t)}function of(e,n){const t=an(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function sf(e,n){const t=an(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function lf(e,n){const t=an(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function cf(e,n){e.uniform1iv(this.addr,n)}function ff(e,n){e.uniform2iv(this.addr,n)}function df(e,n){e.uniform3iv(this.addr,n)}function uf(e,n){e.uniform4iv(this.addr,n)}function pf(e,n){e.uniform1uiv(this.addr,n)}function hf(e,n){e.uniform2uiv(this.addr,n)}function mf(e,n){e.uniform3uiv(this.addr,n)}function _f(e,n){e.uniform4uiv(this.addr,n)}function gf(e,n,t){const i=this.cache,o=n.length,r=Un(t,o);lt(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));let c;this.type===e.SAMPLER_2D_SHADOW?c=jn:c=er;for(let m=0;m!==o;++m)t.setTexture2D(n[m]||c,r[m])}function vf(e,n,t){const i=this.cache,o=n.length,r=Un(t,o);lt(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let c=0;c!==o;++c)t.setTexture3D(n[c]||nr,r[c])}function Sf(e,n,t){const i=this.cache,o=n.length,r=Un(t,o);lt(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let c=0;c!==o;++c)t.setTextureCube(n[c]||ir,r[c])}function Ef(e,n,t){const i=this.cache,o=n.length,r=Un(t,o);lt(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let c=0;c!==o;++c)t.setTexture2DArray(n[c]||tr,r[c])}function xf(e){switch(e){case 5126:return tf;case 35664:return nf;case 35665:return af;case 35666:return rf;case 35674:return of;case 35675:return sf;case 35676:return lf;case 5124:case 35670:return cf;case 35667:case 35671:return ff;case 35668:case 35672:return df;case 35669:case 35673:return uf;case 5125:return pf;case 36294:return hf;case 36295:return mf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Ef}}class Mf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ef(t.type)}}class Tf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xf(t.type)}}class Af{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const o=this.seq;for(let r=0,c=o.length;r!==c;++r){const m=o[r];m.setValue(n,t[m.id],i)}}}const Yn=/(\w+)(\])?(\[|\.)?/g;function pa(e,n){e.seq.push(n),e.map[n.id]=n}function bf(e,n,t){const i=e.name,o=i.length;for(Yn.lastIndex=0;;){const r=Yn.exec(i),c=Yn.lastIndex;let m=r[1];const D=r[2]==="]",x=r[3];if(D&&(m=m|0),x===void 0||x==="["&&c+2===o){pa(t,x===void 0?new Mf(m,e,n):new Tf(m,e,n));break}else{let R=t.map[m];R===void 0&&(R=new Af(m),pa(t,R)),t=R}}}class bn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const m=n.getActiveUniform(t,c),D=n.getUniformLocation(t,m.name);bf(m,D,this)}const o=[],r=[];for(const c of this.seq)c.type===n.SAMPLER_2D_SHADOW||c.type===n.SAMPLER_CUBE_SHADOW||c.type===n.SAMPLER_2D_ARRAY_SHADOW?o.push(c):r.push(c);o.length>0&&(this.seq=o.concat(r))}setValue(n,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(n,i,o)}setOptional(n,t,i){const o=t[i];o!==void 0&&this.setValue(n,i,o)}static upload(n,t,i,o){for(let r=0,c=t.length;r!==c;++r){const m=t[r],D=i[m.id];D.needsUpdate!==!1&&m.setValue(n,D.value,o)}}static seqWithValue(n,t){const i=[];for(let o=0,r=n.length;o!==r;++o){const c=n[o];c.id in t&&i.push(c)}return i}}function ha(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Rf=37297;let Cf=0;function Pf(e,n){const t=e.split(`
`),i=[],o=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let c=o;c<r;c++){const m=c+1;i.push(`${m===n?">":" "} ${m}: ${t[c]}`)}return i.join(`
`)}const ma=new Be;function Df(e){rt._getMatrix(ma,rt.workingColorSpace,e);const n=`mat3( ${ma.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(e)){case ja:return[n,"LinearTransferOETF"];case $e:return[n,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function _a(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const m=parseInt(c[1]);return t.toUpperCase()+`

`+r+`

`+Pf(e.getShaderSource(n),m)}else return r}function Lf(e,n){const t=Df(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Uf={[$a]:"Linear",[Za]:"Reinhard",[qa]:"Cineon",[Ka]:"ACESFilmic",[Ya]:"AgX",[Xa]:"Neutral",[za]:"Custom"};function wf(e,n){const t=Uf[n];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const En=new Le;function If(){rt.getLuminanceCoefficients(En);const e=En.x.toFixed(4),n=En.y.toFixed(4),t=En.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cn).join(`
`)}function Nf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Ff(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=e.getActiveAttrib(n,o),c=r.name;let m=1;r.type===e.FLOAT_MAT2&&(m=2),r.type===e.FLOAT_MAT3&&(m=3),r.type===e.FLOAT_MAT4&&(m=4),t[c]={type:r.type,location:e.getAttribLocation(n,c),locationSize:m}}return t}function cn(e){return e!==""}function ga(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function va(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qn(e){return e.replace(Of,Gf)}const Bf=new Map;function Gf(e,n){let t=Ue[n];if(t===void 0){const i=Bf.get(n);if(i!==void 0)t=Ue[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Qn(t)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(e){return e.replace(Hf,Vf)}function Vf(e,n,t,i){let o="";for(let r=parseInt(n);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function Ea(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const kf={[Tn]:"SHADOWMAP_TYPE_PCF",[ln]:"SHADOWMAP_TYPE_VSM"};function Wf(e){return kf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zf={[hn]:"ENVMAP_TYPE_CUBE",[nn]:"ENVMAP_TYPE_CUBE",[Dn]:"ENVMAP_TYPE_CUBE_UV"};function Xf(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":zf[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yf={[nn]:"ENVMAP_MODE_REFRACTION"};function Kf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Yf[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qf={[Co]:"ENVMAP_BLENDING_MULTIPLY",[Ro]:"ENVMAP_BLENDING_MIX",[bo]:"ENVMAP_BLENDING_ADD"};function Zf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":qf[e.combine]||"ENVMAP_BLENDING_NONE"}function $f(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jf(e,n,t,i){const o=e.getContext(),r=t.defines;let c=t.vertexShader,m=t.fragmentShader;const D=Wf(t),x=Xf(t),P=Kf(t),R=Zf(t),p=$f(t),_=yf(t),E=Nf(r),I=o.createProgram();let f,l,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cn).join(`
`),f.length>0&&(f+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(cn).join(`
`),l.length>0&&(l+=`
`)):(f=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+P:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+D:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cn).join(`
`),l=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.envMap?"#define "+P:"",t.envMap?"#define "+R:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+D:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bt?"#define TONE_MAPPING":"",t.toneMapping!==bt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==bt?wf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),If(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cn).join(`
`)),c=Qn(c),c=ga(c,t),c=va(c,t),m=Qn(m),m=ga(m,t),m=va(m,t),c=Sa(c),m=Sa(m),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,l=["#define varying in",t.glslVersion===Ji?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ji?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const A=v+f+c,M=v+l+m,F=ha(o,o.VERTEX_SHADER,A),L=ha(o,o.FRAGMENT_SHADER,M);o.attachShader(I,F),o.attachShader(I,L),t.index0AttributeName!==void 0?o.bindAttribLocation(I,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(I,0,"position"),o.linkProgram(I);function y(C){if(e.debug.checkShaderErrors){const V=o.getProgramInfoLog(I)||"",z=o.getShaderInfoLog(F)||"",W=o.getShaderInfoLog(L)||"",Y=V.trim(),B=z.trim(),O=W.trim();let ie=!0,ae=!0;if(o.getProgramParameter(I,o.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,I,F,L);else{const Me=_a(o,F,"vertex"),Ae=_a(o,L,"fragment");je("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(I,o.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+Me+`
`+Ae)}else Y!==""?Ke("WebGLProgram: Program Info Log:",Y):(B===""||O==="")&&(ae=!1);ae&&(C.diagnostics={runnable:ie,programLog:Y,vertexShader:{log:B,prefix:f},fragmentShader:{log:O,prefix:l}})}o.deleteShader(F),o.deleteShader(L),d=new bn(o,I),h=Ff(o,I)}let d;this.getUniforms=function(){return d===void 0&&y(this),d};let h;this.getAttributes=function(){return h===void 0&&y(this),h};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(I,Rf)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(I),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cf++,this.cacheKey=n,this.usedTimes=1,this.program=I,this.vertexShader=F,this.fragmentShader=L,this}let Qf=0;class Jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),c=this._getShaderCacheForMaterial(n);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new ed(n),t.set(n,i)),i}}class ed{constructor(n){this.id=Qf++,this.code=n,this.usedTimes=0}}function td(e,n,t,i,o,r){const c=new Mo,m=new Jf,D=new Set,x=[],P=new Map,R=i.logarithmicDepthBuffer;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(d){return D.add(d),d===0?"uv":`uv${d}`}function I(d,h,Z,C,V){const z=C.fog,W=V.geometry,Y=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?C.environment:null,B=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,O=n.get(d.envMap||Y,B),ie=O&&O.mapping===Dn?O.image.height:null,ae=_[d.type];d.precision!==null&&(p=i.getMaxPrecision(d.precision),p!==d.precision&&Ke("WebGLProgram.getParameters:",d.precision,"not supported, using",p,"instead."));const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ae=Me!==void 0?Me.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let Ne,et,tt,X;if(ae){const Ve=Tt[ae];Ne=Ve.vertexShader,et=Ve.fragmentShader}else Ne=d.vertexShader,et=d.fragmentShader,m.update(d),tt=m.getVertexShaderID(d),X=m.getFragmentShaderID(d);const J=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,Re=!!d.map,ft=!!d.matcap,Fe=!!O,He=!!d.aoMap,Xe=!!d.lightMap,we=!!d.bumpMap,it=!!d.normalMap,g=!!d.displacementMap,ot=!!d.emissiveMap,Ge=!!d.metalnessMap,qe=!!d.roughnessMap,ge=d.anisotropy>0,u=d.clearcoat>0,a=d.dispersion>0,T=d.iridescence>0,k=d.sheen>0,K=d.transmission>0,H=ge&&!!d.anisotropyMap,de=u&&!!d.clearcoatMap,ee=u&&!!d.clearcoatNormalMap,xe=u&&!!d.clearcoatRoughnessMap,be=T&&!!d.iridescenceMap,q=T&&!!d.iridescenceThicknessMap,j=k&&!!d.sheenColorMap,ue=k&&!!d.sheenRoughnessMap,me=!!d.specularMap,le=!!d.specularColorMap,Ie=!!d.specularIntensityMap,S=K&&!!d.transmissionMap,te=K&&!!d.thicknessMap,Q=!!d.gradientMap,fe=!!d.alphaMap,$=d.alphaTest>0,G=!!d.alphaHash,pe=!!d.extensions;let Ce=bt;d.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ce=e.toneMapping);const Ze={shaderID:ae,shaderType:d.type,shaderName:d.name,vertexShader:Ne,fragmentShader:et,defines:d.defines,customVertexShaderID:tt,customFragmentShaderID:X,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pn,alphaToCoverage:!!d.alphaToCoverage,map:Re,matcap:ft,envMap:Fe,envMapMode:Fe&&O.mapping,envMapCubeUVHeight:ie,aoMap:He,lightMap:Xe,bumpMap:we,normalMap:it,displacementMap:g,emissiveMap:ot,normalMapObjectSpace:it&&d.normalMapType===vo,normalMapTangentSpace:it&&d.normalMapType===go,metalnessMap:Ge,roughnessMap:qe,anisotropy:ge,anisotropyMap:H,clearcoat:u,clearcoatMap:de,clearcoatNormalMap:ee,clearcoatRoughnessMap:xe,dispersion:a,iridescence:T,iridescenceMap:be,iridescenceThicknessMap:q,sheen:k,sheenColorMap:j,sheenRoughnessMap:ue,specularMap:me,specularColorMap:le,specularIntensityMap:Ie,transmission:K,transmissionMap:S,thicknessMap:te,gradientMap:Q,opaque:d.transparent===!1&&d.blending===An&&d.alphaToCoverage===!1,alphaMap:fe,alphaTest:$,alphaHash:G,combine:d.combine,mapUv:Re&&E(d.map.channel),aoMapUv:He&&E(d.aoMap.channel),lightMapUv:Xe&&E(d.lightMap.channel),bumpMapUv:we&&E(d.bumpMap.channel),normalMapUv:it&&E(d.normalMap.channel),displacementMapUv:g&&E(d.displacementMap.channel),emissiveMapUv:ot&&E(d.emissiveMap.channel),metalnessMapUv:Ge&&E(d.metalnessMap.channel),roughnessMapUv:qe&&E(d.roughnessMap.channel),anisotropyMapUv:H&&E(d.anisotropyMap.channel),clearcoatMapUv:de&&E(d.clearcoatMap.channel),clearcoatNormalMapUv:ee&&E(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(d.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&E(d.iridescenceMap.channel),iridescenceThicknessMapUv:q&&E(d.iridescenceThicknessMap.channel),sheenColorMapUv:j&&E(d.sheenColorMap.channel),sheenRoughnessMapUv:ue&&E(d.sheenRoughnessMap.channel),specularMapUv:me&&E(d.specularMap.channel),specularColorMapUv:le&&E(d.specularColorMap.channel),specularIntensityMapUv:Ie&&E(d.specularIntensityMap.channel),transmissionMapUv:S&&E(d.transmissionMap.channel),thicknessMapUv:te&&E(d.thicknessMap.channel),alphaMapUv:fe&&E(d.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(it||ge),vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Re||fe),fog:!!z,useFog:d.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||W.attributes.normal===void 0&&it===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:R,reversedDepthBuffer:ne,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:he,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:e.shadowMap.enabled&&Z.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Re&&d.map.isVideoTexture===!0&&rt.getTransfer(d.map.colorSpace)===$e,decodeVideoTextureEmissive:ot&&d.emissiveMap.isVideoTexture===!0&&rt.getTransfer(d.emissiveMap.colorSpace)===$e,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Dt,flipSided:d.side===St,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:pe&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&d.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Ze.vertexUv1s=D.has(1),Ze.vertexUv2s=D.has(2),Ze.vertexUv3s=D.has(3),D.clear(),Ze}function f(d){const h=[];if(d.shaderID?h.push(d.shaderID):(h.push(d.customVertexShaderID),h.push(d.customFragmentShaderID)),d.defines!==void 0)for(const Z in d.defines)h.push(Z),h.push(d.defines[Z]);return d.isRawShaderMaterial===!1&&(l(h,d),v(h,d),h.push(e.outputColorSpace)),h.push(d.customProgramCacheKey),h.join()}function l(d,h){d.push(h.precision),d.push(h.outputColorSpace),d.push(h.envMapMode),d.push(h.envMapCubeUVHeight),d.push(h.mapUv),d.push(h.alphaMapUv),d.push(h.lightMapUv),d.push(h.aoMapUv),d.push(h.bumpMapUv),d.push(h.normalMapUv),d.push(h.displacementMapUv),d.push(h.emissiveMapUv),d.push(h.metalnessMapUv),d.push(h.roughnessMapUv),d.push(h.anisotropyMapUv),d.push(h.clearcoatMapUv),d.push(h.clearcoatNormalMapUv),d.push(h.clearcoatRoughnessMapUv),d.push(h.iridescenceMapUv),d.push(h.iridescenceThicknessMapUv),d.push(h.sheenColorMapUv),d.push(h.sheenRoughnessMapUv),d.push(h.specularMapUv),d.push(h.specularColorMapUv),d.push(h.specularIntensityMapUv),d.push(h.transmissionMapUv),d.push(h.thicknessMapUv),d.push(h.combine),d.push(h.fogExp2),d.push(h.sizeAttenuation),d.push(h.morphTargetsCount),d.push(h.morphAttributeCount),d.push(h.numDirLights),d.push(h.numPointLights),d.push(h.numSpotLights),d.push(h.numSpotLightMaps),d.push(h.numHemiLights),d.push(h.numRectAreaLights),d.push(h.numDirLightShadows),d.push(h.numPointLightShadows),d.push(h.numSpotLightShadows),d.push(h.numSpotLightShadowsWithMaps),d.push(h.numLightProbes),d.push(h.shadowMapType),d.push(h.toneMapping),d.push(h.numClippingPlanes),d.push(h.numClipIntersection),d.push(h.depthPacking)}function v(d,h){c.disableAll(),h.instancing&&c.enable(0),h.instancingColor&&c.enable(1),h.instancingMorph&&c.enable(2),h.matcap&&c.enable(3),h.envMap&&c.enable(4),h.normalMapObjectSpace&&c.enable(5),h.normalMapTangentSpace&&c.enable(6),h.clearcoat&&c.enable(7),h.iridescence&&c.enable(8),h.alphaTest&&c.enable(9),h.vertexColors&&c.enable(10),h.vertexAlphas&&c.enable(11),h.vertexUv1s&&c.enable(12),h.vertexUv2s&&c.enable(13),h.vertexUv3s&&c.enable(14),h.vertexTangents&&c.enable(15),h.anisotropy&&c.enable(16),h.alphaHash&&c.enable(17),h.batching&&c.enable(18),h.dispersion&&c.enable(19),h.batchingColor&&c.enable(20),h.gradientMap&&c.enable(21),d.push(c.mask),c.disableAll(),h.fog&&c.enable(0),h.useFog&&c.enable(1),h.flatShading&&c.enable(2),h.logarithmicDepthBuffer&&c.enable(3),h.reversedDepthBuffer&&c.enable(4),h.skinning&&c.enable(5),h.morphTargets&&c.enable(6),h.morphNormals&&c.enable(7),h.morphColors&&c.enable(8),h.premultipliedAlpha&&c.enable(9),h.shadowMapEnabled&&c.enable(10),h.doubleSided&&c.enable(11),h.flipSided&&c.enable(12),h.useDepthPacking&&c.enable(13),h.dithering&&c.enable(14),h.transmission&&c.enable(15),h.sheen&&c.enable(16),h.opaque&&c.enable(17),h.pointsUvs&&c.enable(18),h.decodeVideoTexture&&c.enable(19),h.decodeVideoTextureEmissive&&c.enable(20),h.alphaToCoverage&&c.enable(21),d.push(c.mask)}function A(d){const h=_[d.type];let Z;if(h){const C=Tt[h];Z=_o.clone(C.uniforms)}else Z=d.uniforms;return Z}function M(d,h){let Z=P.get(h);return Z!==void 0?++Z.usedTimes:(Z=new jf(e,h,d,o),x.push(Z),P.set(h,Z)),Z}function F(d){if(--d.usedTimes===0){const h=x.indexOf(d);x[h]=x[x.length-1],x.pop(),P.delete(d.cacheKey),d.destroy()}}function L(d){m.remove(d)}function y(){m.dispose()}return{getParameters:I,getProgramCacheKey:f,getUniforms:A,acquireProgram:M,releaseProgram:F,releaseShaderCache:L,programs:x,dispose:y}}function nd(){let e=new WeakMap;function n(c){return e.has(c)}function t(c){let m=e.get(c);return m===void 0&&(m={},e.set(c,m)),m}function i(c){e.delete(c)}function o(c,m,D){e.get(c)[m]=D}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:o,dispose:r}}function id(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function xa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ma(){const e=[];let n=0;const t=[],i=[],o=[];function r(){n=0,t.length=0,i.length=0,o.length=0}function c(p){let _=0;return p.isInstancedMesh&&(_+=2),p.isSkinnedMesh&&(_+=1),_}function m(p,_,E,I,f,l){let v=e[n];return v===void 0?(v={id:p.id,object:p,geometry:_,material:E,materialVariant:c(p),groupOrder:I,renderOrder:p.renderOrder,z:f,group:l},e[n]=v):(v.id=p.id,v.object=p,v.geometry=_,v.material=E,v.materialVariant=c(p),v.groupOrder=I,v.renderOrder=p.renderOrder,v.z=f,v.group=l),n++,v}function D(p,_,E,I,f,l){const v=m(p,_,E,I,f,l);E.transmission>0?i.push(v):E.transparent===!0?o.push(v):t.push(v)}function x(p,_,E,I,f,l){const v=m(p,_,E,I,f,l);E.transmission>0?i.unshift(v):E.transparent===!0?o.unshift(v):t.unshift(v)}function P(p,_){t.length>1&&t.sort(p||id),i.length>1&&i.sort(_||xa),o.length>1&&o.sort(_||xa)}function R(){for(let p=n,_=e.length;p<_;p++){const E=e[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:D,unshift:x,finish:R,sort:P}}function ad(){let e=new WeakMap;function n(i,o){const r=e.get(i);let c;return r===void 0?(c=new Ma,e.set(i,[c])):o>=r.length?(c=new Ma,r.push(c)):c=r[o],c}function t(){e=new WeakMap}return{get:n,dispose:t}}function rd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Le,color:new Je};break;case"SpotLight":t={position:new Le,direction:new Le,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Le,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Le,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Le,halfWidth:new Le,halfHeight:new Le};break}return e[n.id]=t,t}}}function od(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let sd=0;function ld(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function cd(e){const n=new rd,t=od(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)i.probe.push(new Le);const o=new Le,r=new en,c=new en;function m(x){let P=0,R=0,p=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let _=0,E=0,I=0,f=0,l=0,v=0,A=0,M=0,F=0,L=0,y=0;x.sort(ld);for(let h=0,Z=x.length;h<Z;h++){const C=x[h],V=C.color,z=C.intensity,W=C.distance;let Y=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pn?Y=C.shadow.map.texture:Y=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)P+=V.r*z,R+=V.g*z,p+=V.b*z;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],z);y++}else if(C.isDirectionalLight){const B=n.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const O=C.shadow,ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=C.shadow.matrix,v++}i.directional[_]=B,_++}else if(C.isSpotLight){const B=n.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(V).multiplyScalar(z),B.distance=W,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[I]=B;const O=C.shadow;if(C.map&&(i.spotLightMap[F]=C.map,F++,O.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[I]=O.matrix,C.castShadow){const ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,i.spotShadow[I]=ie,i.spotShadowMap[I]=Y,M++}I++}else if(C.isRectAreaLight){const B=n.get(C);B.color.copy(V).multiplyScalar(z),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[f]=B,f++}else if(C.isPointLight){const B=n.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const O=C.shadow,ie=t.get(C);ie.shadowIntensity=O.intensity,ie.shadowBias=O.bias,ie.shadowNormalBias=O.normalBias,ie.shadowRadius=O.radius,ie.shadowMapSize=O.mapSize,ie.shadowCameraNear=O.camera.near,ie.shadowCameraFar=O.camera.far,i.pointShadow[E]=ie,i.pointShadowMap[E]=Y,i.pointShadowMatrix[E]=C.shadow.matrix,A++}i.point[E]=B,E++}else if(C.isHemisphereLight){const B=n.get(C);B.skyColor.copy(C.color).multiplyScalar(z),B.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[l]=B,l++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=P,i.ambient[1]=R,i.ambient[2]=p;const d=i.hash;(d.directionalLength!==_||d.pointLength!==E||d.spotLength!==I||d.rectAreaLength!==f||d.hemiLength!==l||d.numDirectionalShadows!==v||d.numPointShadows!==A||d.numSpotShadows!==M||d.numSpotMaps!==F||d.numLightProbes!==y)&&(i.directional.length=_,i.spot.length=I,i.rectArea.length=f,i.point.length=E,i.hemi.length=l,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+F-L,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=y,d.directionalLength=_,d.pointLength=E,d.spotLength=I,d.rectAreaLength=f,d.hemiLength=l,d.numDirectionalShadows=v,d.numPointShadows=A,d.numSpotShadows=M,d.numSpotMaps=F,d.numLightProbes=y,i.version=sd++)}function D(x,P){let R=0,p=0,_=0,E=0,I=0;const f=P.matrixWorldInverse;for(let l=0,v=x.length;l<v;l++){const A=x[l];if(A.isDirectionalLight){const M=i.directional[R];M.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),R++}else if(A.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),_++}else if(A.isRectAreaLight){const M=i.rectArea[E];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(f),c.identity(),r.copy(A.matrixWorld),r.premultiply(f),c.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(c),M.halfHeight.applyMatrix4(c),E++}else if(A.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(f),p++}else if(A.isHemisphereLight){const M=i.hemi[I];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(f),I++}}}return{setup:m,setupView:D,state:i}}function Ta(e){const n=new cd(e),t=[],i=[];function o(P){x.camera=P,t.length=0,i.length=0}function r(P){t.push(P)}function c(P){i.push(P)}function m(){n.setup(t)}function D(P){n.setupView(t,P)}const x={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:o,state:x,setupLights:m,setupLightsView:D,pushLight:r,pushShadow:c}}function fd(e){let n=new WeakMap;function t(o,r=0){const c=n.get(o);let m;return c===void 0?(m=new Ta(e),n.set(o,[m])):r>=c.length?(m=new Ta(e),c.push(m)):m=c[r],m}function i(){n=new WeakMap}return{get:t,dispose:i}}const dd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ud=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pd=[new Le(1,0,0),new Le(-1,0,0),new Le(0,1,0),new Le(0,-1,0),new Le(0,0,1),new Le(0,0,-1)],hd=[new Le(0,-1,0),new Le(0,-1,0),new Le(0,0,1),new Le(0,0,-1),new Le(0,-1,0),new Le(0,-1,0)],Aa=new en,sn=new Le,Kn=new Le;function md(e,n,t){let i=new Pa;const o=new Qe,r=new Qe,c=new _t,m=new qr,D=new Zr,x={},P=t.maxTextureSize,R={[dn]:St,[St]:dn,[Dt]:Dt},p=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:dd,fragmentShader:ud}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const E=new mn;E.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new wt(E,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tn;let l=this.type;this.render=function(L,y,d){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||L.length===0)return;this.type===$r&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tn);const h=e.getRenderTarget(),Z=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Ut),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=l!==this.type;z&&y.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(Y=>Y.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,Y=L.length;W<Y;W++){const B=L[W],O=B.shadow;if(O===void 0){Ke("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const ie=O.getFrameExtents();o.multiply(ie),r.copy(O.mapSize),(o.x>P||o.y>P)&&(o.x>P&&(r.x=Math.floor(P/ie.x),o.x=r.x*ie.x,O.mapSize.x=r.x),o.y>P&&(r.y=Math.floor(P/ie.y),o.y=r.y*ie.y,O.mapSize.y=r.y));const ae=e.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ae,O.map===null||z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ln){if(B.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Rt(o.x,o.y,{format:pn,type:Bt,minFilter:vt,magFilter:vt,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Rn(o.x,o.y,Ft),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=tn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else B.isPointLight?(O.map=new Ja(o.x),O.map.depthTexture=new jr(o.x,Xt)):(O.map=new Rt(o.x,o.y),O.map.depthTexture=new Rn(o.x,o.y,Xt)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=tn,this.type===Tn?(O.map.depthTexture.compareFunction=ae?ei:ti,O.map.depthTexture.minFilter=vt,O.map.depthTexture.magFilter=vt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}const Me=O.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<Me;Ae++){if(O.map.isWebGLCubeRenderTarget)e.setRenderTarget(O.map,Ae),e.clear();else{Ae===0&&(e.setRenderTarget(O.map),e.clear());const he=O.getViewport(Ae);c.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),V.viewport(c)}if(B.isPointLight){const he=O.camera,Ne=O.matrix,et=B.distance||he.far;et!==he.far&&(he.far=et,he.updateProjectionMatrix()),sn.setFromMatrixPosition(B.matrixWorld),he.position.copy(sn),Kn.copy(he.position),Kn.add(pd[Ae]),he.up.copy(hd[Ae]),he.lookAt(Kn),he.updateMatrixWorld(),Ne.makeTranslation(-sn.x,-sn.y,-sn.z),Aa.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Aa,he.coordinateSystem,he.reversedDepth)}else O.updateMatrices(B);i=O.getFrustum(),M(y,d,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===ln&&v(O,d),O.needsUpdate=!1}l=this.type,f.needsUpdate=!1,e.setRenderTarget(h,Z,C)};function v(L,y){const d=n.update(I);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Rt(o.x,o.y,{format:pn,type:Bt})),p.uniforms.shadow_pass.value=L.map.depthTexture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(y,null,d,p,I,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(y,null,d,_,I,null)}function A(L,y,d,h){let Z=null;const C=d.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)Z=C;else if(Z=d.isPointLight===!0?D:m,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const V=Z.uuid,z=y.uuid;let W=x[V];W===void 0&&(W={},x[V]=W);let Y=W[z];Y===void 0&&(Y=Z.clone(),W[z]=Y,y.addEventListener("dispose",F)),Z=Y}if(Z.visible=y.visible,Z.wireframe=y.wireframe,h===ln?Z.side=y.shadowSide!==null?y.shadowSide:y.side:Z.side=y.shadowSide!==null?y.shadowSide:R[y.side],Z.alphaMap=y.alphaMap,Z.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,Z.map=y.map,Z.clipShadows=y.clipShadows,Z.clippingPlanes=y.clippingPlanes,Z.clipIntersection=y.clipIntersection,Z.displacementMap=y.displacementMap,Z.displacementScale=y.displacementScale,Z.displacementBias=y.displacementBias,Z.wireframeLinewidth=y.wireframeLinewidth,Z.linewidth=y.linewidth,d.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const V=e.properties.get(Z);V.light=d}return Z}function M(L,y,d,h,Z){if(L.visible===!1)return;if(L.layers.test(y.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Z===ln)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,L.matrixWorld);const z=n.update(L),W=L.material;if(Array.isArray(W)){const Y=z.groups;for(let B=0,O=Y.length;B<O;B++){const ie=Y[B],ae=W[ie.materialIndex];if(ae&&ae.visible){const Me=A(L,ae,h,Z);L.onBeforeShadow(e,L,y,d,z,Me,ie),e.renderBufferDirect(d,null,z,Me,L,ie),L.onAfterShadow(e,L,y,d,z,Me,ie)}}}else if(W.visible){const Y=A(L,W,h,Z);L.onBeforeShadow(e,L,y,d,z,Y,null),e.renderBufferDirect(d,null,z,Y,L,null),L.onAfterShadow(e,L,y,d,z,Y,null)}}const V=L.children;for(let z=0,W=V.length;z<W;z++)M(V[z],y,d,h,Z)}function F(L){L.target.removeEventListener("dispose",F);for(const d in x){const h=x[d],Z=L.target.uuid;Z in h&&(h[Z].dispose(),delete h[Z])}}}function _d(e,n){function t(){let S=!1;const te=new _t;let Q=null;const fe=new _t(0,0,0,0);return{setMask:function($){Q!==$&&!S&&(e.colorMask($,$,$,$),Q=$)},setLocked:function($){S=$},setClear:function($,G,pe,Ce,Ze){Ze===!0&&($*=Ce,G*=Ce,pe*=Ce),te.set($,G,pe,Ce),fe.equals(te)===!1&&(e.clearColor($,G,pe,Ce),fe.copy(te))},reset:function(){S=!1,Q=null,fe.set(-1,0,0,0)}}}function i(){let S=!1,te=!1,Q=null,fe=null,$=null;return{setReversed:function(G){if(te!==G){const pe=n.get("EXT_clip_control");G?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),te=G;const Ce=$;$=null,this.setClear(Ce)}},getReversed:function(){return te},setTest:function(G){G?J(e.DEPTH_TEST):ne(e.DEPTH_TEST)},setMask:function(G){Q!==G&&!S&&(e.depthMask(G),Q=G)},setFunc:function(G){if(te&&(G=Do[G]),fe!==G){switch(G){case uo:e.depthFunc(e.NEVER);break;case fo:e.depthFunc(e.ALWAYS);break;case co:e.depthFunc(e.LESS);break;case mi:e.depthFunc(e.LEQUAL);break;case lo:e.depthFunc(e.EQUAL);break;case so:e.depthFunc(e.GEQUAL);break;case oo:e.depthFunc(e.GREATER);break;case ro:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=G}},setLocked:function(G){S=G},setClear:function(G){$!==G&&($=G,te&&(G=1-G),e.clearDepth(G))},reset:function(){S=!1,Q=null,fe=null,$=null,te=!1}}}function o(){let S=!1,te=null,Q=null,fe=null,$=null,G=null,pe=null,Ce=null,Ze=null;return{setTest:function(Ve){S||(Ve?J(e.STENCIL_TEST):ne(e.STENCIL_TEST))},setMask:function(Ve){te!==Ve&&!S&&(e.stencilMask(Ve),te=Ve)},setFunc:function(Ve,Ct,Pt){(Q!==Ve||fe!==Ct||$!==Pt)&&(e.stencilFunc(Ve,Ct,Pt),Q=Ve,fe=Ct,$=Pt)},setOp:function(Ve,Ct,Pt){(G!==Ve||pe!==Ct||Ce!==Pt)&&(e.stencilOp(Ve,Ct,Pt),G=Ve,pe=Ct,Ce=Pt)},setLocked:function(Ve){S=Ve},setClear:function(Ve){Ze!==Ve&&(e.clearStencil(Ve),Ze=Ve)},reset:function(){S=!1,te=null,Q=null,fe=null,$=null,G=null,pe=null,Ce=null,Ze=null}}}const r=new t,c=new i,m=new o,D=new WeakMap,x=new WeakMap;let P={},R={},p=new WeakMap,_=[],E=null,I=!1,f=null,l=null,v=null,A=null,M=null,F=null,L=null,y=new Je(0,0,0),d=0,h=!1,Z=null,C=null,V=null,z=null,W=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=O>=1):ie.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=O>=2);let ae=null,Me={};const Ae=e.getParameter(e.SCISSOR_BOX),he=e.getParameter(e.VIEWPORT),Ne=new _t().fromArray(Ae),et=new _t().fromArray(he);function tt(S,te,Q,fe){const $=new Uint8Array(4),G=e.createTexture();e.bindTexture(S,G),e.texParameteri(S,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(S,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<Q;pe++)S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(te+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return G}const X={};X[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),c.setClear(1),m.setClear(0),J(e.DEPTH_TEST),c.setFunc(mi),we(!1),it(qi),J(e.CULL_FACE),He(Ut);function J(S){P[S]!==!0&&(e.enable(S),P[S]=!0)}function ne(S){P[S]!==!1&&(e.disable(S),P[S]=!1)}function De(S,te){return R[S]!==te?(e.bindFramebuffer(S,te),R[S]=te,S===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),S===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(S,te){let Q=_,fe=!1;if(S){Q=p.get(te),Q===void 0&&(Q=[],p.set(te,Q));const $=S.textures;if(Q.length!==$.length||Q[0]!==e.COLOR_ATTACHMENT0){for(let G=0,pe=$.length;G<pe;G++)Q[G]=e.COLOR_ATTACHMENT0+G;Q.length=$.length,fe=!0}}else Q[0]!==e.BACK&&(Q[0]=e.BACK,fe=!0);fe&&e.drawBuffers(Q)}function Re(S){return E!==S?(e.useProgram(S),E=S,!0):!1}const ft={[rn]:e.FUNC_ADD,[Tr]:e.FUNC_SUBTRACT,[Mr]:e.FUNC_REVERSE_SUBTRACT};ft[Lo]=e.MIN,ft[Uo]=e.MAX;const Fe={[Br]:e.ZERO,[Or]:e.ONE,[Fr]:e.SRC_COLOR,[Nr]:e.SRC_ALPHA,[yr]:e.SRC_ALPHA_SATURATE,[Ir]:e.DST_COLOR,[wr]:e.DST_ALPHA,[Ur]:e.ONE_MINUS_SRC_COLOR,[Lr]:e.ONE_MINUS_SRC_ALPHA,[Dr]:e.ONE_MINUS_DST_COLOR,[Pr]:e.ONE_MINUS_DST_ALPHA,[Cr]:e.CONSTANT_COLOR,[Rr]:e.ONE_MINUS_CONSTANT_COLOR,[br]:e.CONSTANT_ALPHA,[Ar]:e.ONE_MINUS_CONSTANT_ALPHA};function He(S,te,Q,fe,$,G,pe,Ce,Ze,Ve){if(S===Ut){I===!0&&(ne(e.BLEND),I=!1);return}if(I===!1&&(J(e.BLEND),I=!0),S!==mo){if(S!==f||Ve!==h){if((l!==rn||M!==rn)&&(e.blendEquation(e.FUNC_ADD),l=rn,M=rn),Ve)switch(S){case An:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFunc(e.ONE,e.ONE);break;case $i:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:je("WebGLState: Invalid blending: ",S);break}else switch(S){case An:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ji:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case $i:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zi:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",S);break}v=null,A=null,F=null,L=null,y.set(0,0,0),d=0,f=S,h=Ve}return}$=$||te,G=G||Q,pe=pe||fe,(te!==l||$!==M)&&(e.blendEquationSeparate(ft[te],ft[$]),l=te,M=$),(Q!==v||fe!==A||G!==F||pe!==L)&&(e.blendFuncSeparate(Fe[Q],Fe[fe],Fe[G],Fe[pe]),v=Q,A=fe,F=G,L=pe),(Ce.equals(y)===!1||Ze!==d)&&(e.blendColor(Ce.r,Ce.g,Ce.b,Ze),y.copy(Ce),d=Ze),f=S,h=!1}function Xe(S,te){S.side===Dt?ne(e.CULL_FACE):J(e.CULL_FACE);let Q=S.side===St;te&&(Q=!Q),we(Q),S.blending===An&&S.transparent===!1?He(Ut):He(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),c.setFunc(S.depthFunc),c.setTest(S.depthTest),c.setMask(S.depthWrite),r.setMask(S.colorWrite);const fe=S.stencilWrite;m.setTest(fe),fe&&(m.setMask(S.stencilWriteMask),m.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),m.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ot(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(S){Z!==S&&(S?e.frontFace(e.CW):e.frontFace(e.CCW),Z=S)}function it(S){S!==po?(J(e.CULL_FACE),S!==C&&(S===qi?e.cullFace(e.BACK):S===ho?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ne(e.CULL_FACE),C=S}function g(S){S!==V&&(B&&e.lineWidth(S),V=S)}function ot(S,te,Q){S?(J(e.POLYGON_OFFSET_FILL),(z!==te||W!==Q)&&(z=te,W=Q,c.getReversed()&&(te=-te),e.polygonOffset(te,Q))):ne(e.POLYGON_OFFSET_FILL)}function Ge(S){S?J(e.SCISSOR_TEST):ne(e.SCISSOR_TEST)}function qe(S){S===void 0&&(S=e.TEXTURE0+Y-1),ae!==S&&(e.activeTexture(S),ae=S)}function ge(S,te,Q){Q===void 0&&(ae===null?Q=e.TEXTURE0+Y-1:Q=ae);let fe=Me[Q];fe===void 0&&(fe={type:void 0,texture:void 0},Me[Q]=fe),(fe.type!==S||fe.texture!==te)&&(ae!==Q&&(e.activeTexture(Q),ae=Q),e.bindTexture(S,te||X[S]),fe.type=S,fe.texture=te)}function u(){const S=Me[ae];S!==void 0&&S.type!==void 0&&(e.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(S){je("WebGLState:",S)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(S){je("WebGLState:",S)}}function k(){try{e.texSubImage2D(...arguments)}catch(S){je("WebGLState:",S)}}function K(){try{e.texSubImage3D(...arguments)}catch(S){je("WebGLState:",S)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(S){je("WebGLState:",S)}}function de(){try{e.compressedTexSubImage3D(...arguments)}catch(S){je("WebGLState:",S)}}function ee(){try{e.texStorage2D(...arguments)}catch(S){je("WebGLState:",S)}}function xe(){try{e.texStorage3D(...arguments)}catch(S){je("WebGLState:",S)}}function be(){try{e.texImage2D(...arguments)}catch(S){je("WebGLState:",S)}}function q(){try{e.texImage3D(...arguments)}catch(S){je("WebGLState:",S)}}function j(S){Ne.equals(S)===!1&&(e.scissor(S.x,S.y,S.z,S.w),Ne.copy(S))}function ue(S){et.equals(S)===!1&&(e.viewport(S.x,S.y,S.z,S.w),et.copy(S))}function me(S,te){let Q=x.get(te);Q===void 0&&(Q=new WeakMap,x.set(te,Q));let fe=Q.get(S);fe===void 0&&(fe=e.getUniformBlockIndex(te,S.name),Q.set(S,fe))}function le(S,te){const fe=x.get(te).get(S);D.get(te)!==fe&&(e.uniformBlockBinding(te,fe,S.__bindingPointIndex),D.set(te,fe))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),c.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),P={},ae=null,Me={},R={},p=new WeakMap,_=[],E=null,I=!1,f=null,l=null,v=null,A=null,M=null,F=null,L=null,y=new Je(0,0,0),d=0,h=!1,Z=null,C=null,V=null,z=null,W=null,Ne.set(0,0,e.canvas.width,e.canvas.height),et.set(0,0,e.canvas.width,e.canvas.height),r.reset(),c.reset(),m.reset()}return{buffers:{color:r,depth:c,stencil:m},enable:J,disable:ne,bindFramebuffer:De,drawBuffers:Te,useProgram:Re,setBlending:He,setMaterial:Xe,setFlipSided:we,setCullFace:it,setLineWidth:g,setPolygonOffset:ot,setScissorTest:Ge,activeTexture:qe,bindTexture:ge,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:T,texImage2D:be,texImage3D:q,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ee,texStorage3D:xe,texSubImage2D:k,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:de,scissor:j,viewport:ue,reset:Ie}}function gd(e,n,t,i,o,r,c){const m=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new Qe,P=new WeakMap;let R;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(u,a){return _?new OffscreenCanvas(u,a):Ao("canvas")}function I(u,a,T){let k=1;const K=ge(u);if((K.width>T||K.height>T)&&(k=T/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const H=Math.floor(k*K.width),de=Math.floor(k*K.height);R===void 0&&(R=E(H,de));const ee=a?E(H,de):R;return ee.width=H,ee.height=de,ee.getContext("2d").drawImage(u,0,0,H,de),Ke("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+de+")."),ee}else return"data"in u&&Ke("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),u;return u}function f(u){return u.generateMipmaps}function l(u){e.generateMipmap(u)}function v(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(u,a,T,k,K=!1){if(u!==null){if(e[u]!==void 0)return e[u];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let H=a;if(a===e.RED&&(T===e.FLOAT&&(H=e.R32F),T===e.HALF_FLOAT&&(H=e.R16F),T===e.UNSIGNED_BYTE&&(H=e.R8)),a===e.RED_INTEGER&&(T===e.UNSIGNED_BYTE&&(H=e.R8UI),T===e.UNSIGNED_SHORT&&(H=e.R16UI),T===e.UNSIGNED_INT&&(H=e.R32UI),T===e.BYTE&&(H=e.R8I),T===e.SHORT&&(H=e.R16I),T===e.INT&&(H=e.R32I)),a===e.RG&&(T===e.FLOAT&&(H=e.RG32F),T===e.HALF_FLOAT&&(H=e.RG16F),T===e.UNSIGNED_BYTE&&(H=e.RG8)),a===e.RG_INTEGER&&(T===e.UNSIGNED_BYTE&&(H=e.RG8UI),T===e.UNSIGNED_SHORT&&(H=e.RG16UI),T===e.UNSIGNED_INT&&(H=e.RG32UI),T===e.BYTE&&(H=e.RG8I),T===e.SHORT&&(H=e.RG16I),T===e.INT&&(H=e.RG32I)),a===e.RGB_INTEGER&&(T===e.UNSIGNED_BYTE&&(H=e.RGB8UI),T===e.UNSIGNED_SHORT&&(H=e.RGB16UI),T===e.UNSIGNED_INT&&(H=e.RGB32UI),T===e.BYTE&&(H=e.RGB8I),T===e.SHORT&&(H=e.RGB16I),T===e.INT&&(H=e.RGB32I)),a===e.RGBA_INTEGER&&(T===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),T===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),T===e.UNSIGNED_INT&&(H=e.RGBA32UI),T===e.BYTE&&(H=e.RGBA8I),T===e.SHORT&&(H=e.RGBA16I),T===e.INT&&(H=e.RGBA32I)),a===e.RGB&&(T===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),T===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),a===e.RGBA){const de=K?ja:rt.getTransfer(k);T===e.FLOAT&&(H=e.RGBA32F),T===e.HALF_FLOAT&&(H=e.RGBA16F),T===e.UNSIGNED_BYTE&&(H=de===$e?e.SRGB8_ALPHA8:e.RGBA8),T===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),T===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function M(u,a){let T;return u?a===null||a===Xt||a===un?T=e.DEPTH24_STENCIL8:a===Ft?T=e.DEPTH32F_STENCIL8:a===Cn&&(T=e.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Xt||a===un?T=e.DEPTH_COMPONENT24:a===Ft?T=e.DEPTH_COMPONENT32F:a===Cn&&(T=e.DEPTH_COMPONENT16),T}function F(u,a){return f(u)===!0||u.isFramebufferTexture&&u.minFilter!==zt&&u.minFilter!==vt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function L(u){const a=u.target;a.removeEventListener("dispose",L),d(a),a.isVideoTexture&&P.delete(a)}function y(u){const a=u.target;a.removeEventListener("dispose",y),Z(a)}function d(u){const a=i.get(u);if(a.__webglInit===void 0)return;const T=u.source,k=p.get(T);if(k){const K=k[a.__cacheKey];K.usedTimes--,K.usedTimes===0&&h(u),Object.keys(k).length===0&&p.delete(T)}i.remove(u)}function h(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const T=u.source,k=p.get(T);delete k[a.__cacheKey],c.memory.textures--}function Z(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(a.__webglFramebuffer[k]))for(let K=0;K<a.__webglFramebuffer[k].length;K++)e.deleteFramebuffer(a.__webglFramebuffer[k][K]);else e.deleteFramebuffer(a.__webglFramebuffer[k]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[k])}else{if(Array.isArray(a.__webglFramebuffer))for(let k=0;k<a.__webglFramebuffer.length;k++)e.deleteFramebuffer(a.__webglFramebuffer[k]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let k=0;k<a.__webglColorRenderbuffer.length;k++)a.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[k]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const T=u.textures;for(let k=0,K=T.length;k<K;k++){const H=i.get(T[k]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),c.memory.textures--),i.remove(T[k])}i.remove(u)}let C=0;function V(){C=0}function z(){const u=C;return u>=o.maxTextures&&Ke("WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+o.maxTextures),C+=1,u}function W(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function Y(u,a){const T=i.get(u);if(u.isVideoTexture&&Ge(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&T.__version!==u.version){const k=u.image;if(k===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{X(T,u,a);return}}else u.isExternalTexture&&(T.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,T.__webglTexture,e.TEXTURE0+a)}function B(u,a){const T=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&T.__version!==u.version){X(T,u,a);return}else u.isExternalTexture&&(T.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,T.__webglTexture,e.TEXTURE0+a)}function O(u,a){const T=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&T.__version!==u.version){X(T,u,a);return}t.bindTexture(e.TEXTURE_3D,T.__webglTexture,e.TEXTURE0+a)}function ie(u,a){const T=i.get(u);if(u.isCubeDepthTexture!==!0&&u.version>0&&T.__version!==u.version){J(T,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+a)}const ae={[Hr]:e.REPEAT,[Zn]:e.CLAMP_TO_EDGE,[Gr]:e.MIRRORED_REPEAT},Me={[zt]:e.NEAREST,[Vr]:e.NEAREST_MIPMAP_NEAREST,[vn]:e.NEAREST_MIPMAP_LINEAR,[vt]:e.LINEAR,[Nn]:e.LINEAR_MIPMAP_NEAREST,[$t]:e.LINEAR_MIPMAP_LINEAR},Ae={[Kr]:e.NEVER,[Yr]:e.ALWAYS,[Xr]:e.LESS,[ti]:e.LEQUAL,[zr]:e.EQUAL,[ei]:e.GEQUAL,[Wr]:e.GREATER,[kr]:e.NOTEQUAL};function he(u,a){if(a.type===Ft&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===vt||a.magFilter===Nn||a.magFilter===vn||a.magFilter===$t||a.minFilter===vt||a.minFilter===Nn||a.minFilter===vn||a.minFilter===$t)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ae[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Me[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Me[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Ae[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===zt||a.minFilter!==vn&&a.minFilter!==$t||a.type===Ft&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const T=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,o.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function Ne(u,a){let T=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",L));const k=a.source;let K=p.get(k);K===void 0&&(K={},p.set(k,K));const H=W(a);if(H!==u.__cacheKey){K[H]===void 0&&(K[H]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,T=!0),K[H].usedTimes++;const de=K[u.__cacheKey];de!==void 0&&(K[u.__cacheKey].usedTimes--,de.usedTimes===0&&h(a)),u.__cacheKey=H,u.__webglTexture=K[H].texture}return T}function et(u,a,T){return Math.floor(Math.floor(u/T)/a)}function tt(u,a,T,k){const H=u.updateRanges;if(H.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,T,k,a.data);else{H.sort((q,j)=>q.start-j.start);let de=0;for(let q=1;q<H.length;q++){const j=H[de],ue=H[q],me=j.start+j.count,le=et(ue.start,a.width,4),Ie=et(j.start,a.width,4);ue.start<=me+1&&le===Ie&&et(ue.start+ue.count-1,a.width,4)===le?j.count=Math.max(j.count,ue.start+ue.count-j.start):(++de,H[de]=ue)}H.length=de+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),xe=e.getParameter(e.UNPACK_SKIP_PIXELS),be=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let q=0,j=H.length;q<j;q++){const ue=H[q],me=Math.floor(ue.start/4),le=Math.ceil(ue.count/4),Ie=me%a.width,S=Math.floor(me/a.width),te=le,Q=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),e.pixelStorei(e.UNPACK_SKIP_ROWS,S),t.texSubImage2D(e.TEXTURE_2D,0,Ie,S,te,Q,T,k,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(e.UNPACK_SKIP_ROWS,be)}}function X(u,a,T){let k=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(k=e.TEXTURE_3D);const K=Ne(u,a),H=a.source;t.bindTexture(k,u.__webglTexture,e.TEXTURE0+T);const de=i.get(H);if(H.version!==de.__version||K===!0){t.activeTexture(e.TEXTURE0+T);const ee=rt.getPrimaries(rt.workingColorSpace),xe=a.colorSpace===Zt?null:rt.getPrimaries(a.colorSpace),be=a.colorSpace===Zt||ee===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let q=I(a.image,!1,o.maxTextureSize);q=qe(a,q);const j=r.convert(a.format,a.colorSpace),ue=r.convert(a.type);let me=A(a.internalFormat,j,ue,a.colorSpace,a.isVideoTexture);he(k,a);let le;const Ie=a.mipmaps,S=a.isVideoTexture!==!0,te=de.__version===void 0||K===!0,Q=H.dataReady,fe=F(a,q);if(a.isDepthTexture)me=M(a.format===jt,a.type),te&&(S?t.texStorage2D(e.TEXTURE_2D,1,me,q.width,q.height):t.texImage2D(e.TEXTURE_2D,0,me,q.width,q.height,0,j,ue,null));else if(a.isDataTexture)if(Ie.length>0){S&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let $=0,G=Ie.length;$<G;$++)le=Ie[$],S?Q&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,le.width,le.height,j,ue,le.data):t.texImage2D(e.TEXTURE_2D,$,me,le.width,le.height,0,j,ue,le.data);a.generateMipmaps=!1}else S?(te&&t.texStorage2D(e.TEXTURE_2D,fe,me,q.width,q.height),Q&&tt(a,q,j,ue)):t.texImage2D(e.TEXTURE_2D,0,me,q.width,q.height,0,j,ue,q.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){S&&te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,Ie[0].width,Ie[0].height,q.depth);for(let $=0,G=Ie.length;$<G;$++)if(le=Ie[$],a.format!==Lt)if(j!==null)if(S){if(Q)if(a.layerUpdates.size>0){const pe=Qi(le.width,le.height,a.format,a.type);for(const Ce of a.layerUpdates){const Ze=le.data.subarray(Ce*pe/le.data.BYTES_PER_ELEMENT,(Ce+1)*pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ce,le.width,le.height,1,j,Ze)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,q.depth,j,le.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,me,le.width,le.height,q.depth,0,le.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?Q&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,q.depth,j,ue,le.data):t.texImage3D(e.TEXTURE_2D_ARRAY,$,me,le.width,le.height,q.depth,0,j,ue,le.data)}else{S&&te&&t.texStorage2D(e.TEXTURE_2D,fe,me,Ie[0].width,Ie[0].height);for(let $=0,G=Ie.length;$<G;$++)le=Ie[$],a.format!==Lt?j!==null?S?Q&&t.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,le.width,le.height,j,le.data):t.compressedTexImage2D(e.TEXTURE_2D,$,me,le.width,le.height,0,le.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?Q&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,le.width,le.height,j,ue,le.data):t.texImage2D(e.TEXTURE_2D,$,me,le.width,le.height,0,j,ue,le.data)}else if(a.isDataArrayTexture)if(S){if(te&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,me,q.width,q.height,q.depth),Q)if(a.layerUpdates.size>0){const $=Qi(q.width,q.height,a.format,a.type);for(const G of a.layerUpdates){const pe=q.data.subarray(G*$/q.data.BYTES_PER_ELEMENT,(G+1)*$/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,G,q.width,q.height,1,j,ue,pe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,j,ue,q.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,me,q.width,q.height,q.depth,0,j,ue,q.data);else if(a.isData3DTexture)S?(te&&t.texStorage3D(e.TEXTURE_3D,fe,me,q.width,q.height,q.depth),Q&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,j,ue,q.data)):t.texImage3D(e.TEXTURE_3D,0,me,q.width,q.height,q.depth,0,j,ue,q.data);else if(a.isFramebufferTexture){if(te)if(S)t.texStorage2D(e.TEXTURE_2D,fe,me,q.width,q.height);else{let $=q.width,G=q.height;for(let pe=0;pe<fe;pe++)t.texImage2D(e.TEXTURE_2D,pe,me,$,G,0,j,ue,null),$>>=1,G>>=1}}else if(Ie.length>0){if(S&&te){const $=ge(Ie[0]);t.texStorage2D(e.TEXTURE_2D,fe,me,$.width,$.height)}for(let $=0,G=Ie.length;$<G;$++)le=Ie[$],S?Q&&t.texSubImage2D(e.TEXTURE_2D,$,0,0,j,ue,le):t.texImage2D(e.TEXTURE_2D,$,me,j,ue,le);a.generateMipmaps=!1}else if(S){if(te){const $=ge(q);t.texStorage2D(e.TEXTURE_2D,fe,me,$.width,$.height)}Q&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,j,ue,q)}else t.texImage2D(e.TEXTURE_2D,0,me,j,ue,q);f(a)&&l(k),de.__version=H.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function J(u,a,T){if(a.image.length!==6)return;const k=Ne(u,a),K=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+T);const H=i.get(K);if(K.version!==H.__version||k===!0){t.activeTexture(e.TEXTURE0+T);const de=rt.getPrimaries(rt.workingColorSpace),ee=a.colorSpace===Zt?null:rt.getPrimaries(a.colorSpace),xe=a.colorSpace===Zt||de===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const be=a.isCompressedTexture||a.image[0].isCompressedTexture,q=a.image[0]&&a.image[0].isDataTexture,j=[];for(let G=0;G<6;G++)!be&&!q?j[G]=I(a.image[G],!0,o.maxCubemapSize):j[G]=q?a.image[G].image:a.image[G],j[G]=qe(a,j[G]);const ue=j[0],me=r.convert(a.format,a.colorSpace),le=r.convert(a.type),Ie=A(a.internalFormat,me,le,a.colorSpace),S=a.isVideoTexture!==!0,te=H.__version===void 0||k===!0,Q=K.dataReady;let fe=F(a,ue);he(e.TEXTURE_CUBE_MAP,a);let $;if(be){S&&te&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ie,ue.width,ue.height);for(let G=0;G<6;G++){$=j[G].mipmaps;for(let pe=0;pe<$.length;pe++){const Ce=$[pe];a.format!==Lt?me!==null?S?Q&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,Ie,Ce.width,Ce.height,0,Ce.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?Q&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,0,0,Ce.width,Ce.height,me,le,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe,Ie,Ce.width,Ce.height,0,me,le,Ce.data)}}}else{if($=a.mipmaps,S&&te){$.length>0&&fe++;const G=ge(j[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,Ie,G.width,G.height)}for(let G=0;G<6;G++)if(q){S?Q&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,j[G].width,j[G].height,me,le,j[G].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ie,j[G].width,j[G].height,0,me,le,j[G].data);for(let pe=0;pe<$.length;pe++){const Ze=$[pe].image[G].image;S?Q&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,Ze.width,Ze.height,me,le,Ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,Ie,Ze.width,Ze.height,0,me,le,Ze.data)}}else{S?Q&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,me,le,j[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ie,me,le,j[G]);for(let pe=0;pe<$.length;pe++){const Ce=$[pe];S?Q&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,0,0,me,le,Ce.image[G]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+G,pe+1,Ie,me,le,Ce.image[G])}}}f(a)&&l(e.TEXTURE_CUBE_MAP),H.__version=K.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function ne(u,a,T,k,K,H){const de=r.convert(T.format,T.colorSpace),ee=r.convert(T.type),xe=A(T.internalFormat,de,ee,T.colorSpace),be=i.get(a),q=i.get(T);if(q.__renderTarget=a,!be.__hasExternalTextures){const j=Math.max(1,a.width>>H),ue=Math.max(1,a.height>>H);K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY?t.texImage3D(K,H,xe,j,ue,a.depth,0,de,ee,null):t.texImage2D(K,H,xe,j,ue,0,de,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),ot(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,K,q.__webglTexture,0,g(a)):(K===e.TEXTURE_2D||K>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,K,q.__webglTexture,H),t.bindFramebuffer(e.FRAMEBUFFER,null)}function De(u,a,T){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const k=a.depthTexture,K=k&&k.isDepthTexture?k.type:null,H=M(a.stencilBuffer,K),de=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ot(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,g(a),H,a.width,a.height):T?e.renderbufferStorageMultisample(e.RENDERBUFFER,g(a),H,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,H,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,u)}else{const k=a.textures;for(let K=0;K<k.length;K++){const H=k[K],de=r.convert(H.format,H.colorSpace),ee=r.convert(H.type),xe=A(H.internalFormat,de,ee,H.colorSpace);ot(a)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,g(a),xe,a.width,a.height):T?e.renderbufferStorageMultisample(e.RENDERBUFFER,g(a),xe,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,xe,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(u,a,T){const k=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(a.depthTexture);if(K.__renderTarget=a,(!K.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,a.depthTexture.addEventListener("dispose",L)),K.__webglTexture===void 0){K.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),he(e.TEXTURE_CUBE_MAP,a.depthTexture);const be=r.convert(a.depthTexture.format),q=r.convert(a.depthTexture.type);let j;a.depthTexture.format===tn?j=e.DEPTH_COMPONENT24:a.depthTexture.format===jt&&(j=e.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,j,a.width,a.height,0,be,q,null)}}else Y(a.depthTexture,0);const H=K.__webglTexture,de=g(a),ee=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+T:e.TEXTURE_2D,xe=a.depthTexture.format===jt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===tn)ot(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else if(a.depthTexture.format===jt)ot(a)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,ee,H,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,xe,ee,H,0);else throw new Error("Unknown depthTexture format")}function Re(u){const a=i.get(u),T=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const k=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),k){const K=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),a.__depthDisposeCallback=K}a.__boundDepthTexture=k}if(u.depthTexture&&!a.__autoAllocateDepthBuffer)if(T)for(let k=0;k<6;k++)Te(a.__webglFramebuffer[k],u,k);else{const k=u.texture.mipmaps;k&&k.length>0?Te(a.__webglFramebuffer[0],u,0):Te(a.__webglFramebuffer,u,0)}else if(T){a.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[k]),a.__webglDepthbuffer[k]===void 0)a.__webglDepthbuffer[k]=e.createRenderbuffer(),De(a.__webglDepthbuffer[k],u,!1);else{const K=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,H)}}else{const k=u.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),De(a.__webglDepthbuffer,u,!1);else{const K=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,H)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ft(u,a,T){const k=i.get(u);a!==void 0&&ne(k.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),T!==void 0&&Re(u)}function Fe(u){const a=u.texture,T=i.get(u),k=i.get(a);u.addEventListener("dispose",y);const K=u.textures,H=u.isWebGLCubeRenderTarget===!0,de=K.length>1;if(de||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=a.version,c.memory.textures++),H){T.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){T.__webglFramebuffer[ee]=[];for(let xe=0;xe<a.mipmaps.length;xe++)T.__webglFramebuffer[ee][xe]=e.createFramebuffer()}else T.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){T.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)T.__webglFramebuffer[ee]=e.createFramebuffer()}else T.__webglFramebuffer=e.createFramebuffer();if(de)for(let ee=0,xe=K.length;ee<xe;ee++){const be=i.get(K[ee]);be.__webglTexture===void 0&&(be.__webglTexture=e.createTexture(),c.memory.textures++)}if(u.samples>0&&ot(u)===!1){T.__webglMultisampledFramebuffer=e.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const xe=K[ee];T.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,T.__webglColorRenderbuffer[ee]);const be=r.convert(xe.format,xe.colorSpace),q=r.convert(xe.type),j=A(xe.internalFormat,be,q,xe.colorSpace,u.isXRRenderTarget===!0),ue=g(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,ue,j,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,T.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(T.__webglDepthRenderbuffer=e.createRenderbuffer(),De(T.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){t.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),he(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(T.__webglFramebuffer[ee][xe],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe);else ne(T.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(a)&&l(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,xe=K.length;ee<xe;ee++){const be=K[ee],q=i.get(be);let j=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(j=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),he(j,be),ne(T.__webglFramebuffer,u,be,e.COLOR_ATTACHMENT0+ee,j,0),f(be)&&l(j)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,k.__webglTexture),he(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let xe=0;xe<a.mipmaps.length;xe++)ne(T.__webglFramebuffer[xe],u,a,e.COLOR_ATTACHMENT0,ee,xe);else ne(T.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);f(a)&&l(ee),t.unbindTexture()}u.depthBuffer&&Re(u)}function He(u){const a=u.textures;for(let T=0,k=a.length;T<k;T++){const K=a[T];if(f(K)){const H=v(u),de=i.get(K).__webglTexture;t.bindTexture(H,de),l(H),t.unbindTexture()}}}const Xe=[],we=[];function it(u){if(u.samples>0){if(ot(u)===!1){const a=u.textures,T=u.width,k=u.height;let K=e.COLOR_BUFFER_BIT;const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=i.get(u),ee=a.length>1;if(ee)for(let be=0;be<a.length;be++)t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const xe=u.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let be=0;be<a.length;be++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(K|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(K|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[be]);const q=i.get(a[be]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,q,0)}e.blitFramebuffer(0,0,T,k,0,0,T,k,K,e.NEAREST),D===!0&&(Xe.length=0,we.length=0,Xe.push(e.COLOR_ATTACHMENT0+be),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Xe.push(H),we.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let be=0;be<a.length;be++){t.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.RENDERBUFFER,de.__webglColorRenderbuffer[be]);const q=i.get(a[be]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.TEXTURE_2D,q,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&D){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function g(u){return Math.min(o.maxSamples,u.samples)}function ot(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function Ge(u){const a=c.render.frame;P.get(u)!==a&&(P.set(u,a),u.update())}function qe(u,a){const T=u.colorSpace,k=u.format,K=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||T!==Pn&&T!==Zt&&(rt.getTransfer(T)===$e?(k!==Lt||K!==At)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",T)),a}function ge(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(x.width=u.naturalWidth||u.width,x.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(x.width=u.displayWidth,x.height=u.displayHeight):(x.width=u.width,x.height=u.height),x}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=ie,this.rebindTextures=ft,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vd(e,n){function t(i,o=Zt){let r;const c=rt.getTransfer(o);if(i===At)return e.UNSIGNED_BYTE;if(i===Na)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Fa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Qr)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===eo)return e.BYTE;if(i===to)return e.SHORT;if(i===Cn)return e.UNSIGNED_SHORT;if(i===Ga)return e.INT;if(i===Xt)return e.UNSIGNED_INT;if(i===Ft)return e.FLOAT;if(i===Bt)return e.HALF_FLOAT;if(i===no)return e.ALPHA;if(i===io)return e.RGB;if(i===Lt)return e.RGBA;if(i===tn)return e.DEPTH_COMPONENT;if(i===jt)return e.DEPTH_STENCIL;if(i===ao)return e.RED;if(i===ya)return e.RED_INTEGER;if(i===pn)return e.RG;if(i===Ia)return e.RG_INTEGER;if(i===wa)return e.RGBA_INTEGER;if(i===Fn||i===On||i===Bn||i===Gn)if(c===$e)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fn)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fn)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===On)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bn)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_i||i===gi||i===vi||i===Si)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_i)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gi)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Si)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ei||i===xi||i===Mi||i===Ti||i===Ai||i===bi||i===Ri)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ei||i===xi)return c===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ti)return r.COMPRESSED_R11_EAC;if(i===Ai)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bi)return r.COMPRESSED_RG11_EAC;if(i===Ri)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ci||i===Pi||i===Di||i===Li||i===Ui||i===wi||i===Ii||i===yi||i===Ni||i===Fi||i===Oi||i===Bi||i===Gi||i===Hi)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ci)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Di)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Li)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ui)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ii)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ni)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hi)return c===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vi||i===ki||i===Wi)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Vi)return c===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ki)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zi||i===Xi||i===Yi||i===Ki)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===zi)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xi)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ki)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===un?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Sd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ed=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Oa(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new It({vertexShader:Sd,fragmentShader:Ed,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Md extends gr{constructor(n,t){super();const i=this;let o=null,r=1,c=null,m="local-floor",D=1,x=null,P=null,R=null,p=null,_=null,E=null;const I=typeof XRWebGLBinding<"u",f=new xd,l={},v=t.getContextAttributes();let A=null,M=null;const F=[],L=[],y=new Qe;let d=null;const h=new Mn;h.viewport=new _t;const Z=new Mn;Z.viewport=new _t;const C=[h,Z],V=new vr;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=F[X];return J===void 0&&(J=new yn,F[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=F[X];return J===void 0&&(J=new yn,F[X]=J),J.getGripSpace()},this.getHand=function(X){let J=F[X];return J===void 0&&(J=new yn,F[X]=J),J.getHandSpace()};function Y(X){const J=L.indexOf(X.inputSource);if(J===-1)return;const ne=F[J];ne!==void 0&&(ne.update(X.inputSource,X.frame,x||c),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",O);for(let X=0;X<F.length;X++){const J=L[X];J!==null&&(L[X]=null,F[X].disconnect(J))}z=null,W=null,f.reset();for(const X in l)delete l[X];n.setRenderTarget(A),_=null,p=null,R=null,o=null,M=null,tt.stop(),i.isPresenting=!1,n.setPixelRatio(d),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){m=X,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||c},this.setReferenceSpace=function(X){x=X},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return R===null&&I&&(R=new XRWebGLBinding(o,t)),R},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(A=n.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",B),o.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),d=n.getPixelRatio(),n.getSize(y),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,De=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?jt:tn,De=v.stencil?un:Xt);const Re={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};R=this.getBinding(),p=R.createProjectionLayer(Re),o.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),M=new Rt(p.textureWidth,p.textureHeight,{format:Lt,type:At,depthTexture:new Rn(p.textureWidth,p.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:n.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(o,t,ne),o.updateRenderState({baseLayer:_}),n.setPixelRatio(1),n.setSize(_.framebufferWidth,_.framebufferHeight,!1),M=new Rt(_.framebufferWidth,_.framebufferHeight,{format:Lt,type:At,colorSpace:n.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(D),x=null,c=await o.requestReferenceSpace(m),tt.setContext(o),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function O(X){for(let J=0;J<X.removed.length;J++){const ne=X.removed[J],De=L.indexOf(ne);De>=0&&(L[De]=null,F[De].disconnect(ne))}for(let J=0;J<X.added.length;J++){const ne=X.added[J];let De=L.indexOf(ne);if(De===-1){for(let Re=0;Re<F.length;Re++)if(Re>=L.length){L.push(ne),De=Re;break}else if(L[Re]===null){L[Re]=ne,De=Re;break}if(De===-1)break}const Te=F[De];Te&&Te.connect(ne)}}const ie=new Le,ae=new Le;function Me(X,J,ne){ie.setFromMatrixPosition(J.matrixWorld),ae.setFromMatrixPosition(ne.matrixWorld);const De=ie.distanceTo(ae),Te=J.projectionMatrix.elements,Re=ne.projectionMatrix.elements,ft=Te[14]/(Te[10]-1),Fe=Te[14]/(Te[10]+1),He=(Te[9]+1)/Te[5],Xe=(Te[9]-1)/Te[5],we=(Te[8]-1)/Te[0],it=(Re[8]+1)/Re[0],g=ft*we,ot=ft*it,Ge=De/(-we+it),qe=Ge*-we;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qe),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ge=ft+Ge,u=Fe+Ge,a=g-qe,T=ot+(De-qe),k=He*Fe/u*ge,K=Xe*Fe/u*ge;X.projectionMatrix.makePerspective(a,T,k,K,ge,u),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ae(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let J=X.near,ne=X.far;f.texture!==null&&(f.depthNear>0&&(J=f.depthNear),f.depthFar>0&&(ne=f.depthFar)),V.near=Z.near=h.near=J,V.far=Z.far=h.far=ne,(z!==V.near||W!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,W=V.far),V.layers.mask=X.layers.mask|6,h.layers.mask=V.layers.mask&-5,Z.layers.mask=V.layers.mask&-3;const De=X.parent,Te=V.cameras;Ae(V,De);for(let Re=0;Re<Te.length;Re++)Ae(Te[Re],De);Te.length===2?Me(V,h,Z):V.projectionMatrix.copy(h.projectionMatrix),he(X,V,De)};function he(X,J,ne){ne===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Sr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(p===null&&_===null))return D},this.setFoveation=function(X){D=X,p!==null&&(p.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(X){return l[X]};let Ne=null;function et(X,J){if(P=J.getViewerPose(x||c),E=J,P!==null){const ne=P.views;_!==null&&(n.setRenderTargetFramebuffer(M,_.framebuffer),n.setRenderTarget(M));let De=!1;ne.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let Fe=0;Fe<ne.length;Fe++){const He=ne[Fe];let Xe=null;if(_!==null)Xe=_.getViewport(He);else{const it=R.getViewSubImage(p,He);Xe=it.viewport,Fe===0&&(n.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),n.setRenderTarget(M))}let we=C[Fe];we===void 0&&(we=new Mn,we.layers.enable(Fe),we.viewport=new _t,C[Fe]=we),we.matrix.fromArray(He.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(He.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Fe===0&&(V.matrix.copy(we.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(we)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&I){R=i.getBinding();const Fe=R.getDepthInformation(ne[0]);Fe&&Fe.isValid&&Fe.texture&&f.init(Fe,o.renderState)}if(Te&&Te.includes("camera-access")&&I){n.state.unbindTexture(),R=i.getBinding();for(let Fe=0;Fe<ne.length;Fe++){const He=ne[Fe].camera;if(He){let Xe=l[He];Xe||(Xe=new Oa,l[He]=Xe);const we=R.getCameraImage(He);Xe.sourceTexture=we}}}}for(let ne=0;ne<F.length;ne++){const De=L[ne],Te=F[ne];De!==null&&Te!==void 0&&Te.update(De,J,x||c)}Ne&&Ne(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),E=null}const tt=new Qa;tt.setAnimationLoop(et),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}}const kt=new ka,Td=new en;function Ad(e,n){function t(f,l){f.matrixAutoUpdate===!0&&f.updateMatrix(),l.value.copy(f.matrix)}function i(f,l){l.color.getRGB(f.fogColor.value,Va(e)),l.isFog?(f.fogNear.value=l.near,f.fogFar.value=l.far):l.isFogExp2&&(f.fogDensity.value=l.density)}function o(f,l,v,A,M){l.isMeshBasicMaterial?r(f,l):l.isMeshLambertMaterial?(r(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(r(f,l),R(f,l)):l.isMeshPhongMaterial?(r(f,l),P(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(r(f,l),p(f,l),l.isMeshPhysicalMaterial&&_(f,l,M)):l.isMeshMatcapMaterial?(r(f,l),E(f,l)):l.isMeshDepthMaterial?r(f,l):l.isMeshDistanceMaterial?(r(f,l),I(f,l)):l.isMeshNormalMaterial?r(f,l):l.isLineBasicMaterial?(c(f,l),l.isLineDashedMaterial&&m(f,l)):l.isPointsMaterial?D(f,l,v,A):l.isSpriteMaterial?x(f,l):l.isShadowMaterial?(f.color.value.copy(l.color),f.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(f,l){f.opacity.value=l.opacity,l.color&&f.diffuse.value.copy(l.color),l.emissive&&f.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.bumpMap&&(f.bumpMap.value=l.bumpMap,t(l.bumpMap,f.bumpMapTransform),f.bumpScale.value=l.bumpScale,l.side===St&&(f.bumpScale.value*=-1)),l.normalMap&&(f.normalMap.value=l.normalMap,t(l.normalMap,f.normalMapTransform),f.normalScale.value.copy(l.normalScale),l.side===St&&f.normalScale.value.negate()),l.displacementMap&&(f.displacementMap.value=l.displacementMap,t(l.displacementMap,f.displacementMapTransform),f.displacementScale.value=l.displacementScale,f.displacementBias.value=l.displacementBias),l.emissiveMap&&(f.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,f.emissiveMapTransform)),l.specularMap&&(f.specularMap.value=l.specularMap,t(l.specularMap,f.specularMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest);const v=n.get(l),A=v.envMap,M=v.envMapRotation;A&&(f.envMap.value=A,kt.copy(M),kt.x*=-1,kt.y*=-1,kt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(kt.y*=-1,kt.z*=-1),f.envMapRotation.value.setFromMatrix4(Td.makeRotationFromEuler(kt)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=l.reflectivity,f.ior.value=l.ior,f.refractionRatio.value=l.refractionRatio),l.lightMap&&(f.lightMap.value=l.lightMap,f.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,f.lightMapTransform)),l.aoMap&&(f.aoMap.value=l.aoMap,f.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,f.aoMapTransform))}function c(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform))}function m(f,l){f.dashSize.value=l.dashSize,f.totalSize.value=l.dashSize+l.gapSize,f.scale.value=l.scale}function D(f,l,v,A){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.size.value=l.size*v,f.scale.value=A*.5,l.map&&(f.map.value=l.map,t(l.map,f.uvTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function x(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.rotation.value=l.rotation,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function P(f,l){f.specular.value.copy(l.specular),f.shininess.value=Math.max(l.shininess,1e-4)}function R(f,l){l.gradientMap&&(f.gradientMap.value=l.gradientMap)}function p(f,l){f.metalness.value=l.metalness,l.metalnessMap&&(f.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,f.metalnessMapTransform)),f.roughness.value=l.roughness,l.roughnessMap&&(f.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,f.roughnessMapTransform)),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)}function _(f,l,v){f.ior.value=l.ior,l.sheen>0&&(f.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),f.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(f.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,f.sheenColorMapTransform)),l.sheenRoughnessMap&&(f.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,f.sheenRoughnessMapTransform))),l.clearcoat>0&&(f.clearcoat.value=l.clearcoat,f.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(f.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,f.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(f.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===St&&f.clearcoatNormalScale.value.negate())),l.dispersion>0&&(f.dispersion.value=l.dispersion),l.iridescence>0&&(f.iridescence.value=l.iridescence,f.iridescenceIOR.value=l.iridescenceIOR,f.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(f.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,f.iridescenceMapTransform)),l.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),l.transmission>0&&(f.transmission.value=l.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),l.transmissionMap&&(f.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,f.transmissionMapTransform)),f.thickness.value=l.thickness,l.thicknessMap&&(f.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=l.attenuationDistance,f.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(f.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(f.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=l.specularIntensity,f.specularColor.value.copy(l.specularColor),l.specularColorMap&&(f.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,f.specularColorMapTransform)),l.specularIntensityMap&&(f.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,l){l.matcap&&(f.matcap.value=l.matcap)}function I(f,l){const v=n.get(l).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function bd(e,n,t,i){let o={},r={},c=[];const m=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function D(v,A){const M=A.program;i.uniformBlockBinding(v,M)}function x(v,A){let M=o[v.id];M===void 0&&(E(v),M=P(v),o[v.id]=M,v.addEventListener("dispose",f));const F=A.program;i.updateUBOMapping(v,F);const L=n.render.frame;r[v.id]!==L&&(p(v),r[v.id]=L)}function P(v){const A=R();v.__bindingPointIndex=A;const M=e.createBuffer(),F=v.__size,L=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,F,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,M),M}function R(){for(let v=0;v<m;v++)if(c.indexOf(v)===-1)return c.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const A=o[v.id],M=v.uniforms,F=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let L=0,y=M.length;L<y;L++){const d=Array.isArray(M[L])?M[L]:[M[L]];for(let h=0,Z=d.length;h<Z;h++){const C=d[h];if(_(C,L,h,F)===!0){const V=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let Y=0;Y<z.length;Y++){const B=z[Y],O=I(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,V+W,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function _(v,A,M,F){const L=v.value,y=A+"_"+M;if(F[y]===void 0)return typeof L=="number"||typeof L=="boolean"?F[y]=L:F[y]=L.clone(),!0;{const d=F[y];if(typeof L=="number"||typeof L=="boolean"){if(d!==L)return F[y]=L,!0}else if(d.equals(L)===!1)return d.copy(L),!0}return!1}function E(v){const A=v.uniforms;let M=0;const F=16;for(let y=0,d=A.length;y<d;y++){const h=Array.isArray(A[y])?A[y]:[A[y]];for(let Z=0,C=h.length;Z<C;Z++){const V=h[Z],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Y=z.length;W<Y;W++){const B=z[W],O=I(B),ie=M%F,ae=ie%O.boundary,Me=ie+ae;M+=ae,Me!==0&&F-Me<O.storage&&(M+=F-Me),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=O.storage}}}const L=M%F;return L>0&&(M+=F-L),v.__size=M,v.__cache={},this}function I(v){const A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",v),A}function f(v){const A=v.target;A.removeEventListener("dispose",f);const M=c.indexOf(A.__bindingPointIndex);c.splice(M,1),e.deleteBuffer(o[A.id]),delete o[A.id],delete r[A.id]}function l(){for(const v in o)e.deleteBuffer(o[v]);c=[],o={},r={}}return{bind:D,update:x,dispose:l}}const Rd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mt=null;function Cd(){return Mt===null&&(Mt=new Er(Rd,16,16,pn,Bt),Mt.name="DFG_LUT",Mt.minFilter=vt,Mt.magFilter=vt,Mt.wrapS=Zn,Mt.wrapT=Zn,Mt.generateMipmaps=!1,Mt.needsUpdate=!0),Mt}class kd{constructor(n={}){const{canvas:t=ur(),context:i=null,depth:o=!0,stencil:r=!1,alpha:c=!1,antialias:m=!1,premultipliedAlpha:D=!0,preserveDrawingBuffer:x=!1,powerPreference:P="default",failIfMajorPerformanceCaveat:R=!1,reversedDepthBuffer:p=!1,outputBufferType:_=At}=n;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=c;const I=_,f=new Set([wa,Ia,ya]),l=new Set([At,Xt,Cn,un,Na,Fa]),v=new Uint32Array(4),A=new Int32Array(4);let M=null,F=null;const L=[],y=[];let d=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const h=this;let Z=!1;this._outputColorSpace=pr;let C=0,V=0,z=null,W=-1,Y=null;const B=new _t,O=new _t;let ie=null;const ae=new Je(0);let Me=0,Ae=t.width,he=t.height,Ne=1,et=null,tt=null;const X=new _t(0,0,Ae,he),J=new _t(0,0,Ae,he);let ne=!1;const De=new Pa;let Te=!1,Re=!1;const ft=new en,Fe=new Le,He=new _t,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function it(){return z===null?Ne:1}let g=i;function ot(s,b){return t.getContext(s,b)}try{const s={alpha:!0,depth:o,stencil:r,antialias:m,premultipliedAlpha:D,preserveDrawingBuffer:x,powerPreference:P,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),g===null){const b="webgl2";if(g=ot(b,s),g===null)throw ot(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw je("WebGLRenderer: "+s.message),s}let Ge,qe,ge,u,a,T,k,K,H,de,ee,xe,be,q,j,ue,me,le,Ie,S,te,Q,fe;function $(){Ge=new Cc(g),Ge.init(),te=new vd(g,Ge),qe=new Sc(g,Ge,n,te),ge=new _d(g,Ge),qe.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),u=new Lc(g),a=new nd,T=new gd(g,Ge,ge,a,qe,te,u),k=new Rc(h),K=new No(g),Q=new gc(g,K),H=new Pc(g,K,u,Q),de=new wc(g,H,K,Q,u),le=new Uc(g,qe,T),j=new Ec(a),ee=new td(h,k,Ge,qe,Q,j),xe=new Ad(h,a),be=new ad,q=new fd(Ge),me=new _c(h,k,ge,de,E,D),ue=new md(h,de,qe),fe=new bd(g,u,qe,ge),Ie=new vc(g,Ge,u),S=new Dc(g,Ge,u),u.programs=ee.programs,h.capabilities=qe,h.extensions=Ge,h.properties=a,h.renderLists=be,h.shadowMap=ue,h.state=ge,h.info=u}$(),I!==At&&(d=new yc(I,t.width,t.height,o,r));const G=new Md(h,g);this.xr=G,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const s=Ge.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Ge.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(s){s!==void 0&&(Ne=s,this.setSize(Ae,he,!1))},this.getSize=function(s){return s.set(Ae,he)},this.setSize=function(s,b,N=!0){if(G.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=s,he=b,t.width=Math.floor(s*Ne),t.height=Math.floor(b*Ne),N===!0&&(t.style.width=s+"px",t.style.height=b+"px"),d!==null&&d.setSize(t.width,t.height),this.setViewport(0,0,s,b)},this.getDrawingBufferSize=function(s){return s.set(Ae*Ne,he*Ne).floor()},this.setDrawingBufferSize=function(s,b,N){Ae=s,he=b,Ne=N,t.width=Math.floor(s*N),t.height=Math.floor(b*N),this.setViewport(0,0,s,b)},this.setEffects=function(s){if(I===At){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(s){for(let b=0;b<s.length;b++)if(s[b].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}d.setEffects(s||[])},this.getCurrentViewport=function(s){return s.copy(B)},this.getViewport=function(s){return s.copy(X)},this.setViewport=function(s,b,N,w){s.isVector4?X.set(s.x,s.y,s.z,s.w):X.set(s,b,N,w),ge.viewport(B.copy(X).multiplyScalar(Ne).round())},this.getScissor=function(s){return s.copy(J)},this.setScissor=function(s,b,N,w){s.isVector4?J.set(s.x,s.y,s.z,s.w):J.set(s,b,N,w),ge.scissor(O.copy(J).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(s){ge.setScissorTest(ne=s)},this.setOpaqueSort=function(s){et=s},this.setTransparentSort=function(s){tt=s},this.getClearColor=function(s){return s.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(s=!0,b=!0,N=!0){let w=0;if(s){let U=!1;if(z!==null){const oe=z.texture.format;U=f.has(oe)}if(U){const oe=z.texture.type,ce=l.has(oe),se=me.getClearColor(),_e=me.getClearAlpha(),Se=se.r,Pe=se.g,ye=se.b;ce?(v[0]=Se,v[1]=Pe,v[2]=ye,v[3]=_e,g.clearBufferuiv(g.COLOR,0,v)):(A[0]=Se,A[1]=Pe,A[2]=ye,A[3]=_e,g.clearBufferiv(g.COLOR,0,A))}else w|=g.COLOR_BUFFER_BIT}b&&(w|=g.DEPTH_BUFFER_BIT),N&&(w|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w!==0&&g.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),me.dispose(),be.dispose(),q.dispose(),a.dispose(),k.dispose(),de.dispose(),Q.dispose(),fe.dispose(),ee.dispose(),G.dispose(),G.removeEventListener("sessionstart",ai),G.removeEventListener("sessionend",ri),Gt.stop()};function pe(s){s.preventDefault(),ui("WebGLRenderer: Context Lost."),Z=!0}function Ce(){ui("WebGLRenderer: Context Restored."),Z=!1;const s=u.autoReset,b=ue.enabled,N=ue.autoUpdate,w=ue.needsUpdate,U=ue.type;$(),u.autoReset=s,ue.enabled=b,ue.autoUpdate=N,ue.needsUpdate=w,ue.type=U}function Ze(s){je("WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function Ve(s){const b=s.target;b.removeEventListener("dispose",Ve),Ct(b)}function Ct(s){Pt(s),a.remove(s)}function Pt(s){const b=a.get(s).programs;b!==void 0&&(b.forEach(function(N){ee.releaseProgram(N)}),s.isShaderMaterial&&ee.releaseShaderCache(s))}this.renderBufferDirect=function(s,b,N,w,U,oe){b===null&&(b=Xe);const ce=U.isMesh&&U.matrixWorld.determinant()<0,se=or(s,b,N,w,U);ge.setMaterial(w,ce);let _e=N.index,Se=1;if(w.wireframe===!0){if(_e=H.getWireframeAttribute(N),_e===void 0)return;Se=2}const Pe=N.drawRange,ye=N.attributes.position;let Ee=Pe.start*Se,ke=(Pe.start+Pe.count)*Se;oe!==null&&(Ee=Math.max(Ee,oe.start*Se),ke=Math.min(ke,(oe.start+oe.count)*Se)),_e!==null?(Ee=Math.max(Ee,0),ke=Math.min(ke,_e.count)):ye!=null&&(Ee=Math.max(Ee,0),ke=Math.min(ke,ye.count));const at=ke-Ee;if(at<0||at===1/0)return;Q.setup(U,w,se,N,_e);let nt,We=Ie;if(_e!==null&&(nt=K.get(_e),We=S,We.setIndex(nt)),U.isMesh)w.wireframe===!0?(ge.setLineWidth(w.wireframeLinewidth*it()),We.setMode(g.LINES)):We.setMode(g.TRIANGLES);else if(U.isLine){let pt=w.linewidth;pt===void 0&&(pt=1),ge.setLineWidth(pt*it()),U.isLineSegments?We.setMode(g.LINES):U.isLineLoop?We.setMode(g.LINE_LOOP):We.setMode(g.LINE_STRIP)}else U.isPoints?We.setMode(g.POINTS):U.isSprite&&We.setMode(g.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))We.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const pt=U._multiDrawStarts,ve=U._multiDrawCounts,gt=U._multiDrawCount,Oe=_e?K.get(_e).bytesPerElement:1,Et=a.get(w).currentProgram.getUniforms();for(let xt=0;xt<gt;xt++)Et.setValue(g,"_gl_DrawID",xt),We.render(pt[xt]/Oe,ve[xt])}else if(U.isInstancedMesh)We.renderInstances(Ee,at,U.count);else if(N.isInstancedBufferGeometry){const pt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,ve=Math.min(N.instanceCount,pt);We.renderInstances(Ee,at,ve)}else We.render(Ee,at)};function ii(s,b,N){s.transparent===!0&&s.side===Dt&&s.forceSinglePass===!1?(s.side=St,s.needsUpdate=!0,gn(s,b,N),s.side=dn,s.needsUpdate=!0,gn(s,b,N),s.side=Dt):gn(s,b,N)}this.compile=function(s,b,N=null){N===null&&(N=s),F=q.get(N),F.init(b),y.push(F),N.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(F.pushLight(U),U.castShadow&&F.pushShadow(U))}),s!==N&&s.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(F.pushLight(U),U.castShadow&&F.pushShadow(U))}),F.setupLights();const w=new Set;return s.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let ce=0;ce<oe.length;ce++){const se=oe[ce];ii(se,N,U),w.add(se)}else ii(oe,N,U),w.add(oe)}),F=y.pop(),w},this.compileAsync=function(s,b,N=null){const w=this.compile(s,b,N);return new Promise(U=>{function oe(){if(w.forEach(function(ce){a.get(ce).currentProgram.isReady()&&w.delete(ce)}),w.size===0){U(s);return}setTimeout(oe,10)}Ge.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let wn=null;function rr(s){wn&&wn(s)}function ai(){Gt.stop()}function ri(){Gt.start()}const Gt=new Qa;Gt.setAnimationLoop(rr),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(s){wn=s,G.setAnimationLoop(s),s===null?Gt.stop():Gt.start()},G.addEventListener("sessionstart",ai),G.addEventListener("sessionend",ri),this.render=function(s,b){if(b!==void 0&&b.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;const N=G.enabled===!0&&G.isPresenting===!0,w=d!==null&&(z===null||N)&&d.begin(h,z);if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(d===null||d.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(b),b=G.getCamera()),s.isScene===!0&&s.onBeforeRender(h,s,b,z),F=q.get(s,y.length),F.init(b),y.push(F),ft.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),De.setFromProjectionMatrix(ft,pi,b.reversedDepth),Re=this.localClippingEnabled,Te=j.init(this.clippingPlanes,Re),M=be.get(s,L.length),M.init(),L.push(M),G.enabled===!0&&G.isPresenting===!0){const ce=h.xr.getDepthSensingMesh();ce!==null&&In(ce,b,-1/0,h.sortObjects)}In(s,b,0,h.sortObjects),M.finish(),h.sortObjects===!0&&M.sort(et,tt),we=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,we&&me.addToRenderList(M,s),this.info.render.frame++,Te===!0&&j.beginShadows();const U=F.state.shadowsArray;if(ue.render(U,s,b),Te===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),(w&&d.hasRenderPass())===!1){const ce=M.opaque,se=M.transmissive;if(F.setupLights(),b.isArrayCamera){const _e=b.cameras;if(se.length>0)for(let Se=0,Pe=_e.length;Se<Pe;Se++){const ye=_e[Se];si(ce,se,s,ye)}we&&me.render(s);for(let Se=0,Pe=_e.length;Se<Pe;Se++){const ye=_e[Se];oi(M,s,ye,ye.viewport)}}else se.length>0&&si(ce,se,s,b),we&&me.render(s),oi(M,s,b)}z!==null&&V===0&&(T.updateMultisampleRenderTarget(z),T.updateRenderTargetMipmap(z)),w&&d.end(h),s.isScene===!0&&s.onAfterRender(h,s,b),Q.resetDefaultState(),W=-1,Y=null,y.pop(),y.length>0?(F=y[y.length-1],Te===!0&&j.setGlobalState(h.clippingPlanes,F.state.camera)):F=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function In(s,b,N,w){if(s.visible===!1)return;if(s.layers.test(b.layers)){if(s.isGroup)N=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(b);else if(s.isLight)F.pushLight(s),s.castShadow&&F.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||De.intersectsSprite(s)){w&&He.setFromMatrixPosition(s.matrixWorld).applyMatrix4(ft);const ce=de.update(s),se=s.material;se.visible&&M.push(s,ce,se,N,He.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||De.intersectsObject(s))){const ce=de.update(s),se=s.material;if(w&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),He.copy(s.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),He.copy(ce.boundingSphere.center)),He.applyMatrix4(s.matrixWorld).applyMatrix4(ft)),Array.isArray(se)){const _e=ce.groups;for(let Se=0,Pe=_e.length;Se<Pe;Se++){const ye=_e[Se],Ee=se[ye.materialIndex];Ee&&Ee.visible&&M.push(s,ce,Ee,N,He.z,ye)}}else se.visible&&M.push(s,ce,se,N,He.z,null)}}const oe=s.children;for(let ce=0,se=oe.length;ce<se;ce++)In(oe[ce],b,N,w)}function oi(s,b,N,w){const{opaque:U,transmissive:oe,transparent:ce}=s;F.setupLightsView(N),Te===!0&&j.setGlobalState(h.clippingPlanes,N),w&&ge.viewport(B.copy(w)),U.length>0&&_n(U,b,N),oe.length>0&&_n(oe,b,N),ce.length>0&&_n(ce,b,N),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function si(s,b,N,w){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[w.id]===void 0){const Ee=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[w.id]=new Rt(1,1,{generateMipmaps:!0,type:Ee?Bt:At,minFilter:$t,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const oe=F.state.transmissionRenderTarget[w.id],ce=w.viewport||B;oe.setSize(ce.z*h.transmissionResolutionScale,ce.w*h.transmissionResolutionScale);const se=h.getRenderTarget(),_e=h.getActiveCubeFace(),Se=h.getActiveMipmapLevel();h.setRenderTarget(oe),h.getClearColor(ae),Me=h.getClearAlpha(),Me<1&&h.setClearColor(16777215,.5),h.clear(),we&&me.render(N);const Pe=h.toneMapping;h.toneMapping=bt;const ye=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),F.setupLightsView(w),Te===!0&&j.setGlobalState(h.clippingPlanes,w),_n(s,N,w),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ke=0,at=b.length;ke<at;ke++){const nt=b[ke],{object:We,geometry:pt,material:ve,group:gt}=nt;if(ve.side===Dt&&We.layers.test(w.layers)){const Oe=ve.side;ve.side=St,ve.needsUpdate=!0,li(We,N,w,pt,ve,gt),ve.side=Oe,ve.needsUpdate=!0,Ee=!0}}Ee===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}h.setRenderTarget(se,_e,Se),h.setClearColor(ae,Me),ye!==void 0&&(w.viewport=ye),h.toneMapping=Pe}function _n(s,b,N){const w=b.isScene===!0?b.overrideMaterial:null;for(let U=0,oe=s.length;U<oe;U++){const ce=s[U],{object:se,geometry:_e,group:Se}=ce;let Pe=ce.material;Pe.allowOverride===!0&&w!==null&&(Pe=w),se.layers.test(N.layers)&&li(se,b,N,_e,Pe,Se)}}function li(s,b,N,w,U,oe){s.onBeforeRender(h,b,N,w,U,oe),s.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),U.onBeforeRender(h,b,N,w,s,oe),U.transparent===!0&&U.side===Dt&&U.forceSinglePass===!1?(U.side=St,U.needsUpdate=!0,h.renderBufferDirect(N,b,w,U,s,oe),U.side=dn,U.needsUpdate=!0,h.renderBufferDirect(N,b,w,U,s,oe),U.side=Dt):h.renderBufferDirect(N,b,w,U,s,oe),s.onAfterRender(h,b,N,w,U,oe)}function gn(s,b,N){b.isScene!==!0&&(b=Xe);const w=a.get(s),U=F.state.lights,oe=F.state.shadowsArray,ce=U.state.version,se=ee.getParameters(s,U.state,oe,b,N),_e=ee.getProgramCacheKey(se);let Se=w.programs;w.environment=s.isMeshStandardMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial?b.environment:null,w.fog=b.fog;const Pe=s.isMeshStandardMaterial||s.isMeshLambertMaterial&&!s.envMap||s.isMeshPhongMaterial&&!s.envMap;w.envMap=k.get(s.envMap||w.environment,Pe),w.envMapRotation=w.environment!==null&&s.envMap===null?b.environmentRotation:s.envMapRotation,Se===void 0&&(s.addEventListener("dispose",Ve),Se=new Map,w.programs=Se);let ye=Se.get(_e);if(ye!==void 0){if(w.currentProgram===ye&&w.lightsStateVersion===ce)return fi(s,se),ye}else se.uniforms=ee.getUniforms(s),s.onBeforeCompile(se,h),ye=ee.acquireProgram(se,_e),Se.set(_e,ye),w.uniforms=se.uniforms;const Ee=w.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Ee.clippingPlanes=j.uniform),fi(s,se),w.needsLights=lr(s),w.lightsStateVersion=ce,w.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),w.currentProgram=ye,w.uniformsList=null,ye}function ci(s){if(s.uniformsList===null){const b=s.currentProgram.getUniforms();s.uniformsList=bn.seqWithValue(b.seq,s.uniforms)}return s.uniformsList}function fi(s,b){const N=a.get(s);N.outputColorSpace=b.outputColorSpace,N.batching=b.batching,N.batchingColor=b.batchingColor,N.instancing=b.instancing,N.instancingColor=b.instancingColor,N.instancingMorph=b.instancingMorph,N.skinning=b.skinning,N.morphTargets=b.morphTargets,N.morphNormals=b.morphNormals,N.morphColors=b.morphColors,N.morphTargetsCount=b.morphTargetsCount,N.numClippingPlanes=b.numClippingPlanes,N.numIntersection=b.numClipIntersection,N.vertexAlphas=b.vertexAlphas,N.vertexTangents=b.vertexTangents,N.toneMapping=b.toneMapping}function or(s,b,N,w,U){b.isScene!==!0&&(b=Xe),T.resetTextureUnits();const oe=b.fog,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?b.environment:null,se=z===null?h.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Pn,_e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Se=k.get(w.envMap||ce,_e),Pe=w.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,ye=!!N.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Ee=!!N.morphAttributes.position,ke=!!N.morphAttributes.normal,at=!!N.morphAttributes.color;let nt=bt;w.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(nt=h.toneMapping);const We=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pt=We!==void 0?We.length:0,ve=a.get(w),gt=F.state.lights;if(Te===!0&&(Re===!0||s!==Y)){const dt=s===Y&&w.id===W;j.setState(w,s,dt)}let Oe=!1;w.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==gt.state.version||ve.outputColorSpace!==se||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==Se||w.fog===!0&&ve.fog!==oe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==j.numPlanes||ve.numIntersection!==j.numIntersection)||ve.vertexAlphas!==Pe||ve.vertexTangents!==ye||ve.morphTargets!==Ee||ve.morphNormals!==ke||ve.morphColors!==at||ve.toneMapping!==nt||ve.morphTargetsCount!==pt)&&(Oe=!0):(Oe=!0,ve.__version=w.version);let Et=ve.currentProgram;Oe===!0&&(Et=gn(w,b,U));let xt=!1,Ht=!1,Yt=!1;const Ye=Et.getUniforms(),ut=ve.uniforms;if(ge.useProgram(Et.program)&&(xt=!0,Ht=!0,Yt=!0),w.id!==W&&(W=w.id,Ht=!0),xt||Y!==s){ge.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),Ye.setValue(g,"projectionMatrix",s.projectionMatrix),Ye.setValue(g,"viewMatrix",s.matrixWorldInverse);const Nt=Ye.map.cameraPosition;Nt!==void 0&&Nt.setValue(g,Fe.setFromMatrixPosition(s.matrixWorld)),qe.logarithmicDepthBuffer&&Ye.setValue(g,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Ye.setValue(g,"isOrthographic",s.isOrthographicCamera===!0),Y!==s&&(Y=s,Ht=!0,Yt=!0)}if(ve.needsLights&&(gt.state.directionalShadowMap.length>0&&Ye.setValue(g,"directionalShadowMap",gt.state.directionalShadowMap,T),gt.state.spotShadowMap.length>0&&Ye.setValue(g,"spotShadowMap",gt.state.spotShadowMap,T),gt.state.pointShadowMap.length>0&&Ye.setValue(g,"pointShadowMap",gt.state.pointShadowMap,T)),U.isSkinnedMesh){Ye.setOptional(g,U,"bindMatrix"),Ye.setOptional(g,U,"bindMatrixInverse");const dt=U.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Ye.setValue(g,"boneTexture",dt.boneTexture,T))}U.isBatchedMesh&&(Ye.setOptional(g,U,"batchingTexture"),Ye.setValue(g,"batchingTexture",U._matricesTexture,T),Ye.setOptional(g,U,"batchingIdTexture"),Ye.setValue(g,"batchingIdTexture",U._indirectTexture,T),Ye.setOptional(g,U,"batchingColorTexture"),U._colorsTexture!==null&&Ye.setValue(g,"batchingColorTexture",U._colorsTexture,T));const yt=N.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0)&&le.update(U,N,Et),(Ht||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,Ye.setValue(g,"receiveShadow",U.receiveShadow)),(w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial)&&w.envMap===null&&b.environment!==null&&(ut.envMapIntensity.value=b.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=Cd()),Ht&&(Ye.setValue(g,"toneMappingExposure",h.toneMappingExposure),ve.needsLights&&sr(ut,Yt),oe&&w.fog===!0&&xe.refreshFogUniforms(ut,oe),xe.refreshMaterialUniforms(ut,w,Ne,he,F.state.transmissionRenderTarget[s.id]),bn.upload(g,ci(ve),ut,T)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(bn.upload(g,ci(ve),ut,T),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Ye.setValue(g,"center",U.center),Ye.setValue(g,"modelViewMatrix",U.modelViewMatrix),Ye.setValue(g,"normalMatrix",U.normalMatrix),Ye.setValue(g,"modelMatrix",U.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const dt=w.uniformsGroups;for(let Nt=0,Kt=dt.length;Nt<Kt;Nt++){const di=dt[Nt];fe.update(di,Et),fe.bind(di,Et)}}return Et}function sr(s,b){s.ambientLightColor.needsUpdate=b,s.lightProbe.needsUpdate=b,s.directionalLights.needsUpdate=b,s.directionalLightShadows.needsUpdate=b,s.pointLights.needsUpdate=b,s.pointLightShadows.needsUpdate=b,s.spotLights.needsUpdate=b,s.spotLightShadows.needsUpdate=b,s.rectAreaLights.needsUpdate=b,s.hemisphereLights.needsUpdate=b}function lr(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(s,b,N){const w=a.get(s);w.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,w.__autoAllocateDepthBuffer===!1&&(w.__useRenderToTexture=!1),a.get(s.texture).__webglTexture=b,a.get(s.depthTexture).__webglTexture=w.__autoAllocateDepthBuffer?void 0:N,w.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,b){const N=a.get(s);N.__webglFramebuffer=b,N.__useDefaultFramebuffer=b===void 0};const cr=g.createFramebuffer();this.setRenderTarget=function(s,b=0,N=0){z=s,C=b,V=N;let w=null,U=!1,oe=!1;if(s){const se=a.get(s);if(se.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(g.FRAMEBUFFER,se.__webglFramebuffer),B.copy(s.viewport),O.copy(s.scissor),ie=s.scissorTest,ge.viewport(B),ge.scissor(O),ge.setScissorTest(ie),W=-1;return}else if(se.__webglFramebuffer===void 0)T.setupRenderTarget(s);else if(se.__hasExternalTextures)T.rebindTextures(s,a.get(s.texture).__webglTexture,a.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const Pe=s.depthTexture;if(se.__boundDepthTexture!==Pe){if(Pe!==null&&a.has(Pe)&&(s.width!==Pe.image.width||s.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(s)}}const _e=s.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);const Se=a.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Se[b])?w=Se[b][N]:w=Se[b],U=!0):s.samples>0&&T.useMultisampledRTT(s)===!1?w=a.get(s).__webglMultisampledFramebuffer:Array.isArray(Se)?w=Se[N]:w=Se,B.copy(s.viewport),O.copy(s.scissor),ie=s.scissorTest}else B.copy(X).multiplyScalar(Ne).floor(),O.copy(J).multiplyScalar(Ne).floor(),ie=ne;if(N!==0&&(w=cr),ge.bindFramebuffer(g.FRAMEBUFFER,w)&&ge.drawBuffers(s,w),ge.viewport(B),ge.scissor(O),ge.setScissorTest(ie),U){const se=a.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+b,se.__webglTexture,N)}else if(oe){const se=b;for(let _e=0;_e<s.textures.length;_e++){const Se=a.get(s.textures[_e]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+_e,Se.__webglTexture,N,se)}}else if(s!==null&&N!==0){const se=a.get(s.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,se.__webglTexture,N)}W=-1},this.readRenderTargetPixels=function(s,b,N,w,U,oe,ce,se=0){if(!(s&&s.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){ge.bindFramebuffer(g.FRAMEBUFFER,_e);try{const Se=s.textures[se],Pe=Se.format,ye=Se.type;if(s.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+se),!qe.textureFormatReadable(Pe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(ye)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=s.width-w&&N>=0&&N<=s.height-U&&g.readPixels(b,N,w,U,te.convert(Pe),te.convert(ye),oe)}finally{const Se=z!==null?a.get(z).__webglFramebuffer:null;ge.bindFramebuffer(g.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(s,b,N,w,U,oe,ce,se=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=a.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e)if(b>=0&&b<=s.width-w&&N>=0&&N<=s.height-U){ge.bindFramebuffer(g.FRAMEBUFFER,_e);const Se=s.textures[se],Pe=Se.format,ye=Se.type;if(s.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+se),!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ee),g.bufferData(g.PIXEL_PACK_BUFFER,oe.byteLength,g.STREAM_READ),g.readPixels(b,N,w,U,te.convert(Pe),te.convert(ye),0);const ke=z!==null?a.get(z).__webglFramebuffer:null;ge.bindFramebuffer(g.FRAMEBUFFER,ke);const at=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await mr(g,at,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ee),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,oe),g.deleteBuffer(Ee),g.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,b=null,N=0){const w=Math.pow(2,-N),U=Math.floor(s.image.width*w),oe=Math.floor(s.image.height*w),ce=b!==null?b.x:0,se=b!==null?b.y:0;T.setTexture2D(s,0),g.copyTexSubImage2D(g.TEXTURE_2D,N,0,0,ce,se,U,oe),ge.unbindTexture()};const fr=g.createFramebuffer(),dr=g.createFramebuffer();this.copyTextureToTexture=function(s,b,N=null,w=null,U=0,oe=0){let ce,se,_e,Se,Pe,ye,Ee,ke,at;const nt=s.isCompressedTexture?s.mipmaps[oe]:s.image;if(N!==null)ce=N.max.x-N.min.x,se=N.max.y-N.min.y,_e=N.isBox3?N.max.z-N.min.z:1,Se=N.min.x,Pe=N.min.y,ye=N.isBox3?N.min.z:0;else{const ut=Math.pow(2,-U);ce=Math.floor(nt.width*ut),se=Math.floor(nt.height*ut),s.isDataArrayTexture?_e=nt.depth:s.isData3DTexture?_e=Math.floor(nt.depth*ut):_e=1,Se=0,Pe=0,ye=0}w!==null?(Ee=w.x,ke=w.y,at=w.z):(Ee=0,ke=0,at=0);const We=te.convert(b.format),pt=te.convert(b.type);let ve;b.isData3DTexture?(T.setTexture3D(b,0),ve=g.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(T.setTexture2DArray(b,0),ve=g.TEXTURE_2D_ARRAY):(T.setTexture2D(b,0),ve=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,b.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,b.unpackAlignment);const gt=g.getParameter(g.UNPACK_ROW_LENGTH),Oe=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Et=g.getParameter(g.UNPACK_SKIP_PIXELS),xt=g.getParameter(g.UNPACK_SKIP_ROWS),Ht=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,nt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,nt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Se),g.pixelStorei(g.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ye);const Yt=s.isDataArrayTexture||s.isData3DTexture,Ye=b.isDataArrayTexture||b.isData3DTexture;if(s.isDepthTexture){const ut=a.get(s),yt=a.get(b),dt=a.get(ut.__renderTarget),Nt=a.get(yt.__renderTarget);ge.bindFramebuffer(g.READ_FRAMEBUFFER,dt.__webglFramebuffer),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Kt=0;Kt<_e;Kt++)Yt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,a.get(s).__webglTexture,U,ye+Kt),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,a.get(b).__webglTexture,oe,at+Kt)),g.blitFramebuffer(Se,Pe,ce,se,Ee,ke,ce,se,g.DEPTH_BUFFER_BIT,g.NEAREST);ge.bindFramebuffer(g.READ_FRAMEBUFFER,null),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(U!==0||s.isRenderTargetTexture||a.has(s)){const ut=a.get(s),yt=a.get(b);ge.bindFramebuffer(g.READ_FRAMEBUFFER,fr),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,dr);for(let dt=0;dt<_e;dt++)Yt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ut.__webglTexture,U,ye+dt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ut.__webglTexture,U),Ye?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,yt.__webglTexture,oe,at+dt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,yt.__webglTexture,oe),U!==0?g.blitFramebuffer(Se,Pe,ce,se,Ee,ke,ce,se,g.COLOR_BUFFER_BIT,g.NEAREST):Ye?g.copyTexSubImage3D(ve,oe,Ee,ke,at+dt,Se,Pe,ce,se):g.copyTexSubImage2D(ve,oe,Ee,ke,Se,Pe,ce,se);ge.bindFramebuffer(g.READ_FRAMEBUFFER,null),ge.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Ye?s.isDataTexture||s.isData3DTexture?g.texSubImage3D(ve,oe,Ee,ke,at,ce,se,_e,We,pt,nt.data):b.isCompressedArrayTexture?g.compressedTexSubImage3D(ve,oe,Ee,ke,at,ce,se,_e,We,nt.data):g.texSubImage3D(ve,oe,Ee,ke,at,ce,se,_e,We,pt,nt):s.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,oe,Ee,ke,ce,se,We,pt,nt.data):s.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,oe,Ee,ke,nt.width,nt.height,We,nt.data):g.texSubImage2D(g.TEXTURE_2D,oe,Ee,ke,ce,se,We,pt,nt);g.pixelStorei(g.UNPACK_ROW_LENGTH,gt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Oe),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Et),g.pixelStorei(g.UNPACK_SKIP_ROWS,xt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ht),oe===0&&b.generateMipmaps&&g.generateMipmap(ve),ge.unbindTexture()},this.initRenderTarget=function(s){a.get(s).__webglFramebuffer===void 0&&T.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?T.setTextureCube(s,0):s.isData3DTexture?T.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?T.setTexture2DArray(s,0):T.setTexture2D(s,0),ge.unbindTexture()},this.resetState=function(){C=0,V=0,z=null,ge.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(n),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Wd(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),o=new Set(Object.keys(e[0].morphAttributes)),r={},c={},m=e[0].morphTargetsRelative,D=new mn;let x=0;for(let P=0;P<e.length;++P){const R=e[P];let p=0;if(t!==(R.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in R.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(R.attributes[_]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+". Make sure all geometries have the same number of attributes."),null;if(m!==R.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in R.morphAttributes){if(!o.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+".  .morphAttributes must be consistent throughout all geometries."),null;c[_]===void 0&&(c[_]=[]),c[_].push(R.morphAttributes[_])}if(n){let _;if(t)_=R.index.count;else if(R.attributes.position!==void 0)_=R.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+P+". The geometry must have either an index or a position attribute"),null;D.addGroup(x,_,P),x+=_}}if(t){let P=0;const R=[];for(let p=0;p<e.length;++p){const _=e[p].index;for(let E=0;E<_.count;++E)R.push(_.getX(E)+P);P+=e[p].attributes.position.count}D.setIndex(R)}for(const P in r){const R=ba(r[P]);if(!R)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+P+" attribute."),null;D.setAttribute(P,R)}for(const P in c){const R=c[P][0].length;if(R===0)break;D.morphAttributes=D.morphAttributes||{},D.morphAttributes[P]=[];for(let p=0;p<R;++p){const _=[];for(let I=0;I<c[P].length;++I)_.push(c[P][I][p]);const E=ba(_);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+P+" morphAttribute."),null;D.morphAttributes[P].push(E)}}return D}function ba(e){let n,t,i,o=-1,r=0;for(let x=0;x<e.length;++x){const P=e[x];if(n===void 0&&(n=P.array.constructor),n!==P.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=P.itemSize),t!==P.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=P.normalized),i!==P.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=P.gpuType),o!==P.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=P.count*t}const c=new n(r),m=new fn(c,t,i);let D=0;for(let x=0;x<e.length;++x){const P=e[x];if(P.isInterleavedBufferAttribute){const R=D/t;for(let p=0,_=P.count;p<_;p++)for(let E=0;E<t;E++){const I=P.getComponent(p,E);m.setComponent(p+R,E,I)}}else c.set(P.array,D);D+=P.count*t}return o!==void 0&&(m.gpuType=o),m}const Ra={type:"change"},ni={type:"start"},ar={type:"end"},xn=new Io,Ca=new Ua,Pd=Math.cos(70*yo.DEG2RAD),st=new Le,ht=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qn=1e-6;class zd extends wo{constructor(n,t=null){super(n,t),this.state=ze.NONE,this.target=new Le,this.cursor=new Le,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jt.ROTATE,MIDDLE:Jt.DOLLY,RIGHT:Jt.PAN},this.touches={ONE:Qt.ROTATE,TWO:Qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Le,this._lastQuaternion=new ea,this._lastTargetPosition=new Le,this._quat=new ea().setFromUnitVectors(n.up,new Le(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ta,this._sphericalDelta=new ta,this._scale=1,this._panOffset=new Le,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new Le,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ld.bind(this),this._onPointerDown=Dd.bind(this),this._onPointerUp=Ud.bind(this),this._onContextMenu=Bd.bind(this),this._onMouseWheel=yd.bind(this),this._onKeyDown=Nd.bind(this),this._onTouchStart=Fd.bind(this),this._onTouchMove=Od.bind(this),this._onMouseDown=wd.bind(this),this._onMouseMove=Id.bind(this),this._interceptControlDown=Gd.bind(this),this._interceptControlUp=Hd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(n){this._cursorStyle=n,n==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ra),this.update(),this.state=ze.NONE}pan(n,t){this._pan(n,t),this.update()}dollyIn(n){this._dollyIn(n),this.update()}dollyOut(n){this._dollyOut(n),this.update()}rotateLeft(n){this._rotateLeft(n),this.update()}rotateUp(n){this._rotateUp(n),this.update()}update(n=null){const t=this.object.position;st.copy(t).sub(this.target),st.applyQuaternion(this._quat),this._spherical.setFromVector3(st),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=ht:i>Math.PI&&(i-=ht),o<-Math.PI?o+=ht:o>Math.PI&&(o-=ht),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=c!=this._spherical.radius}if(st.setFromSpherical(this._spherical),st.applyQuaternion(this._quatInverse),t.copy(this.target).add(st),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const m=st.length();c=this._clampDistance(m*this._scale);const D=m-c;this.object.position.addScaledVector(this._dollyDirection,D),this.object.updateMatrixWorld(),r=!!D}else if(this.object.isOrthographicCamera){const m=new Le(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const D=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=D!==this.object.zoom;const x=new Le(this._mouse.x,this._mouse.y,0);x.unproject(this.object),this.object.position.sub(x).add(m),this.object.updateMatrixWorld(),c=st.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(xn.origin.copy(this.object.position),xn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xn.direction))<Pd?this.object.lookAt(this.target):(Ca.setFromNormalAndCoplanarPoint(this.object.up,this.target),xn.intersectPlane(Ca,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qn||this._lastTargetPosition.distanceToSquared(this.target)>qn?(this.dispatchEvent(Ra),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?ht/60*this.autoRotateSpeed*n:ht/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){st.setFromMatrixColumn(t,0),st.multiplyScalar(-n),this._panOffset.add(st)}_panUp(n,t){this.screenSpacePanning===!0?st.setFromMatrixColumn(t,1):(st.setFromMatrixColumn(t,0),st.crossVectors(this.object.up,st)),st.multiplyScalar(n),this._panOffset.add(st)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;st.copy(o).sub(this.target);let r=st.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=n-i.left,r=t-i.top,c=i.width,m=i.height;this._mouse.x=o/c*2-1,this._mouse.y=-(r/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-ht*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,o=n.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),o=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(o,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ht*this._rotateDelta.x/t.clientHeight),this._rotateUp(ht*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,o=n.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(n.pageX+t.x)*.5,m=(n.pageY+t.y)*.5;this._updateZoomParameters(c,m)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Dd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ld(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Ud(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ar),this.state=ze.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function wd(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ze.DOLLY;break;case Jt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ze.ROTATE}break;case Jt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(ni)}function Id(e){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function yd(e){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(e.preventDefault(),this.dispatchEvent(ni),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ar))}function Nd(e){this.enabled!==!1&&this._handleKeyDown(e)}function Fd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ze.TOUCH_ROTATE;break;case Qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ze.TOUCH_DOLLY_PAN;break;case Qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(ni)}function Od(e){switch(this._trackPointer(e),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ze.NONE}}function Bd(e){this.enabled!==!1&&e.preventDefault()}function Gd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}export{zd as O,aa as P,kd as W,Wd as m};
