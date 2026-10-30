"use strict";
const ITEMS=[{"k": "comidaquemada", "n": "Comida quemada", "f": "comidaquemada.png", "t": "a", "p": -30}, {"k": "comidarara", "n": "Comida rara", "f": "Comidarara.jpg", "t": "a", "p": -30}, {"k": "heladofresa", "n": "Helado de Fresa", "f": "heladofresa.png", "t": "a", "p": -15}, {"k": "te", "n": "Taza de Té", "f": "te.png", "t": "a", "p": 40}, {"k": "te2", "n": "Té Caliente", "f": "te2.png", "t": "a", "p": 40}, {"k": "sandwichqueso", "n": "Sándwich de Queso", "f": "sandwichqueso.png", "t": "a", "p": 30}, {"k": "sandwichqueso2", "n": "Sándwich de Queso Doble", "f": "sandwichqueso2.png", "t": "a", "p": 30}, {"k": "pizza", "n": "Rebanada de Pizza", "f": "pizza.png", "t": "a", "p": 35}, {"k": "helado", "n": "Helado Simple", "f": "helado.png", "t": "a", "p": 20}, {"k": "heladooreo", "n": "Helado de Oreo", "f": "heladooreo.png", "t": "a", "p": 25}, {"k": "dinero", "n": "Fajo de Billetes", "f": "dinero.png", "t": "m", "p": 30}, {"k": "laptop", "n": "Laptop Gaming", "f": "laptop.png", "t": "m", "p": 25}, {"k": "microfono", "n": "Micrófono de Grabación", "f": "microfono.png", "t": "m", "p": 20}, {"k": "tartaglia", "n": "Tartaglia", "f": "Tartaglia.png", "t": "m", "p": 15}, {"k": "nintendo", "n": "Consola Nintendo", "f": "nintendo.png", "t": "m", "p": 15}, {"k": "flor", "n": "Flor Decorativa", "f": "flor.png", "t": "m", "p": 10}, {"k": "musica", "n": "Disco de Música", "f": "musica.png", "t": "m", "p": 15}, {"k": "pintura", "n": "Cuadro de Pintura", "f": "pintura.png", "t": "m", "p": 10}, {"k": "camaroncontrompeta", "n": "Camarón con Trompeta", "f": "camaroncontrompeta.png", "t": "m", "p": 25}, {"k": "hojaotonal", "n": "Hoja Otoñal", "f": "hojaotonal.png", "t": "m", "p": 15}, {"k": "book", "n": "Libro", "f": "book.png", "t": "m", "p": 15}, {"k": "librodemagia", "n": "Libro de Magia", "f": "librodemagia.png", "t": "m", "p": 25}, {"k": "gatonegro", "n": "Gato Negro", "f": "gatonegro.png", "t": "m", "p": 25}, {"k": "ditto", "n": "Ditto", "f": "ditto.png", "t": "m", "p": 20}, {"k": "gengar", "n": "Gengar", "f": "gengar.png", "t": "m", "p": 20}, {"k": "globos", "n": "Globos", "f": "globos.png", "t": "m", "p": 10}, {"k": "tocadiscos", "n": "Toca discos", "f": "tocadiscos.png", "t": "m", "p": 15}, {"k": "pancake", "n": "Pancakes", "f": "pancake.png", "t": "a", "p": 35}, {"k": "ratonesguisados", "n": "Ratones Guisados", "f": "ratonesguisados.jpg", "t": "a", "p": 10}, {"k": "sazonquedicesopademacaco", "n": "Sopa de Macaco", "f": "sazon-quedice-sopademacaco.jpg", "t": "a", "p": 10}], REAC={"camaroncontrompeta": {"t": "a", "g": "canta"}, "tartaglia": {"t": "a", "g": "felizconcorazones"}, "hojaotonal": {"t": "a", "g": "gira"}, "musica": {"t": "a", "g": "subeybaja"}, "pintura": {"t": "a", "g": "animada"}, "dinero": {"t": "a", "g": "saltaconlamanoarriba"}, "book": {"t": "a", "g": "asiente"}, "librodemagia": {"t": "a", "g": "aplaude"}, "gatonegro": {"t": "a", "g": "congallina"}, "ditto": {"t": "a", "g": "rie"}, "gengar": {"t": "a", "g": "salta"}, "globos": {"t": "n", "g": "sevaconglobo"}, "tocadiscos": {"t": "n", "g": "subeybajadelado"}, "laptop": {"t": "n", "g": "diceok"}, "microfono": {"t": "n", "g": "canta"}, "flor": {"t": "n", "g": "reverencia"}, "ratonesguisados": {"t": "d", "g": "llora"}, "sazonquedicesopademacaco": {"t": "d", "g": "decepcionada"}, "helado": {"t": "n", "g": "skip"}, "heladooreo": {"t": "n", "g": "skip"}, "pizza": {"t": "n", "g": "manzanadorada"}, "pancake": {"t": "n", "g": "manzanadorada"}, "te": {"t": "n", "g": "asiente"}, "te2": {"t": "n", "g": "asiente"}, "nintendo": {"t": "d", "g": "decepcionada"}, "sandwichqueso": {"t": "d", "g": "niegaconlacabeza"}, "sandwichqueso2": {"t": "d", "g": "niegaconlacabeza"}, "heladofresa": {"t": "d", "g": "enojada"}, "comidaquemada": {"t": "d", "g": "llora"}, "comidarara": {"t": "d", "g": "llora"}}, ESC=[{"n": "Principal", "fondo": "Fondo.webp", "musica": "1.mp3", "gif": "pordefecto"}, {"n": "Lluvia", "fondo": "lluvia.webp", "musica": "2.mp3", "gif": "paraguas"}, {"n": "Playa de noche", "fondo": "playanoche.webp", "musica": "3.mp3", "gif": "pordefecto"}, {"n": "Cementerio", "fondo": "cementerio.webp", "musica": "4.mp3", "gif": "pordefecto"}, {"n": "Mundo extraño", "fondo": "fonfopixelextranomundodejack.webp", "musica": "5.mp3", "gif": "pordefecto"}, {"n": "Cueva con agua", "fondo": "cuevaconagua.webp", "musica": "6.mp3", "gif": "pordefecto"}, {"n": "Cascada", "fondo": "WaterfallBackground.webp", "musica": "7.mp3", "gif": "pordefecto"}, {"n": "Castillo nocturno", "fondo": "nocheconcastilloalfondo.webp", "musica": "8.mp3", "gif": "pordefecto"}];
// Textos: los mismos que la versión de escritorio
const TX={
 agua:["Hora de Hidratarte","¡Azurebill te recuerda tomar un sorbo de agua y estirar los brazos!"],
 pausa:["Pausa Activa","¡Llevas tiempo pegado a la pantalla! Levántate, camina un poco y descansa la vista."],
 exceso:["¡ALERTA: 3 HORAS EN PANTALLA!","¡Llevas 3 horas continuas frente a la pantalla! Azurebill se preocupó (y enojó) por ti y perdiste 20 XP. ¡Desconéctate un rato!"],
 noche:["🌙 HORA DE DORMIR","¡Ya es súper tarde! Ve a descansar un rato, Azurebill también necesita dormir y que apagues la pantalla."],
 dormido:{estudiar:"Shh... Azurebill duerme profundamente. No puedes estudiar a esta hora.",alimentar:"Azurebill está en el quinto sueño, no le entra ni un bocado.",gacha:"Ni lo intentes... Azurebill está mimiendo y no va a abrir cajas ahora.",item:"Está tan dormida que ni se entera. Guarda ese ítem para cuando despierte."},
 bio:"Azurebill es un personaje único y amigable que te ayudará a gestionar tu tiempo en pantalla con recordatorios amigables.\n\nRecuerda: ¡tienes que cuidarte a ti y a Azurebill!"
};
const MIN_EXCESO=130; // igual que en escritorio
const CL=n=>"assets/assets-azurebill/azu-"+n+".gif", $=i=>document.getElementById(i);
const norm=s=>String(s).replace(/.*[\/\\]/,"").replace(/^item\./i,"").replace(/\.(jpg|png|gif)$/i,"").toLowerCase().replace(/[\s_\-]/g,"").trim();
const POOL={click:["sorprendida","rie","gira","subeybajadelado","saluda","congallina"],pausa:["corre","camina","caminadelado","subeybaja","subeybajadelado","salta"],
 feliz:["aplaude","skip","canta","salta","animada","felizconcorazones","rie","reverencia"],comer:["manzanadorada","felizconcorazones","asiente"],disgusto:["enojada","decepcionada","llora","niegaconlacabeza"]};
const rnd=a=>a[Math.floor(Math.random()*a.length)], cl=v=>Math.max(0,Math.min(100,v));
let guardada={}; try{guardada=JSON.parse(localStorage.getItem("az_cfg"))||{}}catch(e){}
const C=(window.AZ_CONFIG&&window.AZ_CONFIG.SUPABASE_URL)?window.AZ_CONFIG:guardada, ONLINE=!!(C.SUPABASE_URL&&C.SUPABASE_ANON_KEY);
let S=null,pass="",escena=0,musica=new Audio(),sonido=true,clicks=0,tClick=0,estudio=null,reloj=null;
let tAgua=0,tPausa=0,tExceso=0,tHambre=0,nocheAvisada=false,pausasIgnoradas=0;
$("cloudSetup").hidden=ONLINE;
$("modo").textContent=ONLINE?"Conectado a la nube ☁️":"Modo local (sin nube): los datos se guardan solo en este dispositivo";

// Supabase Auth: sesiones JWT. Las claves privadas nunca se almacenan en este archivo.
let azSession=null,azPendingName='',azAuthMode='login';
const AUTH_LABEL={es:{email:'Correo electrónico',name:'Nombre de usuario',password:'Contraseña',login:'Iniciar sesión',register:'Crear cuenta',reset:'¿Olvidaste tu contraseña?',link:'Vincular mi cuenta antigua',newp:'Crear perfil nuevo',confirm:'Revisa tu correo para confirmar la cuenta. Después inicia sesión.',recover:'Si el correo existe, recibirás instrucciones para recuperar tu contraseña.',need:'Inicia sesión y vincula tu cuenta antigua o crea un perfil.',failed:'No se pudo completar la autenticación',ready:'Sesión iniciada. Elige cómo recuperar tu perfil.'},en:{email:'Email address',name:'Username',password:'Password',login:'Sign in',register:'Create account',reset:'Forgot password?',link:'Link my old account',newp:'Create new profile',confirm:'Check your email to confirm your account, then sign in.',recover:'If this email exists, you will receive password recovery instructions.',need:'Sign in and link your old account or create a profile.',failed:'Authentication failed',ready:'Signed in. Choose how to restore your profile.'},zh:{email:'电子邮箱',name:'用户名',password:'密码',login:'登录',register:'创建账号',reset:'忘记密码？',link:'关联旧账号',newp:'创建新资料',confirm:'请查收确认邮件，确认后再登录。',recover:'如果邮箱存在，你将收到密码重置说明。',need:'请登录并关联旧账号或创建新资料。',failed:'身份验证失败',ready:'登录成功，请选择如何恢复资料。'}};
Object.assign(AUTH_LABEL.es,{recTitle:'Crea tu nueva contraseña',recInfo:'Escribe una contraseña nueva de al menos 8 caracteres.',recNew:'Nueva contraseña',recRepeat:'Repite la contraseña',recSave:'Guardar contraseña',recShort:'La contraseña debe tener al menos 8 caracteres.',recMismatch:'Las contraseñas no coinciden.',recOk:'✅ Contraseña actualizada',recFail:'No se pudo cambiar la contraseña. Pide un enlace nuevo desde "¿Olvidaste tu contraseña?".',linkErr:'El enlace no es válido o ya venció. Pide uno nuevo.',offline:'Sin conexión: tu sesión sigue guardada. Vuelve a intentarlo cuando tengas internet.',privacy:'Política de privacidad'});
Object.assign(AUTH_LABEL.en,{recTitle:'Create your new password',recInfo:'Enter a new password with at least 8 characters.',recNew:'New password',recRepeat:'Repeat password',recSave:'Save password',recShort:'The password must have at least 8 characters.',recMismatch:'The passwords do not match.',recOk:'✅ Password updated',recFail:'Could not change the password. Request a new link with "Forgot password?".',linkErr:'The link is invalid or has expired. Request a new one.',offline:'No connection: your session is still saved. Try again when you are online.',privacy:'Privacy policy'});
Object.assign(AUTH_LABEL.zh,{recTitle:'创建新密码',recInfo:'请输入至少 8 个字符的新密码。',recNew:'新密码',recRepeat:'重复密码',recSave:'保存密码',recShort:'密码至少需要 8 个字符。',recMismatch:'两次输入的密码不一致。',recOk:'✅ 密码已更新',recFail:'无法修改密码。请通过“忘记密码？”重新获取链接。',linkErr:'链接无效或已过期，请重新获取。',offline:'无网络：你的登录状态仍已保存。联网后请重试。',privacy:'隐私政策'});
Object.assign(AUTH_LABEL.es,{eCred:'Correo o contraseña incorrectos.',eConf:'Aún no confirmaste tu correo. Revisa tu bandeja de entrada.',eExists:'Ese correo ya está registrado. Inicia sesión.',eWeak:'La contraseña es demasiado débil o corta (mínimo 8 caracteres).',eRate:'Demasiados intentos. Espera un momento e inténtalo otra vez.',eSame:'La contraseña nueva debe ser distinta de la anterior.',eNet:'No hay conexión con el servidor. Revisa tu internet.',eProf:'Debes iniciar sesión primero.',eName:'Ese nombre de usuario no existe o la contraseña antigua no coincide.'});
Object.assign(AUTH_LABEL.en,{eCred:'Incorrect email or password.',eConf:'You have not confirmed your email yet. Check your inbox.',eExists:'That email is already registered. Please sign in.',eWeak:'The password is too weak or too short (minimum 8 characters).',eRate:'Too many attempts. Wait a moment and try again.',eSame:'The new password must be different from the old one.',eNet:'Cannot reach the server. Check your internet connection.',eProf:'Please sign in first.',eName:'That username does not exist or the old password does not match.'});
Object.assign(AUTH_LABEL.zh,{eCred:'邮箱或密码错误。',eConf:'你还没有确认邮箱，请查看收件箱。',eExists:'该邮箱已注册，请直接登录。',eWeak:'密码太弱或太短（至少 8 个字符）。',eRate:'尝试次数过多，请稍等片刻再试。',eSame:'新密码不能与旧密码相同。',eNet:'无法连接服务器，请检查网络。',eProf:'请先登录。',eName:'该用户名不存在，或旧密码不正确。'});
Object.assign(AUTH_LABEL.es,{toReg:'¿Primera vez? Crea tu cuenta',toLogin:'¿Ya tienes cuenta? Inicia sesión',pwHint:'Mínimo 8 caracteres.',haveOld:'¿Jugabas antes? Vincula tu cuenta antigua',oldInfo:'Crea tu cuenta con correo y contraseña; después podrás vincular tu cuenta antigua.',resend:'Reenviar correo de confirmación',resent:'Correo reenviado. Revisa también la carpeta de spam.',confirm2:'¡Casi listo! Te enviamos un correo: ábrelo, confirma tu cuenta y vuelve aquí para entrar. (Mira también en spam).',fill:'Escribe tu correo y contraseña.',eMail:'Escribe un correo electrónico válido.',showPw:'Mostrar u ocultar contraseña'});
Object.assign(AUTH_LABEL.en,{toReg:'First time? Create your account',toLogin:'Already have an account? Sign in',pwHint:'At least 8 characters.',haveOld:'Played before? Link your old account',oldInfo:'Create your account with email and password; then you can link your old account.',resend:'Resend confirmation email',resent:'Email sent again. Also check your spam folder.',confirm2:'Almost done! We sent you an email: open it, confirm your account and come back here to sign in. (Check spam too).',fill:'Enter your email and password.',eMail:'Enter a valid email address.',showPw:'Show or hide password'});
Object.assign(AUTH_LABEL.zh,{toReg:'第一次来？创建账号',toLogin:'已有账号？去登录',pwHint:'至少 8 个字符。',haveOld:'以前玩过？关联旧账号',oldInfo:'先用邮箱和密码创建账号，之后即可关联旧账号。',resend:'重新发送确认邮件',resent:'邮件已重新发送，也请查看垃圾邮件箱。',confirm2:'马上就好！我们已发送邮件：打开邮件确认账号后，回到这里登录。（也请查看垃圾邮件箱）',fill:'请输入邮箱和密码。',eMail:'请输入有效的邮箱地址。',showPw:'显示或隐藏密码'});
Object.assign(AUTH_LABEL.es,{nameReq:'Elige un nombre de usuario (mínimo 2 letras).',eTaken:'Ese nombre de usuario ya está en uso. Elige otro.'});
Object.assign(AUTH_LABEL.en,{nameReq:'Choose a username (at least 2 characters).',eTaken:'That username is already taken. Please choose another.'});
Object.assign(AUTH_LABEL.zh,{nameReq:'请选择用户名（至少 2 个字符）。',eTaken:'该用户名已被使用，请换一个。'});
function authErr(e){const m=String((e&&e.message)||e||'');const map=[[/invalid login credentials|invalid credentials/i,'eCred'],[/email not confirmed/i,'eConf'],[/already (been )?registered|already exists/i,'eExists'],[/password.*(least|short|weak)|weak password/i,'eWeak'],[/rate limit|too many|security purposes|after \d+ seconds/i,'eRate'],[/different from the old|same password/i,'eSame'],[/duplicate key|unique constraint|ya existe|already taken/i,'eTaken'],[/failed to fetch|networkerror|load failed/i,'eNet'],[/unable to validate email|invalid format|valid email/i,'eMail'],[/otp.*expired|token.*(expired|invalid)|expired|invalid.*(link|token)/i,'linkErr'],[/sesi[oó]n requerida|perfil no vinculado|sesi[oó]n o perfil/i,'eProf'],[/no existe la cuenta|contrase[nñ]a/i,'eName']];for(const [r,k] of map)if(r.test(m))return authText(k);return m;}
function authText(k){return (AUTH_LABEL[idiomaActual]||AUTH_LABEL.es)[k]||k;}
function authWantLink(){return localStorage.getItem('az_want_link')==='1';}
function setAuthMode(m){azAuthMode=m;if(!ONLINE)return;const r=m==='registro',wl=authWantLink();
 $('bEntrar').textContent=authText(r?'register':'login');$('bReg').textContent=authText(r?'toLogin':'toReg');
 $('authName').hidden=!(r&&!wl)&&$('bNew').hidden;$('bReset').hidden=r;$('pwHint').hidden=!r;$('bOld').hidden=!r;
 $('bOld').textContent=(wl?'✔ ':'')+authText('haveOld');$('p').autocomplete=r?'new-password':'current-password';}
function mostrarVincular(name){$('authStatus').textContent=authText('need');$('bLink').hidden=false;$('bNew').hidden=false;$('authName').hidden=false;if(name)$('authName').value=name;}
function authFail(e){const raw=String((e&&e.message)||e||''),f=authErr(e);if(/not confirmed/i.test(raw))$('bResend').hidden=false;return f===raw?authText('failed')+': '+raw:f;}
async function autoPerfil(){if(authWantLink())return false;let name='';try{const u=await authRequest('/user',null,'GET',await authToken());name=(u&&u.user_metadata&&u.user_metadata.azurebill_name)||'';}catch(e){return false;}
 if(!name)return false;try{await rpc('az_auth_crear_perfil',{p_nombre:name});return await authProfile();}catch(e){console.warn('Perfil automático:',e);mostrarVincular(name);$('authStatus').textContent=authErr(e);return true;}}
function authUi(){const pl=$('lnkPriv');if(pl)pl.textContent=authText('privacy'); if(!ONLINE)return; $('recTitulo').textContent=authText('recTitle');$('recInfo').textContent=authText('recInfo');$('np1').placeholder=authText('recNew');$('np2').placeholder=authText('recRepeat');$('bNp').textContent=authText('recSave'); $('u').placeholder=authText('email');$('authName').placeholder=authText('name');$('p').placeholder=authText('password');$('bReset').textContent=authText('reset');$('pwHint').textContent=authText('pwHint');$('bResend').textContent=authText('resend');$('bEye').setAttribute('aria-label',authText('showPw'));['bReg','bReset','bOld','bResend'].forEach(id=>$(id).classList.add('lk'));setAuthMode(azAuthMode);$('bLink').textContent=authText('link');$('bNew').textContent=authText('newp');}
function authBase(){return new URL(C.SUPABASE_URL).origin+'/auth/v1';}
async function authRequest(path,body,method='POST',token){const r=await fetch(authBase()+path,{method,headers:{apikey:C.SUPABASE_ANON_KEY,'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},...(body?{body:JSON.stringify(body)}:{})});let d=await r.json().catch(()=>({}));if(!r.ok)throw Error(d.msg||d.error_description||d.message||('HTTP '+r.status));return d;}
function saveSession(d){if(d?.access_token){azSession={access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Date.now()+(d.expires_in||3600)*1000};localStorage.setItem('az_auth_session',JSON.stringify(azSession));sessionStorage.removeItem('az_auth_session');}}
function borrarSesion(){azSession=null;localStorage.removeItem('az_auth_session');sessionStorage.removeItem('az_auth_session');}
async function authToken(){if(!azSession)return null;if(Date.now()>azSession.expires_at-60000){const d=await authRequest('/token?grant_type=refresh_token',{refresh_token:azSession.refresh_token});saveSession(d);}return azSession.access_token;}
async function authProfile(){const d=await rpc('az_auth_mi_perfil',{});if(d?.usuario){localStorage.removeItem('az_want_link');S=d.usuario;S.inv=(d.inventario||[]).map(norm);pass='';cargarExtras(S.nombre);iniciar();await cargarExtrasNube();await sincronizarZona();evaluarInicio();if(ONLINE)eventoServidor("revisar");return true;}return false;}
async function authEntry(reg){if(!ONLINE)return entrar(reg);const email=$('u').value.trim(),password=$('p').value,name=$('authName').value.trim(),wl=authWantLink();
 if(!email||!password){$('authStatus').textContent=authText('fill');return;}
 $('bResend').hidden=true;$('bEntrar').disabled=true;
 try{
  if(reg){
   if(!wl&&name.length<2){$('authName').hidden=false;$('authName').focus();$('authStatus').textContent=authText('nameReq');return;}
   if(password.length<8){$('authStatus').textContent=authText('recShort');return;}
   const d=await authRequest('/signup',{email,password,data:wl?{}:{azurebill_name:name}});
   if(d&&d.access_token){saveSession(d);$('authStatus').textContent='';if(!(await authProfile()||await autoPerfil()))mostrarVincular(name);return;}
   // Supabase pide confirmar el correo: pasamos a "entrar" con el correo ya escrito.
   setAuthMode('login');$('p').value='';$('authStatus').textContent=authText('confirm2');$('bResend').hidden=false;return;
  }
  const d=await authRequest('/token?grant_type=password',{email,password});saveSession(d);
  if(await authProfile()||await autoPerfil())return;mostrarVincular();
 }catch(e){console.error('Auth:',e);$('authStatus').textContent=authFail(e);}
 finally{$('bEntrar').disabled=false;}}
async function authResend(){const email=$('u').value.trim();if(!email){$('authStatus').textContent=authText('email');return;}try{await authRequest('/resend',{type:'signup',email});$('authStatus').textContent=authText('resent');}catch(e){$('authStatus').textContent=authFail(e);}}
// Lee el enlace que llega por correo (#access_token=...&type=recovery) y lo borra de la barra de direcciones.
function procesarEnlaceAuth(){ const h=location.hash.replace(/^#/,''); if(!h||!/access_token|error_description/.test(h))return null;
 // Si el correo de recuperación aterriza aquí, pasamos a la página dedicada conservando el enlace.
 if(/type=recovery|error_code=otp_expired|error_description/.test(h)&&/recovery|otp_expired|expired/.test(h)){ location.replace('restablecer.html#'+h); return 'recovery'; }
 const p=new URLSearchParams(h); history.replaceState(null,'',location.pathname+location.search);
 if(p.get('error_description')||!p.get('access_token')){ $('authStatus').textContent=authText('linkErr'); return 'error'; }
 saveSession({access_token:p.get('access_token'),refresh_token:p.get('refresh_token'),expires_in:+p.get('expires_in')||3600});
 if(p.get('type')==='recovery'){ $('login').classList.remove('on'); $('recup').classList.add('on'); return 'recovery'; }
 return 'sesion'; }
async function guardarNuevaClave(){ const a=$('np1').value,b=$('np2').value,st=$('recSta'); st.textContent='';
 if(a.length<8){st.textContent=authText('recShort');return;} if(a!==b){st.textContent=authText('recMismatch');return;}
 try{ await authRequest('/user',{password:a},'PUT',await authToken()); $('np1').value='';$('np2').value=''; $('recup').classList.remove('on'); aviso(authText('recOk'));
  if(!(await authProfile())){ $('login').classList.add('on'); $('authStatus').textContent=authText('need'); $('bLink').hidden=false; $('bNew').hidden=false; }
 }catch(e){ console.error('Nueva contraseña:',e); st.textContent=authText('recFail'); } }
async function authLink(){const old=prompt(({es:'Nombre de usuario antiguo',en:'Old username',zh:'旧用户名'}[idiomaActual]));if(!old)return;const oldPass=prompt(({es:'Contraseña antigua',en:'Old password',zh:'旧密码'}[idiomaActual]));if(!oldPass)return;try{await rpc('az_auth_vincular_antigua',{p_nombre:old,p_contrasena_anterior:oldPass});await authProfile();}catch(e){$('authStatus').textContent=authErr(e);}}
async function authNew(){const name=$('authName').value.trim();if(!name){$('authStatus').textContent=authText('name');return;}try{await rpc('az_auth_crear_perfil',{p_nombre:name});await authProfile();}catch(e){$('authStatus').textContent=authErr(e);}}
async function authReset(){const email=$('u').value.trim();if(!email){$('authStatus').textContent=authText('email');return;}try{await authRequest('/recover?redirect_to='+encodeURIComponent(((C.WEB_URL||location.origin).replace(/\/$/,''))+'/restablecer.html'),{email});$('authStatus').textContent=authText('recover');}catch(e){$('authStatus').textContent=authFail(e);}}
async function rpc(fn,args){
 if(!ONLINE) return local(fn,args);
 // La nube usa exclusivamente Supabase Auth. Nunca enviar contraseñas antiguas a RPC.
 if(fn.startsWith('app_')) throw new Error('La API antigua está deshabilitada en modo nube');
 if(!azSession) throw new Error('Debes iniciar sesión con tu correo electrónico');
 const token=await authToken();
 if(!token) throw new Error('La sesión ha caducado');
 const r=await fetch(new URL(C.SUPABASE_URL).origin+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:C.SUPABASE_ANON_KEY,"Content-Type":"application/json",Authorization:"Bearer "+(token||C.SUPABASE_ANON_KEY)},body:JSON.stringify(args),keepalive:true});
 if(!r.ok){const err=await r.json().catch(()=>({}));throw new Error(err.message||"HTTP "+r.status);} const txt=await r.text();return txt?JSON.parse(txt):null;
}
function local(fn,a){ // respaldo sin nube, solo para probar
 const k="az_"+String(a.p_nombre||"").toLowerCase(); let d=null; try{d=JSON.parse(localStorage.getItem(k))}catch(e){}
 const nuevo=n=>({pass:"",datos:{usuario:{nombre:n,nivel:1,puntos_experiencia:0,monedas_gacha:100,vasos_agua_tomados:0,pausas_realizadas:0,minutos_pomodoro:25,minutos_agua:20,minutos_pausa:40,hora_dormir:22,datos_companion:"50:100:80"},inventario:[]}});
 if(fn==="app_registrar"){ if(d) return null; d=nuevo(a.p_nombre.trim()); d.pass=a.p_contrasena; localStorage.setItem(k,JSON.stringify(d)); return d.datos;}
 if(!d||d.pass!==a.p_contrasena) return fn==="app_guardar"?false:null;
 if(fn==="app_guardar"){ Object.assign(d.datos.usuario,a.p_datos); d.datos.inventario=a.p_datos.inventario; localStorage.setItem(k,JSON.stringify(d)); return true;} return d.datos;
}
async function entrar(reg){
 if(ONLINE) return authEntry(reg);
 const n=$("u").value.trim(),p=$("p").value; if(!n||!p) return aviso("Escribe usuario y contraseña");
 try{ const d=await rpc(reg?"app_registrar":"app_login",{p_nombre:n,p_contrasena:p});
  if(!d) return aviso(reg?"Ese usuario ya existe (o datos muy cortos)":"Usuario o contraseña incorrectos");
  S=d.usuario; cargarExtras(n); S.inv=(d.inventario||[]).map(norm); pass=p; iniciar(); if(ONLINE){ await cargarExtrasNube(); evaluarLogro("nivel_2",S.nivel>=2?1:0); evaluarLogro("nivel_5",S.nivel>=5?1:0); evaluarLogro("nivel_10",S.nivel>=10?1:0); evaluarLogro("hidrata_5",S.vasos_agua_tomados||0); evaluarLogro("hidrata_15",S.vasos_agua_tomados||0); evaluarLogro("cuerpo_sano",S.pausas_realizadas||0); await rpc('az_auth_idioma_guardar',{p_idioma:idiomaActual}).catch(e=>console.error("Idioma:",e)); }
 }catch(e){ aviso("No se pudo conectar. Revisa tu internet 🌐"); }
}
let tG=null,pend=false;
async function enviar(){ pend=false; try{const gr=await rpc(ONLINE?"az_auth_guardar":"app_guardar",{...(!ONLINE?{p_nombre:S.nombre,p_contrasena:pass}:{}),p_datos:{...(!ONLINE?{nivel:S.nivel,puntos_experiencia:S.puntos_experiencia,monedas_gacha:S.monedas_gacha,inventario:S.inv,vasos_agua_tomados:S.vasos_agua_tomados,pausas_realizadas:S.pausas_realizadas}:{}),minutos_pomodoro:S.minutos_pomodoro,minutos_agua:S.minutos_agua,minutos_pausa:S.minutos_pausa,hora_dormir:S.hora_dormir,datos_companion:S.h+":"+S.e+":"+S.f}}); if(ONLINE&&gr&&gr.logros){ aplicarLogrosServidor(gr.logros); if(gr.monedas!==undefined){S.monedas_gacha=gr.monedas;pintar();} } }catch(e){pend=true;aviso("Sin conexión: se reintentará al siguiente cambio")} }
function guardar(){ pend=true; clearTimeout(tG); tG=setTimeout(enviar,800); }
document.addEventListener("visibilitychange",()=>{ if(!S){ if(!document.hidden&&ONLINE&&azSession)authProfile().catch(()=>{}); return; } if(document.hidden){ if(pend){clearTimeout(tG);enviar();} } else{ tick(); sincronizarZona(); evaluarInicio(); if(LN) recoger().then(programar); } });
addEventListener("pagehide",()=>{ if(pend&&S){clearTimeout(tG);enviar();} });
function iniciar(){
 const [h,e,f]=String(S.datos_companion||"50:100:80").split(":").map(Number); S.h=cl(h||0);S.e=cl(e||0);S.f=cl(f||0);
 ["minutos_pomodoro","minutos_agua","minutos_pausa","hora_dormir"].forEach((k,i)=>{S[k]=Number.isFinite(+S[k])&&S[k]!==null?+S[k]:[25,20,40,22][i]});
 $("login").classList.remove("on");$("juego").classList.add("on");setEscena(0,true);gif("saluda",true,DUR.saludo);pintar();aviso(({es:"¡Hola, ",en:"Hello, ",zh:"你好，"}[idiomaActual]||"¡Hola, ")+S.nombre+"! 💜");
 tAgua=tPausa=tExceso=tHambre=Date.now(); nocheAvisada=false; clearInterval(reloj); reloj=setInterval(tick,5000); tick(); enlazarNativo(); programar();
}
// XP necesaria para pasar de nivel (igual que en el servidor): 150 + 50 por cada nivel superado.
const xpNecesaria=n=>150+50*(Math.max(1,n)-1);
function pintar(){ $("nv").textContent="Nv "+S.nivel; $("xpbar").firstChild.style.width=Math.min(100,S.puntos_experiencia/xpNecesaria(S.nivel)*100)+"%"; $("xpbar").title=S.puntos_experiencia+"/"+xpNecesaria(S.nivel)+" XP"; $("mo").textContent="🪙 "+S.monedas_gacha;
 $("sh").style.width=S.h+"%";$("sf").style.width=S.f+"%";$("se").style.width=S.e+"%"; document.body.classList.toggle("noche",duerme()); }
// Mismo criterio que escritorio: duerme desde la hora de cierre hasta las 5:00
function duerme(){ const h=new Date().getHours(), d=S?S.hora_dormir:22; return d>5?(h>=d||h<5):(h>=d&&h<5); }
// El GIF de cada escenario es el estado base; las reacciones no lo sustituyen permanentemente.
let gifTimeout=null, gifVersion=0;
// Animación de reposo: minando si hay una sesión de estudio en curso; si no, la del escenario.
function gifBase(){ return estudio?"minando":ESC[escena].gif; }
// Duración (ms) de las reacciones. Lluvia conserva sus tiempos originales; el resto usa los nuevos.
const DUR={normal:10000, especial:15000, lluviaNormal:3500, lluviaEspecial:8000, saludo:15000};
function gif(n,temporal=true,ms){
 if(gifTimeout){clearTimeout(gifTimeout);gifTimeout=null;}
 const version=++gifVersion;
 if(duerme()&&n!=="duerme")n="duerme";
 $("azu").src=CL(n);
 // Las reacciones puntuales regresan al GIF base del escenario (el de pie, salvo en Lluvia).
 if(temporal && n!=="duerme" && n!=="minando"){
  const lluvia=escena===1, dur=ms||(lluvia?DUR.lluviaNormal:DUR.normal);
  gifTimeout=setTimeout(()=>{ if(version===gifVersion) gif(gifBase(),false); },dur);
 }
}
// Reacciones "especiales" (objetos de la caja gacha, regalos y emociones del diario): duran más.
function gifEspecial(n){ gif(n,true,escena===1?DUR.lluviaEspecial:DUR.especial); }
function aviso(t){ const d=document.createElement("div"); d.className="t"; d.textContent=traducirTexto(t); const q=()=>d.remove(); d.onclick=q; $("toasts").prepend(d); setTimeout(q,3500); while($("toasts").children.length>3) $("toasts").lastChild.remove(); }
// Alerta de salud: tarjeta arriba (no tapa los botones); se cierra con un toque o sola a los 15 s

const ALARMAS_IDIOMAS={
 "Hora de Hidratarte":["Time to Hydrate","该喝水啦"],
 "Pausa Activa":["Active Break","活动休息时间"],
 "¡ALERTA: 3 HORAS EN PANTALLA!":["ALERT: 3 HOURS ON SCREEN!","警告：已连续使用屏幕3小时！"],
 "🌙 HORA DE DORMIR":["🌙 BEDTIME","🌙 该睡觉了"],
 "¡Ya es súper tarde! Ve a descansar un rato, Azurebill también necesita dormir y que apagues la pantalla.":["It's super late! Go get some rest, Azurebill needs to sleep too, and you need to turn off the screen.","已经很晚啦！快去休息吧，Azurebill 也需要睡觉，你也该关掉屏幕了。"],
 "¡Llevas 3 horas continuas frente a la pantalla! Azurebill se preocupó (y enojó) por ti y perdiste 20 XP. ¡Desconéctate un rato!":["You've been in front of the screen for 3 hours straight! Azurebill got worried (and angry) about you and you lost 20 XP. Disconnect for a while!","你已经连续盯着屏幕 3 小时了！Azurebill 又担心又生气，你扣除了 20 XP。快离开屏幕休息一下吧！"],
 "¡Azurebill te recuerda tomar un sorbo de agua y estirar los brazos!":["Azurebill reminds you to drink some water and stretch your arms!","Azurebill 提醒你喝点水，伸展一下双臂！"],
 "¡Llevas tiempo pegado a la pantalla! Levántate, camina un poco y descansa la vista.":["You've been looking at the screen for a while! Stand up, walk around and rest your eyes.","你已经盯着屏幕一段时间了！起来走走，让眼睛休息一下。"]
};
function traducirAlarmaCompleta(v){
 if(idiomaActual==='es')return String(v);
 const i=idiomaActual==='en'?0:1;
 let t=String(v);
 for(const [k,a] of Object.entries(ALARMAS_IDIOMAS).sort((a,b)=>b[0].length-a[0].length))t=t.split(k).join(a[i]);
 return traducirTexto(t);
}
function nombreObjeto(it){return traducir('item.'+it.k,it.n);}
const GACHA_TEXTOS={es:['Cuesta 50 🪙. Tienes ','Abrir caja','Te faltan monedas 🪙'],en:['Costs 50 🪙. You have ','Open box','Not enough coins 🪙'],zh:['花费 50 🪙。你有 ','打开盒子','金币不足 🪙']};
function alerta(titulo,msg,sonar,alCerrar){ const d=document.createElement("div"); d.className="t al"; d.innerHTML="<b></b><span></span><small>"+traducirTexto("Toca para cerrar")+"</small>"; d.firstChild.textContent=traducirAlarmaCompleta(titulo); d.children[1].textContent=traducirAlarmaCompleta(msg);
 let alarmAudio=null;
 let cerrada=false;
 const q=porToque=>{if(alarmAudio){alarmAudio.pause();alarmAudio.currentTime=0;}d.remove();if(!cerrada){cerrada=true;if(alCerrar)alCerrar(porToque===true);}};
 d.onclick=()=>q(true); $("toasts").prepend(d); setTimeout(()=>q(false),15000);
 if(sonar){ try{alarmAudio=new Audio("assets/alarma.mp3"); alarmAudio.volume=.6; alarmAudio.play().catch(()=>{});}catch(e){} if(navigator.vibrate) navigator.vibrate([250,120,250]);
  if(document.hidden&&"Notification" in window&&Notification.permission==="granted"){ try{new Notification(traducirAlarmaCompleta(titulo),{body:traducirAlarmaCompleta(msg),icon:"assets/icono.png"})}catch(e){} } } }
function bloqueo(clave){ if(!duerme()) return false; gif("duerme"); alerta(TX.noche[0],TX.dormido[clave]); return true; }
function xp(n){ S.puntos_experiencia+=n; while(S.puntos_experiencia>=xpNecesaria(S.nivel)){S.puntos_experiencia-=xpNecesaria(S.nivel);S.nivel++; evaluarLogro("nivel_2",S.nivel>=2?1:0); evaluarLogro("nivel_5",S.nivel>=5?1:0); evaluarLogro("nivel_10",S.nivel>=10?1:0);gif("saltaconlamanoarriba");aviso("🎉 ¡Subiste al nivel "+S.nivel+"!");} }
function penalizar(n){ S.puntos_experiencia-=n; if(S.puntos_experiencia<0){ if(S.nivel>1){S.nivel--;S.puntos_experiencia=xpNecesaria(S.nivel)+S.puntos_experiencia;} else S.puntos_experiencia=0; } }
// ---- Reloj de salud: igual que en escritorio (revisa cada 5 s) ----
function tick(){ if(!S) return; const ahora=Date.now(); pintar();
 if(duerme()) gif("duerme");
 if(ahora-tHambre>=5*60000){ tHambre=ahora; S.h=Math.max(0,S.h-5); if(S.h===0||S.e===0)evaluarLogro("tacano_extremo",1); pintar(); guardar(); }
 if(!LN&&ahora-tAgua>=S.minutos_agua*60000){ tAgua=ahora; if(!duerme()) gif("diceok"); alerta(TX.agua[0],TX.agua[1],true); if(ONLINE)eventoServidor("agua"); else{ S.vasos_agua_tomados++; evaluarLogro("hidrata_5",S.vasos_agua_tomados); evaluarLogro("hidrata_15",S.vasos_agua_tomados); xp(5); } pintar(); guardar(); }
 if(!LN&&ahora-tPausa>=S.minutos_pausa*60000){ tPausa=ahora; if(!duerme()) gif(rnd(POOL.pausa)); alerta(TX.pausa[0],TX.pausa[1],true,alarmaPausaCerrada); if(ONLINE)eventoServidor("pausa"); else{ S.pausas_realizadas++; evaluarLogro("cuerpo_sano",S.pausas_realizadas); xp(15); } pintar(); guardar(); }
 if(ahora-tExceso>=MIN_EXCESO*60000){ tExceso=ahora; if(!duerme()) gif(rnd(POOL.disgusto)); if(ONLINE)eventoServidor("exceso"); else penalizar(20); alerta(TX.exceso[0],TX.exceso[1],true); pintar(); guardar(); }
 if(duerme()&&!nocheAvisada){ nocheAvisada=true; alerta(TX.noche[0],TX.noche[1],true); setTimeout(resumen,5000); }
 if(!duerme()) nocheAvisada=false; }
function resumen(){ if(S) alerta("Resumen Nocturno","Resumen de lo que lograste hoy:\n"+S.vasos_agua_tomados+" vasos de agua tomados\n"+S.pausas_realizadas+" pausas activas realizadas"); }
function setEscena(i,sinMusica){ escena=i; document.body.classList.toggle("lluvia",i===1); const s=ESC[i]; $("escena").style.backgroundImage="url('assets/assets-fondos/"+s.fondo+"')"; gif(estudio?"minando":s.gif,false);
 musica.pause(); musica=new Audio("assets/assets-media/"+s.musica); musica.loop=true; if(sonido&&!sinMusica) musica.play().catch(()=>{}); }
// ---- paneles ----
function abrir(html){ $("hc").innerHTML=html; traducirArbol($("hc")); $("hoja").classList.add("on"); $("vel").style.display="block"; }
function cerrar(){ $("hoja").classList.remove("on"); $("vel").style.display="none"; }
$("cerrar").onclick=$("vel").onclick=cerrar;
let y0=null; $("hoja").addEventListener("touchstart",e=>{y0=$("hoja").scrollTop===0?e.touches[0].clientY:null},{passive:true});
$("hoja").addEventListener("touchend",e=>{if(y0!==null&&e.changedTouches[0].clientY-y0>90)cerrar();y0=null},{passive:true});
function tarjeta(it,n){return '<div class="it" data-k="'+it.k+'">'+(n>1?'<em>'+n+'</em>':'')+'<img src="assets/assets-Items/'+it.f+'" alt=""><div>'+traducir('item.'+it.k,it.n)+'</div></div>';}
function mochila(){ const c={}; S.inv.forEach(k=>c[k]=(c[k]||0)+1); const ks=Object.keys(c);
 abrir('<h3>🎒 Mochila</h3>'+(ks.length?'<div class="rej">'+ks.map(k=>{const it=ITEMS.find(x=>x.k===k);return it?tarjeta(it,c[k]):""}).join("")+'</div><p class="mini">Toca un objeto para dárselo a Azurebill</p>':'<p>Está vacía. ¡Prueba la caja gacha! 📦</p>'));
 document.querySelectorAll("#hc .it").forEach(el=>el.onclick=()=>{ if(bloqueo("item")) return; usar(el.dataset.k).finally(()=>{ if($("hoja").classList.contains("on")) mochila(); }); }); }
let usandoItem=false;
async function usar(k){ if(usandoItem||S.inv.indexOf(k)<0)return; usandoItem=true;
 try{
  let logrosItem=[];
  if(ONLINE){ // el servidor descuenta el objeto de la mochila (así no reaparece al recargar) y otorga los logros
   let sv; try{ sv=await rpc("az_auth_item_usar",{p_item:k}); }catch(e){ console.error("Usar objeto:",e); return aviso("⚠️ No se pudo usar el objeto. Revisa tu conexión"); }
   if(!sv||!sv.ok){ const j=S.inv.indexOf(k); if(j>=0)S.inv.splice(j,1); pintar(); return aviso("⚠️ Ese objeto ya no está en tu mochila"); }
   logrosItem=sv.logros||[]; if(sv.monedas!==undefined)S.monedas_gacha=sv.monedas;
  }
  const i=S.inv.indexOf(k); if(i<0)return; S.inv.splice(i,1);
  const it=ITEMS.find(x=>x.k===k), r=REAC[k]||{t:"n",g:rnd(POOL.feliz)}, hambreAntes=S.h; S.h=cl(S.h+25);
  if(it&&it.t==="a")registrarComida(hambreAntes);
  if(k==="comidaquemada"||k==="comidarara"||k==="sazonquedicesopademacaco"||k==="ratonesguisados")evaluarLogro("intoxicada",1);
  if(k==="heladofresa")evaluarLogro("regalo_no_deseado",1);
  if(r.t==="a") S.f=cl(S.f+15); if(r.t==="d") S.f=cl(S.f-10); gifEspecial(r.g);
  aviso(r.t==="a"?"💜 "+traducirTexto("¡Le encanta: ")+traducir("item."+it.k,it.n)+"!":r.t==="d"?"😒 "+traducirTexto("No le gustó: ")+traducir("item."+it.k,it.n):"✨ "+traducir("item."+it.k,it.n));
  if(ONLINE)aplicarLogrosServidor(logrosItem);
  pintar(); guardar();
 } finally { usandoItem=false; } }
function alimentar(){ if(bloqueo("alimentar")) return; const hambreAntes=S.h; S.h=cl(S.h+20); registrarComida(hambreAntes); gif(rnd(POOL.comer)); pintar(); guardar(); }
function gacha(){ if(bloqueo("gacha")) return;
 abrir('<h3>📦 '+traducirTexto('Caja gacha')+'</h3><p>'+GACHA_TEXTOS[idiomaActual][0]+'<span id="gm">'+S.monedas_gacha+'</span>.</p><button class="gr" id="gt">'+GACHA_TEXTOS[idiomaActual][1]+'</button><div id="gr" style="text-align:center;margin-top:12px"></div>');
 $("gt").onclick=async()=>{ if(bloqueo("gacha")) return cerrar();
  const boton=$("gt"); if(boton.disabled)return;
  if(!ONLINE&&S.monedas_gacha<50){gif("confundida");return aviso(GACHA_TEXTOS[idiomaActual][2]);}
  boton.disabled=true;
  try{
   let it,logrosGacha=[];
   if(ONLINE){
    // Sincronizar cambios anteriores antes de la compra para no pisar el saldo.
    if(pend){clearTimeout(tG);await enviar();}
    const r=await rpc('az_auth_gacha_comprar',{});
    if(!r?.ok){if(r?.monedas!==undefined)S.monedas_gacha=r.monedas; pintar();aviso(GACHA_TEXTOS[idiomaActual][2]);return;}
    it=ITEMS.find(x=>x.k===r.item);
    if(!it)throw Error('Objeto no reconocido: '+r.item);
    S.monedas_gacha=r.monedas; S.inv.push(it.k); logrosGacha=r.logros||[];
   }else{
    S.monedas_gacha-=50;it=rnd(ITEMS);S.inv.push(it.k);guardar();
   }
   gifEspecial("sorprendida");
   if(ONLINE)aplicarLogrosServidor(logrosGacha); // en la nube el servidor calcula estos logros
   else{ evaluarLogro("gacha_5",(progresoLogros.gacha_5||0)+1); evaluarLogro("gastonomano",(progresoLogros.gastonomano||0)+1); if(S.monedas_gacha===0)evaluarLogro("bancarrota",1); evaluarLogro("diogenes",S.inv.length-new Set(S.inv).size); }
   $("gr").innerHTML='<img src="assets/assets-Items/'+it.f+'" style="height:110px;object-fit:contain" alt=""><p><b>'+traducir('item.'+it.k,it.n)+'</b></p>';
   $("gm").textContent=S.monedas_gacha;pintar();
  }catch(e){console.error('Gacha:',e);aviso(({es:'No se pudo abrir la caja. Inténtalo otra vez.',en:'Could not open the box. Please try again.',zh:'无法打开宝箱，请重试。'}[idiomaActual]));}
  finally{boton.disabled=false;}
 }; }
function lugares(){ abrir('<h3>🖼️ Fondo y música</h3>'+ESC.map((s,i)=>'<button class="esc" data-i="'+i+'" style="background-image:linear-gradient(#0000,#0008),url(\'assets/assets-fondos/'+s.fondo+'\')">'+traducirTexto(s.n)+(i===escena?' ✓':'')+'</button>').join("")+'<button id="snd" style="width:100%">'+(sonido?'🔊 Música activada':'🔇 Música desactivada')+'</button><p class="mini">Los fondos y canciones se descargan al elegirlos.</p>');
 document.querySelectorAll(".esc").forEach(b=>b.onclick=()=>{const anterior=escena;setEscena(+b.dataset.i);if(escena!==anterior)evaluarLogro("turista_visual",(progresoLogros.turista_visual||0)+1);cerrar();}); $("snd").onclick=()=>{sonido=!sonido; sonido?musica.play().catch(()=>{}):musica.pause();if(!sonido)evaluarLogro("silencio_celestial",1); lugares();}; }
let rachaEstudio=0,finUltimaSesion=0;
function estudiar(){ if(estudio){clearInterval(estudio.t);estudio=null;rachaEstudio=0;$("chip").style.display="none";gif(ESC[escena].gif,false);return aviso("Sesión cancelada");}
 if(bloqueo("estudiar")) return;
 const mins=S.minutos_pomodoro; let fin=Date.now()+mins*60000; gif("minando",false); const ch=$("chip"); ch.style.display="block";
 if(!ONLINE){ if(Date.now()-finUltimaSesion>120000)rachaEstudio=0; if(new Date().getHours()<7)evaluarLogro("madrugador_obligacion",1); }
 const f=()=>{const s=Math.max(0,Math.round((fin-Date.now())/1000)); ch.textContent="⛏️ "+String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")+" "+traducirTexto("(toca para cancelar)"); return s;};
 f(); ch.onclick=estudiar;
 // En la nube el servidor cronometra la sesión y es quien paga las monedas.
 const alta=ONLINE?rpc("az_auth_estudio_iniciar",{p_minutos:mins}).catch(e=>{console.error("Estudio:",e);return null;}):null;
 estudio={alta,t:setInterval(async()=>{ if(f()<=0){ const ses=estudio; clearInterval(ses.t);estudio=null;ch.style.display="none"; if(!ONLINE)xp(mins); gif("aplaude");
   let msg="¡Buen trabajo! +"+mins+" XP y +"+(mins*2)+" 🪙. Descansa un momento.";
   if(ONLINE){
    msg="¡Buen trabajo! Descansa un momento.";
    try{ if(ses.alta)await ses.alta; const r=await rpc("az_auth_estudio_completar",{});
     if(r&&r.ok){aplicarEstado(r);aplicarLogrosServidor(r.logros);msg="¡Buen trabajo! +"+r.xp+" XP y +"+r.premio+" 🪙. Descansa un momento."+(r.tope?" (Llegaste al tope diario de recompensas de estudio.)":"");}
     else msg+=" (No se pudo validar la recompensa en monedas.)";
    }catch(e){console.error("Estudio:",e);msg+=" (No se pudo validar la recompensa en monedas.)";}
   }else{
    S.monedas_gacha+=mins*2; rachaEstudio++; finUltimaSesion=Date.now();
    evaluarLogro("estudiante_ejemplar",1); evaluarLogro("nerd_tiempo_completo",(progresoLogros.nerd_tiempo_completo||0)+1); evaluarLogro("encoma_estudio",rachaEstudio);
    if(new Date().getHours()>=22)evaluarLogro("buho_nocturno",1);
   }
   alerta("✅ Sesión terminada",msg,true); pintar(); guardar(); } },1000)}; aviso("⛏️ ¡A estudiar "+mins+" min!"); }
function perfil(){ const n=v=>Math.max(1,Math.min(999,Math.round(+v)||1));
 abrir('<h3>👤 Perfil</h3><div class="dat"><div>👤 Usuario<b>'+esc(S.nombre)+'</b></div><div>⭐ Nivel<b>'+S.nivel+'</b></div><div>🪙 Monedas<b>'+S.monedas_gacha+'</b></div><div>✨ XP<b>'+S.puntos_experiencia+'/'+xpNecesaria(S.nivel)+'</b></div><div>💧 Vasos de agua<b>'+S.vasos_agua_tomados+'</b></div><div>🏃 Pausas activas<b>'+S.pausas_realizadas+'</b></div></div>'
 +'<h3 style="margin-top:4px">⏱ Personalizar horarios</h3>'
 +'<div class="fila"><label>Alarma agua (min)</label><input id="a1" type="number" inputmode="numeric" min="1" max="999" value="'+S.minutos_agua+'"></div>'
 +'<div class="fila"><label>Pausa activa (min)</label><input id="a2" type="number" inputmode="numeric" min="1" max="999" value="'+S.minutos_pausa+'"></div>'
 +'<div class="fila"><label>Sesión de estudio (min)</label><input id="a3" type="number" inputmode="numeric" min="1" max="240" value="'+S.minutos_pomodoro+'"></div>'
 +'<div class="fila"><label>Hora de cierre (0-23)</label><input id="a4" type="number" inputmode="numeric" min="0" max="23" value="'+S.hora_dormir+'"></div>'
 +'<p class="mini">A la hora de cierre Azurebill se duerme hasta las 5:00 y se bloquean alimentar, estudiar, gacha y objetos.</p>'
 +'<button class="gr" id="gs" style="width:100%">Guardar ajustes</button>'
 +'<button id="nt" style="width:100%;margin-top:8px">🔔 Activar notificaciones</button>'
 +'<div class="bio"><b>¿Quién es Azurebill?</b>\n'+TX.bio+'</div><button id="so" style="width:100%">Cerrar sesión</button><button id="del" style="width:100%;margin-top:8px;background:#6b1d2f">🗑️ Eliminar mi cuenta</button><p class="mini" style="text-align:center">🌍 Zona horaria: '+esc(zonaLocal()||"—")+'</p><p class="mini" style="text-align:center"><a href="privacidad.html" target="_blank" rel="noopener" style="color:var(--ac)">Política de privacidad</a></p>');
 $("gs").onclick=()=>{ const horaAntes=S.hora_dormir; S.minutos_agua=n($("a1").value);S.minutos_pausa=n($("a2").value);S.minutos_pomodoro=Math.min(240,n($("a3").value));S.hora_dormir=Math.max(0,Math.min(23,Math.round(+$("a4").value)||0));
  if(S.hora_dormir!==horaAntes&&(S.hora_dormir===18||S.hora_dormir===23))evaluarLogro("trastorno_sueno",1);
  tAgua=tPausa=Date.now(); nocheAvisada=false; guardar(); pintar(); tick(); programar(); cerrar(); aviso("✅ Ajustes guardados"); };
 $("nt").onclick=()=>{ if(LN){programar();return aviso("🔔 Alarmas en segundo plano activadas");} if(!("Notification" in window)) return aviso("Este navegador no admite notificaciones"); Notification.requestPermission().then(p=>aviso(p==="granted"?"🔔 Notificaciones activadas":"No se activaron las notificaciones")); };
 $("so").onclick=async()=>{ if(pend){clearTimeout(tG);await enviar();}
  if(ONLINE&&azSession){ try{ await authRequest("/logout?scope=local",null,"POST",azSession.access_token); }catch(e){ console.warn("Cierre de sesión:",e); } }
  borrarSesion(); location.reload(); };
 $("del").onclick=eliminarCuenta; }
// Borra la cuenta: en la nube lo hace el servidor (datos + acceso); en modo local se limpian los datos del dispositivo.
function limpiarDatosLocales(n){ const l=String(n).toLowerCase(); ["az_"+l,"azd_"+l,"az_extra_"+l,"azdr_"+l,"az_cr_"+n,"az_cr_"+l].forEach(k=>localStorage.removeItem(k)); }
async function eliminarCuenta(){ const palabra=({es:"ELIMINAR",en:"DELETE",zh:"DELETE"})[idiomaActual]||"ELIMINAR";
 const t=prompt(({es:"Esto borra para siempre tu cuenta, tu progreso, tu mochila y tu diario. No se puede deshacer.\nEscribe ELIMINAR para confirmar:",en:"This permanently deletes your account, progress, backpack and diary. It cannot be undone.\nType DELETE to confirm:",zh:"这将永久删除你的账号、进度、背包和日记，且无法恢复。\n请输入 DELETE 确认："})[idiomaActual]||"");
 if(t===null)return; if(t.trim().toUpperCase()!==palabra)return aviso("Escribiste otra palabra: no se eliminó nada");
 try{ clearTimeout(tG); pend=false; const nombre=S.nombre;
  if(ONLINE)await rpc("az_auth_eliminar_cuenta",{});
  limpiarDatosLocales(nombre); borrarSesion(); S=null;
  aviso("✅ Cuenta eliminada"); setTimeout(()=>location.reload(),1500);
 }catch(e){ console.error("Eliminar cuenta:",e); aviso("⚠️ No se pudo eliminar la cuenta. Revisa tu conexión e inténtalo otra vez"); } }
let tClicks=[];
$("azu").onclick=()=>{ if(duerme()) return gif("duerme"); const t=Date.now(); tClicks=tClicks.filter(x=>t-x<10000); tClicks.push(t); if(tClicks.length>=20){evaluarLogro("acosador_clicks",20);tClicks=[];gif("enojada");} else gif(rnd(POOL.click)); };
document.querySelectorAll("#dock button").forEach(b=>b.onclick=()=>({mochila,alimentar,gacha,estudiar,escenas:lugares,diario,perfil,logros})[b.dataset.a]());
$("bCfg").onclick=()=>{let u=$("cu").value.trim(); try{u=new URL(u).origin}catch(e){} const k=$("ck").value.trim(); if(!/^https:\/\/.+/.test(u)||k.length<20) return aviso("Revisa la URL (https://…) y la clave");
 localStorage.setItem("az_cfg",JSON.stringify({SUPABASE_URL:u,SUPABASE_ANON_KEY:k})); location.reload();};
$("bCfgBorrar").onclick=()=>{localStorage.removeItem("az_cfg");location.reload();};
$("bEntrar").onclick=()=>authEntry(ONLINE&&azAuthMode==='registro'); $("bReg").onclick=()=>{if(!ONLINE)return authEntry(true);setAuthMode(azAuthMode==='registro'?'login':'registro');$('authStatus').textContent='';$('bResend').hidden=true;};
$('bOld').onclick=()=>{if(authWantLink()){localStorage.removeItem('az_want_link');$('authStatus').textContent='';}else{localStorage.setItem('az_want_link','1');$('authStatus').textContent=authText('oldInfo');}setAuthMode('registro');};
$('bResend').onclick=authResend;$('bEye').onclick=()=>{$('p').type=$('p').type==='password'?'text':'password';};
['u','authName','p'].forEach(id=>$(id).addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('bEntrar').click();}}));$('bReset').onclick=authReset;$('bLink').onclick=authLink;$('bNew').onclick=authNew;
// ================= Alarmas con la app cerrada (solo en la app Android/Capacitor) =================
const CAP=window.Capacitor, LN=CAP&&CAP.isNativePlatform&&CAP.isNativePlatform()&&CAP.Plugins&&CAP.Plugins.LocalNotifications;
let enlazado=false;
function creditar(t,id){ if(!S||(t!=="agua"&&t!=="pausa")) return false; const k="az_cr_"+S.nombre; let c=[]; try{c=JSON.parse(localStorage.getItem(k))||[]}catch(e){}
 if(c.includes(id)) return false; c.push(id); localStorage.setItem(k,JSON.stringify(c.slice(-400)));
 if(ONLINE){eventoServidor(t);return true;}
 if(t==="agua"){S.vasos_agua_tomados++;evaluarLogro("hidrata_5",S.vasos_agua_tomados);evaluarLogro("hidrata_15",S.vasos_agua_tomados);xp(5)}else{S.pausas_realizadas++;evaluarLogro("cuerpo_sano",S.pausas_realizadas);xp(15)} pintar(); guardar(); return true; }
async function programar(){ if(!LN||!S) return;
 try{ let p=await LN.checkPermissions(); if(p.display!=="granted") p=await LN.requestPermissions(); if(p.display!=="granted") return aviso("Activa las notificaciones para que Azurebill te avise");
  try{ const e=await LN.checkExactNotificationSetting(); if(e.exact_alarm!=="granted") await LN.changeExactNotificationSetting(); }catch(x){}
  await LN.createChannel({id:"azu",name:"Alarmas de Azurebill",importance:5,visibility:1,sound:"alarma.mp3",vibration:true});
  const pe=await LN.getPending(); if(pe.notifications.length) await LN.cancel({notifications:pe.notifications.map(n=>({id:n.id}))});
  const E0=Date.UTC(2026,0,1), ya=Date.now(), out=[], dorm=ms=>{const h=new Date(ms).getHours(),d=S.hora_dormir;return d>5?(h>=d||h<5):(h>=d&&h<5)};
  const mk=(t,d,at,tx)=>out.push({id:Math.floor((at-E0)/6e4)*10+d,title:traducirAlarmaCompleta(tx[0]),body:traducirAlarmaCompleta(tx[1]),schedule:{at:new Date(at),allowWhileIdle:true},channelId:"azu",extra:{t}});
  [["agua",1,S.minutos_agua],["pausa",2,S.minutos_pausa]].forEach(([t,d,m])=>{ for(let i=1;i<=60;i++){ const at=ya+i*m*6e4; if(at>ya+864e5) break; if(!dorm(at)) mk(t,d,at,TX[t]); } });
  for(let k=0;k<3;k++){ const a=new Date(); a.setHours(S.hora_dormir,0,0,0); a.setDate(a.getDate()+k); if(+a>ya) mk("noche",3,+a,TX.noche); }
  if(out.length) await LN.schedule({notifications:out});
 }catch(e){ console.warn("alarmas",e); } }
async function recoger(){ if(!LN) return; try{ const d=await LN.getDeliveredNotifications(), c={agua:0,pausa:0};
 d.notifications.forEach(n=>{const t=n.extra&&n.extra.t; if(c[t]!==undefined&&c[t]<6&&creditar(t,n.id)) c[t]++;});
 if(d.notifications.length) await LN.removeAllDeliveredNotifications(); if(c.agua||c.pausa) aviso("🔔 Mientras no estabas: "+c.agua+" 💧 y "+c.pausa+" 🏃 contados"); }catch(e){} }
async function enlazarNativo(){ if(!LN||enlazado) return; enlazado=true;
 LN.addListener("localNotificationReceived",n=>{ const t=n.extra&&n.extra.t; if(t==="agua"||t==="pausa"){ creditar(t,n.id); if(!duerme()) gif(t==="agua"?"diceok":rnd(POOL.pausa)); alerta(n.title,n.body,false,t==="pausa"?alarmaPausaCerrada:undefined); } });
 LN.addListener("localNotificationActionPerformed",a=>{ const n=a.notification; creditar(n.extra&&n.extra.t,n.id); });
 await recoger(); }
// ================= Diario + calendario =================
const MO=[["feliz","😊","Feliz","#fdcb6e","felizconcorazones"],["triste","😢","Triste","#74b9ff","llora"],["enojado","😡","Enojado","#ff7675","enojada"],["sorprendido","😮","Sorprendido","#a29bfe","sorprendida"],["motivado","🔥","Motivado","#00b894","animada"]];
const mo=k=>MO.find(m=>m[0]===k)||["","📝","","#b2bec3","aplaude"], esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let DIA=null;
async function drpc(fn,a){ if(ONLINE) return rpc(azSession?(fn==='app_diario_listar'?'az_auth_diario_listar':'az_auth_diario_guardar_dia'):fn,azSession?a:Object.assign({p_nombre:S.nombre,p_contrasena:pass},a));
 const k="azd_"+S.nombre.toLowerCase(); let l=[]; try{l=JSON.parse(localStorage.getItem(k))||[]}catch(e){}
 if(fn==="app_diario_listar") return l; l.push({fecha:a.p_fecha,hora:a.p_hora,nota:a.p_nota,animo:a.p_animo}); localStorage.setItem(k,JSON.stringify(l)); return true; }
function diario(){ let sel="feliz";
 abrir('<h3>📖 '+traducir('diario.titulo','Diario de ánimo')+'</h3><textarea id="dn" rows="3" maxlength="2000" placeholder="Escribe un pensamiento o cómo te sientes hoy..." style="width:100%;font:inherit;font-size:17px;padding:12px;border-radius:14px;border:2px solid var(--ac);background:#0004;color:var(--tx)"></textarea><p class="mini">Selecciona tu estado de ánimo:</p><div class="ani">'+MO.map(m=>'<button data-m="'+m[0]+'"><span>'+m[1]+'</span>'+m[2]+'</button>').join("")+'</div><p class="mini">Puedes registrar varias emociones al día. La recompensa diaria (+20 🪙) se cobra solo la primera vez.</p><button class="gr" id="dg" style="width:100%">💾 Guardar entrada</button><button id="dc" style="width:100%;margin-top:8px">📅 Ver calendario</button>');
 const bs=[...document.querySelectorAll(".ani button")], pk=()=>bs.forEach(b=>b.classList.toggle("sel",b.dataset.m===sel)); bs.forEach(b=>b.onclick=()=>{sel=b.dataset.m;pk()}); pk();
 $("dc").onclick=()=>calendario();
 $("dg").onclick=async()=>{ const boton=$("dg"); if(boton.disabled)return; const nota=$("dn").value.trim(); if(!nota) return aviso("⚠️ Escribe unas palabras antes de guardar");
  const d=new Date(), f=d.toLocaleDateString("sv"), h=d.toLocaleTimeString("en-GB"); boton.disabled=true;
  try{
   if(ONLINE){
    // El servidor decide la fecha, el límite diario, la recompensa (una vez al día) y los logros del diario.
    const r=await drpc("app_diario_guardar",{p_fecha:f,p_hora:h,p_nota:nota,p_animo:sel});
    if(!r)throw 0;
    if(r.monedas!==undefined){S.monedas_gacha=r.monedas;pintar();}
    if(!r.ok){cerrar();return aviso(r.motivo==="limite"?"📖 Llegaste al máximo de 10 entradas de hoy. Vuelve mañana 💜":"⚠️ No se pudo guardar la entrada. Revisa tu conexión");}
    if(DIA)DIA.push({fecha:r.fecha,hora:r.hora,nota,animo:sel});
    aplicarEstado(r); aplicarLogrosServidor(r.logros);
    gifEspecial(mo(sel)[4]); pintar(); guardar(); cerrar();
    aviso(r.nuevo?"✨ Entrada guardada: +15 XP y +20 🪙":"📖 Entrada guardada. La recompensa de hoy ya se cobró; vuelve mañana por más 💜");
   }else{
    const kr="azdr_"+S.nombre.toLowerCase(), antes=await drpc("app_diario_listar",{});
    if(antes.filter(e=>e.fecha===f).length>=10){cerrar();return aviso("📖 Llegaste al máximo de 10 entradas de hoy. Vuelve mañana 💜");}
    await drpc("app_diario_guardar",{p_fecha:f,p_hora:h,p_nota:nota,p_animo:sel});
    const lista=antes.concat([{fecha:f,hora:h,nota,animo:sel}]); if(DIA)DIA=lista;
    const nuevo=localStorage.getItem(kr)!==f;
    evaluarLogro("querido_diario",1); evaluarLogro("historiador",lista.length); if(sel==="triste"||sel==="enojado")evaluarLogro("drama_queen",1);
    let racha=0; for(let i=lista.length-1;i>=0&&i>=lista.length-5&&lista[i].animo==="feliz";i--)racha++; if(racha)evaluarLogro("positividad_toxica",racha);
    if(nuevo){localStorage.setItem(kr,f);xp(15);S.monedas_gacha+=20;}
    gifEspecial(mo(sel)[4]); pintar(); guardar(); cerrar();
    aviso(nuevo?"✨ Entrada guardada: +15 XP y +20 🪙":"📖 Entrada guardada. La recompensa de hoy ya se cobró; vuelve mañana por más 💜");
   }
  }catch(e){ console.error("Diario:",e); aviso("⚠️ No se pudo guardar la entrada. Revisa tu conexión"); }
  finally{ boton.disabled=false; } }; }
async function calendario(y,m,sel){ const hoy=new Date(), hoyS=hoy.toLocaleDateString("sv"); if(y===undefined){y=hoy.getFullYear();m=hoy.getMonth();sel=hoyS;}
 if(!DIA){ try{ DIA=await drpc("app_diario_listar",{}); if(!Array.isArray(DIA)) throw 0; }catch(e){ DIA=null; return aviso("⚠️ No se pudo cargar el diario. Revisa tu conexión"); } }
 const por={}; DIA.forEach(e=>(por[e.fecha]=por[e.fecha]||[]).push(e)); const p=n=>String(n).padStart(2,"0"), dias=new Date(y,m+1,0).getDate(), ini=(new Date(y,m,1).getDay()+6)%7;
 let c=[...Array(7)].map((_,i)=>"<i>"+new Date(2024,0,1+i).toLocaleDateString(idiomaActual==="zh"?"zh-CN":idiomaActual,{weekday:"short"})+"</i>").join("")+"<i></i>".repeat(ini), tot=0;
 for(let d=1;d<=dias;d++){ const f=y+"-"+p(m+1)+"-"+p(d), l=por[f]||[]; tot+=l.length;
  c+='<button class="dd'+(f===hoyS?" hoy":"")+(f===sel?" sel":"")+'" data-f="'+f+'" style="'+(l.length?"background:"+mo(l[l.length-1].animo)[3]+"59":"")+'">'+d+'<small>'+[...new Set(l.map(e=>e.animo))].slice(0,3).map(k=>mo(k)[1]).join("")+'</small></button>'; }
 const det=(por[sel]||[]).map(e=>'<div class="nt" style="border-left:4px solid '+mo(e.animo)[3]+'"><b>'+mo(e.animo)[1]+" "+mo(e.animo)[2]+" · "+String(e.hora).slice(0,5)+"</b><br>"+esc(e.nota)+"</div>").join("")||'<p class="mini">No escribiste nada este día.</p>';
 abrir('<h3>📅 Calendario de emociones</h3><div class="fila"><button id="cp">◀</button><b>'+new Date(y,m,1).toLocaleDateString(idiomaActual==="zh"?"zh-CN":idiomaActual,{month:"long",year:"numeric"})+'</b><button id="cn">▶</button><button id="ch">Hoy</button></div><div class="cal">'+c+'</div><p class="mini">Entradas este mes: '+tot+'</p><h3 style="font-size:15px;margin-right:4px">Entradas del '+new Date(sel+"T00:00:00").toLocaleDateString(idiomaActual==="zh"?"zh-CN":idiomaActual,{dateStyle:"long"})+'</h3>'+det+'<button id="dv" style="width:100%;margin-top:8px">📖 Escribir entrada</button>');
 $("cp").onclick=()=>calendario(m?y:y-1,m?m-1:11,sel); $("cn").onclick=()=>calendario(m<11?y:y+1,m<11?m+1:0,sel); $("ch").onclick=()=>calendario(); $("dv").onclick=diario;
 document.querySelectorAll(".dd").forEach(b=>b.onclick=()=>calendario(y,m,b.dataset.f)); }

// Extensiones móviles: logros e idiomas. Datos extra por usuario y dispositivo.
const LOGROS_DEF=[{"id": "tacano_extremo", "title": "logro.tacano.titulo", "desc": "logro.tacano.desc", "target": 1, "coins": 50}, {"id": "obesidad_azurebill", "title": "logro.obesidad.titulo", "desc": "logro.obesidad.desc", "target": 10, "coins": 100}, {"id": "intoxicada", "title": "logro.intoxicada.titulo", "desc": "logro.intoxicada.desc", "target": 1, "coins": 100}, {"id": "encoma_estudio", "title": "logro.encoma.titulo", "desc": "logro.encoma.desc", "target": 3, "coins": 150}, {"id": "despierto_3am", "title": "logro.3am.titulo", "desc": "logro.3am.desc", "target": 1, "coins": 80}, {"id": "trastorno_sueno", "title": "logro.sueno.titulo", "desc": "logro.sueno.desc", "target": 1, "coins": 40}, {"id": "acosador_clicks", "title": "logro.clicks.titulo", "desc": "logro.clicks.desc", "target": 20, "coins": 50}, {"id": "hidrata_5", "title": "logro.agua5.titulo", "desc": "logro.agua5.desc", "target": 5, "coins": 50}, {"id": "hidrata_15", "title": "logro.agua15.titulo", "desc": "logro.agua15.desc", "target": 15, "coins": 100}, {"id": "cuerpo_sano", "title": "logro.pausa3.titulo", "desc": "logro.pausa3.desc", "target": 3, "coins": 60}, {"id": "estatua_marfil", "title": "logro.estatua.titulo", "desc": "logro.estatua.desc", "target": 3, "coins": 40}, {"id": "estudiante_ejemplar", "title": "logro.pomodoro1.titulo", "desc": "logro.pomodoro1.desc", "target": 1, "coins": 50}, {"id": "nerd_tiempo_completo", "title": "logro.pomodoro5.titulo", "desc": "logro.pomodoro5.desc", "target": 5, "coins": 150}, {"id": "buho_nocturno", "title": "logro.buho.titulo", "desc": "logro.buho.desc", "target": 1, "coins": 80}, {"id": "madrugador_obligacion", "title": "logro.madrugador.titulo", "desc": "logro.madrugador.desc", "target": 1, "coins": 80}, {"id": "gacha_5", "title": "logro.gacha5.titulo", "desc": "logro.gacha5.desc", "target": 5, "coins": 50}, {"id": "bancarrota", "title": "logro.bancarrota.titulo", "desc": "logro.bancarrota.desc", "target": 1, "coins": 100}, {"id": "diogenes", "title": "logro.diogenes.titulo", "desc": "logro.diogenes.desc", "target": 10, "coins": 80}, {"id": "regalo_no_deseado", "title": "logro.disgusto.titulo", "desc": "logro.disgusto.desc", "target": 1, "coins": 30}, {"id": "gastonomano", "title": "logro.gacha20.titulo", "desc": "logro.gacha20.desc", "target": 20, "coins": 200}, {"id": "nivel_2", "title": "logro.nivel2.titulo", "desc": "logro.nivel2.desc", "target": 1, "coins": 50}, {"id": "nivel_5", "title": "logro.nivel5.titulo", "desc": "logro.nivel5.desc", "target": 1, "coins": 150}, {"id": "nivel_10", "title": "logro.nivel10.titulo", "desc": "logro.nivel10.desc", "target": 1, "coins": 500}, {"id": "poliglota", "title": "logro.poliglota.titulo", "desc": "logro.poliglota.desc", "target": 5, "coins": 60}, {"id": "turista_visual", "title": "logro.turista.titulo", "desc": "logro.turista.desc", "target": 10, "coins": 50}, {"id": "silencio_celestial", "title": "logro.silencio.titulo", "desc": "logro.silencio.desc", "target": 1, "coins": 20}, {"id": "querido_diario", "title": "logro.diario1.titulo", "desc": "logro.diario1.desc", "target": 1, "coins": 30}, {"id": "drama_queen", "title": "logro.drama.titulo", "desc": "logro.drama.desc", "target": 1, "coins": 40}, {"id": "positividad_toxica", "title": "logro.positividad.titulo", "desc": "logro.positividad.desc", "target": 5, "coins": 100}, {"id": "historiador", "title": "logro.diario10.titulo", "desc": "logro.diario10.desc", "target": 10, "coins": 150}];
const TRAD={"es": {"login.title": "Iniciar Sesión", "login.user": "Usuario:", "login.pass": "Contraseña:", "login.btn_login": "Ingresar", "login.btn_register": "Registrarse", "login.lang": "Idioma / Language / 语言:", "profile.title": "✨ PERFIL DE JUGADOR ✨", "profile.user": "👤 Usuario:", "profile.level": "⭐ Nivel:", "profile.coins": "🪙 Monedas Gacha:", "profile.inventory": "🎒 Inventario:", "profile.music": "🎵 Control de Audio:", "profile.btn_mute": "🔇 Pausar / Reanudar Música", "profile.bio_title": "📖 ¿Quién es Azurebill?", "profile.bio": "Azurebill es un personaje único y amigable que te ayudará a gestionar tu tiempo en pantalla con recordatorios amigables.\\n\\nRecuerda: ¡tienes que cuidarte a ti y a Azurebill!", "profile.btn_close": "Cerrar", "empty": "Vacío", "main.btn_profile": "Perfil", "main.lbl_hambre": "Hambre", "main.lbl_energia": "Energía", "main.btn_alimentar": "Alimentar", "main.btn_gacha": "Caja Gacha", "main.btn_estudiar": "Estudiar", "main.btn_fondo": "Cambiar Fondo", "main.estado_prefix": "Estado:", "alerta.agua.titulo": "💧 Hora de Hidratarte", "alerta.agua.mensaje": "¡Azurebill te recuerda tomar un sorbo de agua y estirar los brazos!", "alerta.pausa.titulo": "🏃 Pausa Activa", "alerta.pausa.mensaje": "¡Llevas 30 minutos pegado a la pantalla! Levántate, camina un poco y descansa la vista.", "alerta.exceso.titulo": "😡 ¡USO EXCESIVO DE PANTALLA!", "alerta.exceso.mensaje": "¡Llevas 1 hora sin descansar! Azurebill se enojó contigo y perdiste 20 XP. ¡Toma un descanso real!", "gacha.insufficient_title": "Monedas Insuficientes", "gacha.insufficient_msg": "Necesitas al menos 50 monedas gacha para abrir una caja.", "gacha.new_item_title": "¡Nuevo Ítem Obtenido!", "gacha.got_prefix": "¡Has obtenido:", "gacha.saved_inventory": "El objeto se ha guardado en tu inventario.", "inventory.give": "Dar a Azurebill", "item.caja": "Caja Sorpresa", "item.comidaquemada": "Comida quemada", "item.comidarara": "Comida rara", "item.tartaglia": "Tartaglia", "item.dinero": "Fajo de Billetes", "item.fajodebilletes": "Fajo de Billetes", "item.flor": "Flor Decorativa", "item.flower": "Flor", "item.helado": "Helado Simple", "item.heladofresa": "Helado de Fresa", "item.heladooreo": "Helado de Oreo", "item.laptop": "Laptop Gaming", "item.microfono": "Micrófono de Grabación", "item.musica": "Disco de Música", "item.nintendo": "Consola Nintendo", "item.nintendoconsole": "Consola Nintendo", "item.paintpalette": "Paleta de Pintura", "item.pintura": "Cuadro de Pintura", "item.pizza": "Rebanada de Pizza", "item.sandwichqueso": "Sándwich de Queso", "item.sandwichdequeso": "Sándwich de Queso", "item.sandwichqueso2": "Sándwich de Queso Doble", "item.te": "Taza de Té", "item.te2": "Té Caliente", "item.camaroncontrompeta": "Camarón con Trompeta", "item.hojaotonal": "Hoja Otoñal", "item.book": "Libro", "item.librodemagia": "Libro de Magia", "item.gatonegro": "Gato Negro", "item.ditto": "Ditto", "item.gengar": "Gengar", "item.globos": "Globos", "item.tocadiscos": "Toca discos", "item.pancake": "Pancakes", "item.ratonesguisados": "Ratones Guisados", "item.sazonquedicesopademacaco": "Sazón \"Sopa de Macaco\"", "diario.titulo": "Diario de Ánimo", "diario.placeholder": "Escribe un pensamiento o cómo te sientes hoy...", "diario.seleccionar_animo": "Selecciona tu estado de ánimo:", "diario.guardar": "Guardar Entrada", "diario.guardado_titulo": "Entrada Guardada", "diario.guardado_msg": "¡Ganaste +15 XP y +20 Monedas por expresar tus emociones!", "diario.vacio_titulo": "Diario Vacío", "diario.vacio_msg": "Escribe unas palabras antes de guardar.", "estado.feliz": "Feliz", "estado.triste": "Triste", "estado.enojado": "Enojado", "estado.sorprendido": "Sorprendido", "estado.motivado": "Motivado", "noche.titulo": "¡Es hora de descansar!", "noche.mensaje": "Has hecho un trabajo increíble hoy. Azurebill y tú han avanzado mucho, pero ahora es momento de pausar, relajar la mente y tener un descanso reparador. ¡Buenas noches y dulces sueños! 🌙✨", "dormido.estudiar": "Shh... Azurebill duerme profundamente. No puedes estudiar a esta hora.", "dormido.alimentar": "Azurebill está en el quinto sueño, no le entra ni un bocado.", "dormido.gacha": "Ni lo intentes... Azurebill está mimiendo y no va a abrir cajas ahora.", "dormido.item": "Está tan dormida que ni se entera. Guarda ese ítem para cuando despierte.", "logro.desbloqueado_titulo": "🏆 ¡LOGRO DESBLOQUEADO!", "logro.desbloqueado_msg": "Completaste el logro:", "logro.tacano.titulo": "Tacaño extremo", "logro.tacano.desc": "Deja que el hambre o energía de Azurebill llegue a 0%.", "logro.obesidad.titulo": "¿Obesidad, diabetes o colesterol alto?", "logro.obesidad.desc": "Dale de comer 10 veces seguidas teniendo el hambre al 100%.", "logro.intoxicada.titulo": "¡Felicidades, la has intoxicado!", "logro.intoxicada.desc": "Dale de comer la comida quemada, la comida rara, los ratones guisados o el sazón de Sopa de Macaco.", "logro.encoma.titulo": "Enfocado... ¿o en coma?", "logro.encoma.desc": "Déjalo estudiando durante 3 sesiones Pomodoro seguidas sin descanso.", "logro.3am.titulo": "¿Para qué me despiertas?", "logro.3am.desc": "Abre la aplicación a las 3:00 AM.", "logro.sueno.titulo": "Trastorno del sueño", "logro.sueno.desc": "Cámbiale la hora de dormir a las 18:00 o 23:00.", "logro.clicks.titulo": "Acosador de clicks", "logro.clicks.desc": "Hazle click a Azurebill 20 veces en menos de 10 segundos.", "logro.agua5.titulo": "Hidratado profesional", "logro.agua5.desc": "Toma 5 vasos de agua.", "logro.agua15.titulo": "Pez fuera del agua", "logro.agua15.desc": "Toma 15 vasos de agua en total.", "logro.pausa3.titulo": "Cuerpo sano", "logro.pausa3.desc": "Realiza 3 pausas activas.", "logro.estatua.titulo": "Estatua de marfil", "logro.estatua.desc": "Ignora 3 alarmas de pausa activa seguidas.", "logro.pomodoro1.titulo": "Estudiante ejemplar", "logro.pomodoro1.desc": "Completa 1 sesión de estudio Pomodoro.", "logro.pomodoro5.titulo": "Nerd de tiempo completo", "logro.pomodoro5.desc": "Completa 5 sesiones de estudio.", "logro.buho.titulo": "Búho nocturno", "logro.buho.desc": "Quédate estudiando pasadas las 10:00 PM.", "logro.madrugador.titulo": "Madrugador por obligación", "logro.madrugador.desc": "Inicia una sesión de estudio antes de las 7:00 AM.", "logro.gacha5.titulo": "Coleccionista principiante", "logro.gacha5.desc": "Saca 5 ítems de la caja gacha.", "logro.bancarrota.titulo": "Bancarrota inminente", "logro.bancarrota.desc": "Gástate tus últimas monedas y quédate en 0.", "logro.diogenes.titulo": "Síndrome de Diógenes", "logro.diogenes.desc": "Acumula 10 o más ítems repetidos en la mochila.", "logro.disgusto.titulo": "Regalo no deseado", "logro.disgusto.desc": "Dale el helado de fresa, que no le gusta nada.", "logro.gacha20.titulo": "Gastonómano", "logro.gacha20.desc": "Saca 20 ítems del gacha en total.", "logro.nivel2.titulo": "En ascenso", "logro.nivel2.desc": "Alcanza el Nivel 2.", "logro.nivel5.titulo": "Veterano del escritorio", "logro.nivel5.desc": "Alcanza el Nivel 5.", "logro.nivel10.titulo": "Max Level Enjoyer", "logro.nivel10.desc": "Alcanza el Nivel 10.", "logro.poliglota.titulo": "Políglota confundido", "logro.poliglota.desc": "Cambia el idioma de la app entre Español, Inglés y Chino 5 veces.", "logro.turista.titulo": "Turista visual", "logro.turista.desc": "Cambia el fondo del escenario 10 veces.", "logro.silencio.titulo": "Silencio celestial", "logro.silencio.desc": "Silencia la música desde el perfil por primera vez.", "logro.diario1.titulo": "Querido diario...", "logro.diario1.desc": "Escribe tu primera entrada en el diario.", "logro.drama.titulo": "Drama Queen", "logro.drama.desc": "Registra un estado de ánimo Enojado o Triste en el diario.", "logro.positividad.titulo": "Positividad tóxica", "logro.positividad.desc": "Registra 5 estados Feliz seguidos en el diario.", "logro.diario10.titulo": "Historiador personal", "logro.diario10.desc": "Acumula 10 entradas en el diario.", "resumen.titulo": "Resumen Nocturno", "resumen.hoy": "Resumen de lo que lograste hoy", "resumen.vasos": "vasos de agua tomados", "resumen.pausas": "pausas activas realizadas", "logro.btn_aceptar": "¡Genial!", "logro.monedas_ganadas": "Monedas"}, "en": {"login.title": "Login", "login.user": "Username:", "login.pass": "Password:", "login.btn_login": "Log In", "login.btn_register": "Register", "login.lang": "Language / Idioma / 语言:", "profile.title": "✨ PLAYER PROFILE ✨", "profile.user": "👤 User:", "profile.level": "⭐ Level:", "profile.coins": "🪙 Gacha Coins:", "profile.inventory": "🎒 Inventory:", "profile.music": "🎵 Audio Control:", "profile.btn_mute": "🔇 Pause / Resume Music", "profile.bio_title": "📖 Who is Azurebill?", "profile.bio": "Azurebill is a unique and friendly character who will help you manage your screen time with friendly reminders.\\n\\nRemember: you have to take care of yourself and of Azurebill!", "profile.btn_close": "Close", "empty": "Empty", "main.btn_profile": "Profile", "main.lbl_hambre": "Hunger", "main.lbl_energia": "Energy", "main.btn_alimentar": "Feed", "main.btn_gacha": "Gacha Box", "main.btn_estudiar": "Study", "main.btn_fondo": "Change Background", "main.estado_prefix": "Status:", "alerta.agua.titulo": "💧 Hydration Time", "alerta.agua.mensaje": "Azurebill reminds you to take a sip of water and stretch your arms!", "alerta.pausa.titulo": "🏃 Active Break", "alerta.pausa.mensaje": "You've been staring at the screen for 30 minutes! Stand up, walk around, and rest your eyes.", "alerta.exceso.titulo": "😡 EXCESSIVE SCREEN TIME!", "alerta.exceso.mensaje": "You've gone 1 hour without resting! Azurebill got mad at you and you lost 20 XP. Take a real break!", "gacha.insufficient_title": "Insufficient Coins", "gacha.insufficient_msg": "You need at least 50 gacha coins to open a box.", "gacha.new_item_title": "New Item Obtained!", "gacha.got_prefix": "You obtained:", "gacha.saved_inventory": "The item has been saved to your inventory.", "inventory.give": "Give to Azurebill", "item.caja": "Surprise Box", "item.comidaquemada": "Burnt Food", "item.comidarara": "Strange Food", "item.tartaglia": "Tartaglia", "item.dinero": "Wad of Cash", "item.fajodebilletes": "Wad of Cash", "item.flor": "Decorative Flower", "item.flower": "Flower", "item.helado": "Regular Ice Cream", "item.heladofresa": "Strawberry Ice Cream", "item.heladooreo": "Oreo Ice Cream", "item.laptop": "Gaming Laptop", "item.microfono": "Recording Microphone", "item.musica": "Music Disc", "item.nintendo": "Nintendo Console", "item.nintendoconsole": "Nintendo Console", "item.paintpalette": "Paint Palette", "item.pintura": "Art Painting", "item.pizza": "Pizza Slice", "item.sandwichqueso": "Grilled Cheese Sandwich", "item.sandwichdequeso": "Grilled Cheese Sandwich", "item.sandwichqueso2": "Double Cheese Sandwich", "item.te": "Cup of Tea", "item.te2": "Hot Tea", "item.camaroncontrompeta": "Shrimp with Trumpet", "item.hojaotonal": "Autumn Leaf", "item.book": "Book", "item.librodemagia": "Magic Book", "item.gatonegro": "Black Cat", "item.ditto": "Ditto", "item.gengar": "Gengar", "item.globos": "Balloons", "item.tocadiscos": "Record Player", "item.pancake": "Pancakes", "item.ratonesguisados": "Stewed Mice", "item.sazonquedicesopademacaco": "\"Macaco Soup\" Seasoning", "diario.titulo": "Mood Diary", "diario.placeholder": "Write a thought or how you feel today...", "diario.seleccionar_animo": "Select your mood:", "diario.guardar": "Save Entry", "diario.guardado_titulo": "Entry Saved", "diario.guardado_msg": "You earned +15 XP and +20 Coins for expressing your feelings!", "diario.vacio_titulo": "Empty Diary", "diario.vacio_msg": "Please write a few words before saving.", "estado.feliz": "Happy", "estado.triste": "Sad", "estado.enojado": "Angry", "estado.sorprendido": "Surprised", "estado.motivado": "Motivated", "noche.titulo": "Time to rest!", "noche.mensaje": "You did an amazing job today. You and Azurebill have come so far, but now it's time to pause, relax your mind, and get a restful sleep. Good night and sweet dreams! 🌙✨", "dormido.estudiar": "Shh... Azurebill is fast asleep. You can't study right now.", "dormido.alimentar": "Azurebill is deep in dreamland, she won't eat right now.", "dormido.gacha": "Don't even try... Azurebill is sleeping and won't open boxes.", "dormido.item": "She's out cold! Save that item for when she wakes up.", "logro.desbloqueado_titulo": "🏆 ACHIEVEMENT UNLOCKED!", "logro.desbloqueado_msg": "You completed the achievement:", "logro.tacano.titulo": "Extreme Cheapskate", "logro.tacano.desc": "Let Azurebill's hunger or energy reach 0%.", "logro.obesidad.titulo": "Obesity, Diabetes or High Cholesterol?", "logro.obesidad.desc": "Feed her 10 times in a row when hunger is at 100%.", "logro.intoxicada.titulo": "Congrats, You Poisoned Her!", "logro.intoxicada.desc": "Feed her the burnt food, the strange food, the stewed mice or the Macaco Soup seasoning.", "logro.encoma.titulo": "Focused... Or in a Coma?", "logro.encoma.desc": "Leave her studying for 3 Pomodoro sessions with no rest.", "logro.3am.titulo": "Why Are You Waking Me Up?", "logro.3am.desc": "Open the app at 3:00 AM.", "logro.sueno.titulo": "Sleep Disorder", "logro.sueno.desc": "Change bedtime to 18:00 or 23:00 in settings.", "logro.clicks.titulo": "Click Stalker", "logro.clicks.desc": "Click on Azurebill 20 times in under 10 seconds.", "logro.agua5.titulo": "Pro Hydrated", "logro.agua5.desc": "Drink 5 glasses of water.", "logro.agua15.titulo": "Fish Out of Water", "logro.agua15.desc": "Drink 15 glasses of water in total.", "logro.pausa3.titulo": "Healthy Body", "logro.pausa3.desc": "Complete 3 active breaks.", "logro.estatua.titulo": "Ivory Statue", "logro.estatua.desc": "Ignore 3 active break alarms in a row.", "logro.pomodoro1.titulo": "Model Student", "logro.pomodoro1.desc": "Complete 1 Pomodoro study session.", "logro.pomodoro5.titulo": "Full-Time Nerd", "logro.pomodoro5.desc": "Complete 5 study sessions.", "logro.buho.titulo": "Night Owl", "logro.buho.desc": "Keep studying past 10:00 PM.", "logro.madrugador.titulo": "Early Bird by Force", "logro.madrugador.desc": "Start a study session before 7:00 AM.", "logro.gacha5.titulo": "Beginner Collector", "logro.gacha5.desc": "Pull 5 items from the gacha machine.", "logro.bancarrota.titulo": "Imminent Bankruptcy", "logro.bancarrota.desc": "Spend your last coins and hit 0.", "logro.diogenes.titulo": "Hoarder Syndrome", "logro.diogenes.desc": "Accumulate 10 or more duplicate items in backpack.", "logro.disgusto.titulo": "Unwanted Gift", "logro.disgusto.desc": "Give her the strawberry ice cream, which she really dislikes.", "logro.gacha20.titulo": "Shopaholic", "logro.gacha20.desc": "Pull 20 items from gacha in total.", "logro.nivel2.titulo": "On the Rise", "logro.nivel2.desc": "Reach Level 2.", "logro.nivel5.titulo": "Desk Veteran", "logro.nivel5.desc": "Reach Level 5.", "logro.nivel10.titulo": "Max Level Enjoyer", "logro.nivel10.desc": "Reach Level 10.", "logro.poliglota.titulo": "Confused Polyglot", "logro.poliglota.desc": "Switch app language between Spanish, English, and Chinese 5 times.", "logro.turista.titulo": "Visual Tourist", "logro.turista.desc": "Change stage background 10 times.", "logro.silencio.titulo": "Heavenly Silence", "logro.silencio.desc": "Mute profile music for the first time.", "logro.diario1.titulo": "Dear Diary...", "logro.diario1.desc": "Write your first diary entry.", "logro.drama.titulo": "Drama Queen", "logro.drama.desc": "Log an Angry or Sad mood in your diary.", "logro.positividad.titulo": "Toxic Positivity", "logro.positividad.desc": "Log 5 Happy moods in a row.", "logro.diario10.titulo": "Personal Historian", "logro.diario10.desc": "Accumulate 10 entries in diary.", "resumen.titulo": "Nightly Summary", "resumen.hoy": "Summary of what you achieved today", "resumen.vasos": "glasses of water drunk", "resumen.pausas": "active breaks completed", "logro.btn_aceptar": "Awesome!", "logro.monedas_ganadas": "Coins"}, "zh": {"login.title": "登录", "login.user": "用户名:", "login.pass": "密码:", "login.btn_login": "登录", "login.btn_register": "注册", "login.lang": "语言 / Language / Idioma:", "profile.title": "✨ 玩家资料 ✨", "profile.user": "👤 用户:", "profile.level": "⭐ 等级:", "profile.coins": "🪙 金币:", "profile.inventory": "🎒 物品栏:", "profile.music": "🎵 音频控制:", "profile.btn_mute": "🔇 暂停 / 恢复音乐", "profile.bio_title": "📖 Azurebill 是谁？", "profile.bio": "Azurebill 是一个独一无二、友好的角色，会通过温馨的提醒帮助你管理屏幕使用时间。\\n\\n记住：你要照顾好自己，也要照顾好 Azurebill！", "profile.btn_close": "关闭", "empty": "空", "main.btn_profile": "个人资料", "main.lbl_hambre": "饥饿度", "main.lbl_energia": "精力", "main.btn_alimentar": "喂食", "main.btn_gacha": "扭蛋机", "main.btn_estudiar": "学习", "main.btn_fondo": "更换背景", "main.estado_prefix": "状态:", "alerta.agua.titulo": "💧 补充水分时间", "alerta.agua.mensaje": "Azurebill 提醒你喝一口水，顺便伸展一下双臂！", "alerta.pausa.titulo": "🏃 活动休息", "alerta.pausa.mensaje": "你已经盯着屏幕 30 分钟了！站起来走动一下，让眼睛休息一会儿。", "alerta.exceso.titulo": "😡 使用屏幕时间过长！", "alerta.exceso.mensaje": "你已经连续 1 个小时没有休息了！Azurebill 生气了，你扣除了 20 XP。快去好好休息一下！", "gacha.insufficient_title": "金币不足", "gacha.insufficient_msg": "你需要至少 50 个金币才能打开扭蛋盒。", "gacha.new_item_title": "获得新物品！", "gacha.got_prefix": "你获得了：", "gacha.saved_inventory": "物品已存入你的背包。", "inventory.give": "给 Azurebill", "item.caja": "惊喜盲盒", "item.comidaquemada": "烧焦的食物", "item.comidarara": "奇怪的食物", "item.tartaglia": "达达利亚", "item.dinero": "一捆钞票", "item.fajodebilletes": "一捆钞票", "item.flor": "装饰花朵", "item.flower": "花朵", "item.helado": "普通冰淇淋", "item.heladofresa": "草莓冰淇淋", "item.heladooreo": "奥利奥冰淇淋", "item.laptop": "游戏笔记本电脑", "item.microfono": "录音麦克风", "item.musica": "音乐光盘", "item.nintendo": "Nintendo 游戏机", "item.nintendoconsole": "任天堂游戏机", "item.paintpalette": "调色板", "item.pintura": "艺术画作", "item.pizza": "披萨切片", "item.sandwichqueso": "芝士三明治", "item.sandwichdequeso": "芝士三明治", "item.sandwichqueso2": "双重芝士三明治", "item.te": "一杯茶", "item.te2": "热茶", "item.camaroncontrompeta": "吹喇叭的虾", "item.hojaotonal": "秋叶", "item.book": "书", "item.librodemagia": "魔法书", "item.gatonegro": "黑猫", "item.ditto": "百变怪", "item.gengar": "耿鬼", "item.globos": "气球", "item.tocadiscos": "留声机", "item.pancake": "松饼", "item.ratonesguisados": "炖老鼠", "item.sazonquedicesopademacaco": "猕猴汤调料", "diario.titulo": "心情日记", "diario.placeholder": "写下你今天的想法或感受...", "diario.seleccionar_animo": "选择你的心情：", "diario.guardar": "保存日记", "diario.guardado_titulo": "日记已保存", "diario.guardado_msg": "记录心情获得 +15 经验值和 +20 金币！", "diario.vacio_titulo": "内容为空", "diario.vacio_msg": "请在保存前写几句话。", "estado.feliz": "开心", "estado.triste": "难过", "estado.enojado": "生气", "estado.sorprendido": "惊讶", "estado.motivado": "充满动力", "noche.titulo": "该休息了！", "noche.mensaje": "你今天做得太棒了！你和Azurebill都努力了很久，但现在是时候停下来、放松一下心情，好好休息了。晚安，祝你做个好梦！🌙✨", "dormido.estudiar": "嘘... Azurebill 已经睡着了，现在不能学习哦。", "dormido.alimentar": "Azurebill 正在熟睡中，现在吃不下东西。", "dormido.gacha": "别试啦... Azurebill 正在睡觉，现在不会打开扭蛋盒。", "dormido.item": "她睡得太沉了！先把道具存着，等她醒来再说吧。", "logro.desbloqueado_titulo": "🏆 解锁成就！", "logro.desbloqueado_msg": "你完成了成就：", "logro.tacano.titulo": "极致抠门", "logro.tacano.desc": "让 Azurebill 的饥饿度或精力值降为 0%。", "logro.obesidad.titulo": "肥胖、糖尿病还是高血脂？", "logro.obesidad.desc": "在饥饿度 100% 的情况下连续喂食 10 次。", "logro.intoxicada.titulo": "恭喜你，把她毒倒了！", "logro.intoxicada.desc": "喂她吃烧焦的食物、奇怪的食物、炖老鼠或猕猴汤调料。", "logro.encoma.titulo": "专注... 还是昏迷了？", "logro.encoma.desc": "让她连续学习 3 个番茄钟且不休息。", "logro.3am.titulo": "干嘛这么早叫醒我？", "logro.3am.desc": "在凌晨 3:00 打开应用程序。", "logro.sueno.titulo": "睡眠障碍", "logro.sueno.desc": "在设置中将睡觉时间修改为 18:00 或 23:00。", "logro.clicks.titulo": "连点狂魔", "logro.clicks.desc": "在 10 秒内点击 Azurebill 20 次。", "logro.agua5.titulo": "补水达人", "logro.agua5.desc": "喝 5 杯水。", "logro.agua15.titulo": "离水之鱼", "logro.agua15.desc": "累计喝 15 杯水。", "logro.pausa3.titulo": "强身健体", "logro.pausa3.desc": "完成 3 次活动休息。", "logro.estatua.titulo": "象牙雕像", "logro.estatua.desc": "连续无视 3 次活动休息提醒。", "logro.pomodoro1.titulo": "模范学生", "logro.pomodoro1.desc": "完成 1 次番茄钟学习。", "logro.pomodoro5.titulo": "全职学霸", "logro.pomodoro5.desc": "完成 5 次学习环节。", "logro.buho.titulo": "夜猫子", "logro.buho.desc": "晚上 10:00 之后继续学习。", "logro.madrugador.titulo": "被迫早起", "logro.madrugador.desc": "在早上 7:00 之前开始学习。", "logro.gacha5.titulo": "新手收藏家", "logro.gacha5.desc": "在扭蛋机中抽取 5 个物品。", "logro.bancarrota.titulo": "濒临破产", "logro.bancarrota.desc": "花光最后的金币，变为 0 币。", "logro.diogenes.titulo": "囤积狂", "logro.diogenes.desc": "背包中累计 10 个或以上重复物品。", "logro.disgusto.titulo": "嫌弃的礼物", "logro.disgusto.desc": "给她草莓冰淇淋，她非常不喜欢。", "logro.gacha20.titulo": "剁手党", "logro.gacha20.desc": "累计抽取 20 次扭蛋。", "logro.nivel2.titulo": "蒸蒸日上", "logro.nivel2.desc": "达到 2 级。", "logro.nivel5.titulo": "桌前老手", "logro.nivel5.desc": "达到 5 级。", "logro.nivel10.titulo": "满级大佬", "logro.nivel10.desc": "达到 10 级。", "logro.poliglota.titulo": "混乱的多语言者", "logro.poliglota.desc": "在西班牙语、英语和中文之间切换语言 5 次。", "logro.turista.titulo": "风景游客", "logro.turista.desc": "切换场景背景 10 次。", "logro.silencio.titulo": "天籁之静", "logro.silencio.desc": "首次在个人资料中静音背景音乐。", "logro.diario1.titulo": "亲爱的日记...", "logro.diario1.desc": "写下你的第一篇日记。", "logro.drama.titulo": "戏剧女王", "logro.drama.desc": "在日记中记录“难过”或“生气”的心情。", "logro.positividad.titulo": "毒性正能量", "logro.positividad.desc": "连续记录 5 次“开心”的心情。", "logro.diario10.titulo": "个人历史学家", "logro.diario10.desc": "累计记录 10 篇日记。", "resumen.titulo": "夜间总结", "resumen.hoy": "今日成果总结", "resumen.vasos": "杯饮用水", "resumen.pausas": "次活动休息", "logro.btn_aceptar": "太棒了！", "logro.monedas_ganadas": "金币"}};
let idiomaActual=localStorage.getItem("az_idioma")||"es", progresoLogros={}, logrosHechos=[];

// Traducciones adicionales de todos los paneles y avisos móviles.
const UI_TEXT={
 'Tu compañera para cuidar tu tiempo en pantalla 💜':['Your companion for healthier screen time 💜','陪伴你健康管理屏幕时间 💜'],
 'Mochila':['Inventory','背包'],'Alimentar':['Feed','喂食'],'Caja gacha':['Gacha box','扭蛋盒'],'Abrir caja':['Open box','打开盒子'],
 'Fondo y música':['Background and music','背景与音乐'],'Diario de ánimo':['Mood Diary','心情日记'],'Diario':['Diary','日记'],'Perfil':['Profile','个人资料'],
 'Logros':['Achievements','成就'],'Usuario':['Username','用户名'],'Nivel':['Level','等级'],'Monedas':['Coins','金币'],
 'Personalizar horarios':['Customize schedules','自定义时间表'],'Alarma agua (min)':['Water reminder (min)','饮水提醒（分钟）'],
 'Pausa activa (min)':['Active break (min)','活动休息（分钟）'],'Sesión de estudio (min)':['Study session (min)','学习时长（分钟）'],
 'Hora de cierre (0-23)':['Bedtime (0–23)','睡眠时间（0–23）'],'Guardar ajustes':['Save settings','保存设置'],
 'Activar notificaciones':['Enable notifications','启用通知'],'Cerrar sesión':['Sign out','退出登录'],
 '¿Quién es Azurebill?':['Who is Azurebill?','Azurebill 是谁？'],'Hambre':['Hunger','饥饿'],
 'Felicidad':['Happiness','快乐'],'Energía':['Energy','精力'],'Toca para cerrar':['Tap to dismiss','点击关闭'],
 'Resumen Nocturno':['Nightly summary','夜间总结'],'Sesión cancelada':['Session cancelled','学习已取消'],
 'Sesión terminada':['Session complete','学习完成'],'Ajustes guardados':['Settings saved','设置已保存'],
 'Te faltan monedas 🪙':['Not enough coins 🪙','金币不足 🪙'],
 'Conectado a la nube ☁️':['Connected to cloud ☁️','已连接云端 ☁️'],
 'Modo local (sin nube): los datos se guardan solo en este dispositivo':['Offline mode: data is stored only on this device','离线模式：数据仅保存在本设备'],
 'No se pudo conectar. Revisa tu internet 🌐':['Connection failed. Check your internet 🌐','连接失败，请检查网络 🌐'],
 'Usuario o contraseña incorrectos':['Incorrect username or password','用户名或密码错误'],
 'Escribe usuario y contraseña':['Enter username and password','请输入用户名和密码'],
 'Está vacía. ¡Prueba la caja gacha! 🎁':['Empty! Try the gacha box 🎁','空空如也！试试扭蛋盒 🎁'],
 'Toca un objeto para dárselo a Azurebill':['Tap an item to give it to Azurebill','点击物品送给 Azurebill'],
 'Guardar entrada':['Save entry','保存日记'],'Selecciona tu estado de ánimo':['Choose your mood','选择你的心情'],
 'Feliz':['Happy','开心'],'Triste':['Sad','难过'],'Enojado':['Angry','生气'],'Sorprendido':['Surprised','惊讶'],'Motivado':['Motivated','充满动力']
};
const EXTRA_TEXT={"Toca para cerrar": ["Tap to dismiss", "点击关闭"], "(toca para cancelar)": ["(tap to cancel)", "（点击取消）"], "Vasos de agua": ["Glasses of water", "喝水杯数"], "Pausas activas": ["Active breaks", "活动休息次数"], "A la hora de cierre Azurebill se duerme hasta las 5:00 y se bloquean alimentar, estudiar, gacha y objetos.": ["At bedtime, Azurebill sleeps until 5:00 AM. Feeding, studying, gacha and items are unavailable.", "到了睡觉时间，Azurebill 会睡到凌晨5点，期间无法喂食、学习、抽扭蛋或使用物品。"], "¿Quién es Azurebill?": ["Who is Azurebill?", "Azurebill 是谁？"], "Azurebill es un personaje único y amigable que te ayudará a gestionar tu tiempo en pantalla con recordatorios amigables.": ["Azurebill is a friendly, one-of-a-kind companion who helps you manage screen time with gentle reminders.", "Azurebill 是一位独特而友善的伙伴，通过温馨提醒帮助你管理屏幕使用时间。"], "Recuerda: ¡tienes que cuidarte a ti y a Azurebill!": ["Remember to take care of yourself and Azurebill!", "记得照顾好自己，也要照顾好 Azurebill！"], "Calendario de emociones": ["Mood calendar", "心情日历"], "Entradas este mes:": ["Entries this month:", "本月记录："], "Entradas del ": ["Entries for ", "当日记录："], "Hoy": ["Today", "今天"], "Escribir entrada": ["Write entry", "写日记"], "No escribiste nada este día.": ["No entries for this day.", "这一天没有记录。"], "¡Le encanta: ": ["She loves: ", "她超喜欢："], "No le gustó: ": ["She did not like: ", "她不喜欢："], "Sesión cancelada": ["Session cancelled", "学习已取消"], "Sesión terminada": ["Session complete", "学习完成"], "¡Buen trabajo!": ["Great job!", "做得好！"], "Descansa un momento.": ["Take a short break.", "休息一下吧。"], "¡A estudiar ": ["Time to study for ", "开始学习 "], " min!": [" min!", " 分钟！"], "Sopa de Macaco": ["Macaco Soup", "猕猴汤"], "Sazón \"Sopa de Macaco\"": ["\"Macaco Soup\" Seasoning", "猕猴汤调料"], "Personalizar horarios": ["Customize schedules", "自定义时间安排"], "Alarma agua (min)": ["Water reminder (min)", "喝水提醒（分钟）"], "Pausa activa (min)": ["Active break (min)", "活动休息（分钟）"], "Sesión de estudio (min)": ["Study session (min)", "学习时长（分钟）"], "Hora de cierre (0-23)": ["Bedtime (0–23)", "睡觉时间（0–23）"], "Guardar ajustes": ["Save settings", "保存设置"], "Activar notificaciones": ["Enable notifications", "启用通知"], "Cerrar sesión": ["Sign out", "退出登录"], "Ver calendario": ["View calendar", "查看日历"], "Fondo y música": ["Backgrounds & music", "背景与音乐"], "Principal": ["Main", "主场景"], "Lluvia": ["Rain", "雨天"], "Playa de noche": ["Night beach", "夜晚海滩"], "Cementerio": ["Cemetery", "墓地"], "Mundo extraño": ["Strange world", "奇异世界"], "Cueva con agua": ["Water cave", "水洞"], "Cascada": ["Waterfall", "瀑布"], "Castillo nocturno": ["Night castle", "夜间城堡"], "Música activada": ["Music on", "音乐已开启"], "Música desactivada": ["Music off", "音乐已关闭"], "Los fondos y canciones se descargan al elegirlos.": ["Backgrounds and songs are downloaded when selected.", "选择后才会下载背景和歌曲。"], "Usuario": ["Username", "用户名"], "Nivel": ["Level", "等级"], "Monedas": ["Coins", "金币"]};
Object.assign(EXTRA_TEXT,{"🌍 Zona horaria:": ["🌍 Time zone:", "🌍 时区："]});
Object.assign(EXTRA_TEXT,{"⚠️ No se pudo usar el objeto. Revisa tu conexión": ["⚠️ Could not use the item. Check your connection", "⚠️ 无法使用该物品，请检查网络"], "⚠️ Ese objeto ya no está en tu mochila": ["⚠️ That item is no longer in your backpack", "⚠️ 该物品已不在你的背包中"]});
Object.assign(EXTRA_TEXT,{"Escribiste otra palabra: no se eliminó nada": ["You typed a different word: nothing was deleted", "你输入了其他词：未删除任何内容"], "✅ Cuenta eliminada": ["✅ Account deleted", "✅ 账号已删除"], "⚠️ No se pudo eliminar la cuenta. Revisa tu conexión e inténtalo otra vez": ["⚠️ Could not delete the account. Check your connection and try again", "⚠️ 无法删除账号。请检查网络后重试"], "🗑️ Eliminar mi cuenta": ["🗑️ Delete my account", "🗑️ 删除我的账号"], "Política de privacidad": ["Privacy policy", "隐私政策"], " (Llegaste al tope diario de recompensas de estudio.)": [" (You reached today's study reward limit.)", " （你已达到今日学习奖励上限。）"], "¡Buen trabajo! Descansa un momento.": ["Great job! Take a short break.", "干得好！休息一下。"]});
Object.assign(EXTRA_TEXT,{"Sin conexión: se reintentará al siguiente cambio": ["No connection: will retry on the next change", "无网络连接：下次更改时将重试"], "¡Subiste al nivel ": ["You reached level ", "你升到了等级 "], "Este navegador no admite notificaciones": ["This browser does not support notifications", "此浏览器不支持通知"], "Revisa la URL (https://…) y la clave": ["Check the URL (https://…) and the key", "请检查网址 (https://…) 和密钥"], "Activa las notificaciones para que Azurebill te avise": ["Enable notifications so Azurebill can remind you", "请开启通知，以便 Azurebill 提醒你"], "🔔 Mientras no estabas:": ["🔔 While you were away:", "🔔 你不在时："], " 💧 y ": [" 💧 and ", " 💧 和 "], " contados": [" counted", " 已计入"], "🔔 Alarmas en segundo plano activadas": ["🔔 Background alarms enabled", "🔔 已启用后台提醒"], "🔔 Notificaciones activadas": ["🔔 Notifications enabled", "🔔 已启用通知"], "No se activaron las notificaciones": ["Notifications were not enabled", "未启用通知"], "⚠️ Escribe unas palabras antes de guardar": ["⚠️ Write a few words before saving", "⚠️ 保存前请先写几个字"], "📖 Llegaste al máximo de 10 entradas de hoy. Vuelve mañana 💜": ["📖 You reached today's limit of 10 entries. Come back tomorrow 💜", "📖 今天已达到 10 条记录上限，明天再来吧 💜"], "⚠️ No se pudo guardar la entrada. Revisa tu conexión": ["⚠️ Could not save the entry. Check your connection", "⚠️ 无法保存日记，请检查网络"], "⚠️ No se pudo cargar el diario. Revisa tu conexión": ["⚠️ Could not load the diary. Check your connection", "⚠️ 无法加载日记，请检查网络"], "No se guardó el idioma en la nube": ["Language was not saved to the cloud", "语言未保存到云端"], "Sin conexión: idioma solo en este dispositivo": ["No connection: language saved only on this device", "无网络：语言仅保存在本设备"], " (No se pudo validar la recompensa en monedas.)": [" (The coin reward could not be verified.)", " （无法验证金币奖励。）"], "✨ Entrada guardada: +15 XP y +20 🪙": ["✨ Entry saved: +15 XP and +20 🪙", "✨ 日记已保存：+15 XP 和 +20 🪙"], "📖 Entrada guardada. La recompensa de hoy ya se cobró; vuelve mañana por más 💜": ["📖 Entry saved. Today's reward was already claimed; come back tomorrow for more 💜", "📖 日记已保存。今天的奖励已领取，明天再来吧 💜"], "Puedes registrar varias emociones al día. La recompensa diaria (+20 🪙) se cobra solo la primera vez.": ["You can log several moods per day. The daily reward (+20 🪙) is only paid the first time.", "你每天可以记录多种心情。每日奖励（+20 🪙）只在第一次时发放。"], " XP y +": [" XP and +", " XP，+"]});
Object.assign(EXTRA_TEXT,{"Está vacía. ¡Prueba la caja gacha! 📦":["It's empty. Try the gacha box! 📦","空空如也。试试扭蛋盒吧！📦"]," (No se pudo validar la recompensa en monedas.)":[" (The coin reward could not be verified.)"," （无法验证金币奖励。）"],"Ese usuario ya existe (o datos muy cortos)":["That username already exists (or the data is too short)","该用户名已存在（或内容太短）"],"No se pudo cargar el diario. Revisa tu conexión":["Could not load the diary. Check your connection","无法加载日记，请检查网络"],"No se guardó el idioma en la nube":["Language was not saved to the cloud","语言未保存到云端"]});
function traducirTexto(value){
 if(idiomaActual==='es')return String(value);
 let out=String(value); const ix=idiomaActual==='en'?0:1;
 for(const [es,translations] of Object.entries({...UI_TEXT,...EXTRA_TEXT}).sort((a,b)=>b[0].length-a[0].length)){
  out=out.split(es).join(translations[ix]);
 }
 // Match original desktop translation keys for complete phrases and item names.
 const source=TRAD.es||{}, dest=TRAD[idiomaActual]||{};
 for(const [key,spanish] of Object.entries(source)){
  if(typeof spanish==='string'&&spanish.length>2&&dest[key]&&dest[key]!==spanish)out=out.split(spanish).join(dest[key]);
 }
 return decodificarUnicode(out);
}
function traducirArbol(root){
 if(!root||idiomaActual==='es')return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{if(n.parentElement&& !['SCRIPT','STYLE','TEXTAREA'].includes(n.parentElement.tagName))n.textContent=traducirTexto(n.textContent);});
 root.querySelectorAll('[placeholder]').forEach(el=>el.placeholder=traducirTexto(el.placeholder));
}

const traducir=(k,def="")=>decodificarUnicode((TRAD[idiomaActual]&&TRAD[idiomaActual][k])||(TRAD.es&&TRAD.es[k])||def||k);
function decodificarUnicode(v){return String(v).replace(/\\u([0-9a-fA-F]{4})/g,(_,hex)=>String.fromCharCode(parseInt(hex,16)));}
function claveExtra(){return "az_extra_"+String(S&&S.nombre||"").toLowerCase();}
function cargarExtras(nombre){try{const v=JSON.parse(localStorage.getItem("az_extra_"+nombre.toLowerCase()))||{};progresoLogros=v.progreso||{};logrosHechos=v.hechos||[]}catch(e){progresoLogros={};logrosHechos=[];}}
function guardarExtras(){if(S)localStorage.setItem(claveExtra(),JSON.stringify({progreso:progresoLogros,hechos:logrosHechos}));}
// Logros que el servidor calcula y otorga por su cuenta: el navegador NO puede declararlos en modo nube.
const LOGROS_SERVIDOR=new Set(["querido_diario","historiador","drama_queen","positividad_toxica","gacha_5","gastonomano","bancarrota","diogenes","estudiante_ejemplar","nerd_tiempo_completo","encoma_estudio","buho_nocturno","madrugador_obligacion","nivel_2","nivel_5","nivel_10","hidrata_5","hidrata_15","cuerpo_sano","intoxicada","regalo_no_deseado","poliglota","trastorno_sueno","despierto_3am"]);
let ultimoEnviado={}, rachaHambre=0;
function evaluarLogro(id,valor){ if(!S||logrosHechos.includes(id))return; const a=LOGROS_DEF.find(x=>x.id===id); if(!a)return;
 if(ONLINE&&LOGROS_SERVIDOR.has(id))return;
 const v=Math.max(0,Math.min(a.target,Math.floor(+valor||0)));
 progresoLogros[id]=Math.max(progresoLogros[id]||0,v);
 if(ONLINE){ if((ultimoEnviado[id]||0)<progresoLogros[id]){ultimoEnviado[id]=progresoLogros[id];sincronizarLogro(id,progresoLogros[id]);} }
 else if(progresoLogros[id]>=a.target){logrosHechos.push(id);S.monedas_gacha+=a.coins;guardar();aviso("🏆 "+traducir(a.title)+" +"+a.coins+" 🪙");pintar();}
 guardarExtras();}
// Aplica los logros que el servidor devolvió junto con una acción (diario, gacha, estudio).
function aplicarLogrosServidor(lista){
 (lista||[]).forEach(r=>{ if(!r||!r.id)return; const a=LOGROS_DEF.find(x=>x.id===r.id);
  progresoLogros[r.id]=Math.max(progresoLogros[r.id]||0,r.progreso||0);
  if(r.completado&&!logrosHechos.includes(r.id)){ logrosHechos.push(r.id); if(r.nuevo)aviso("🏆 "+traducir(a?a.title:r.id)+" +"+(r.premio||0)+" 🪙"); } });
 guardarExtras(); }
// Zona horaria del dispositivo (solo el nombre, p. ej. "Asia/Shanghai"; no es la ubicación ni usa GPS).
function zonaLocal(){ try{ return Intl.DateTimeFormat().resolvedOptions().timeZone||""; }catch(e){ return ""; } }
let zonaEnviada="", zonaIntento=0;
// El servidor usa esta zona para saber qué día es, los topes diarios y los logros de horario.
// Si cambias de zona, el servidor la acepta como máximo una vez cada 24 h; se reintenta cada 30 min.
async function sincronizarZona(){ if(!ONLINE||!azSession)return; const tz=zonaLocal();
 if(!tz||tz===zonaEnviada||Date.now()-zonaIntento<30*60000)return; zonaIntento=Date.now();
 try{ const r=await rpc("az_auth_zona_guardar",{p_zona:tz}); if(r&&r.ok&&r.zona===tz)zonaEnviada=tz; }catch(e){ console.error("Zona horaria:",e); } }
// Pide al servidor que registre un evento de salud (agua, pausa, exceso) y aplica su respuesta.
async function eventoServidor(tipo){ try{ const r=await rpc("az_auth_xp_evento",{p_tipo:tipo}); if(r&&r.ok){ aplicarEstado(r); aplicarLogrosServidor(r.logros); return r; } }catch(e){ console.error("Evento "+tipo+":",e); } return null; }
// Copia al estado local lo que el servidor decidió (nivel, XP, contadores, monedas).
function aplicarEstado(r){ if(!r||!S)return; if(r.nivel!==undefined){ S.nivel=r.nivel; S.puntos_experiencia=r.puntos_experiencia; }
 if(r.vasos!==undefined)S.vasos_agua_tomados=r.vasos; if(r.pausas!==undefined)S.pausas_realizadas=r.pausas; if(r.monedas!==undefined)S.monedas_gacha=r.monedas;
 if(r.subio){ gif("saltaconlamanoarriba"); aviso("🎉 ¡Subiste al nivel "+S.nivel+"!"); } pintar(); }
// "10 veces seguidas con el hambre al 100%": la racha se reinicia si comes sin estar al 100%.
function registrarComida(hambreAntes){ rachaHambre=hambreAntes>=100?rachaHambre+1:0; evaluarLogro("obesidad_azurebill",rachaHambre); }
// "Ignora 3 alarmas de pausa seguidas": ignorar = dejar que el aviso se cierre solo sin tocarlo.
function alarmaPausaCerrada(porToque){ if(porToque){pausasIgnoradas=0;}else{pausasIgnoradas++;evaluarLogro("estatua_marfil",pausasIgnoradas);} }
// Se ejecuta al iniciar sesión y al volver a la app.
function evaluarInicio(){ if(!S)return;
 evaluarLogro("nivel_2",S.nivel>=2?1:0); evaluarLogro("nivel_5",S.nivel>=5?1:0); evaluarLogro("nivel_10",S.nivel>=10?1:0);
 evaluarLogro("hidrata_5",S.vasos_agua_tomados||0); evaluarLogro("hidrata_15",S.vasos_agua_tomados||0); evaluarLogro("cuerpo_sano",S.pausas_realizadas||0);
 if(new Date().getHours()===3){ if(ONLINE)eventoServidor("revisar"); else evaluarLogro("despierto_3am",1); } }
function logros(){if(!S)return;abrir('<h3>🏆 '+({es:'Logros',en:'Achievements',zh:'成就'}[idiomaActual])+' ('+logrosHechos.length+'/'+LOGROS_DEF.length+')</h3>'+
 LOGROS_DEF.map(a=>{const p=Math.min(a.target,progresoLogros[a.id]||0),hecho=logrosHechos.includes(a.id);return '<div class="logro"><b>'+(hecho?'🏆 ':'🔒 ')+traducir(a.title)+'</b><p>'+traducir(a.desc)+'</p><div class="b"><i style="width:'+(p/a.target*100)+'%;background:var(--ac)"></i></div><small>'+p+'/'+a.target+' · +'+a.coins+' 🪙</small></div>'}).join('')+
 '<p class="mini">'+({es:'El progreso se guarda en tu cuenta cuando hay conexión.',en:'Progress is saved to your account when online.',zh:'联网时进度会保存到你的账号。'}[idiomaActual])+'</p>');}
function aplicarIdioma(){
 document.documentElement.lang=idiomaActual; const cb=$("cerrar"); if(cb)cb.setAttribute('aria-label',({es:'Cerrar',en:'Close',zh:'关闭'})[idiomaActual]||'Cerrar');
 const sel=$("langLogin"); if(sel)sel.value=idiomaActual;
 const keys=['mochila','alimentar','gacha','estudiar','escenas','diario','perfil','logros'];
 const labels={es:['Mochila','Alimentar','Gacha','Estudiar','Lugares','Diario','Perfil','Logros'],en:['Inventory','Feed','Gacha','Study','Scenes','Diary','Profile','Achievements'],zh:['背包','喂食','扭蛋','学习','场景','日记','资料','成就']}[idiomaActual];
 keys.forEach((k,i)=>{const b=document.querySelector('#dock [data-a="'+k+'"]');if(b){b.setAttribute('aria-label',labels[i]);b.title=labels[i];[...b.childNodes].filter(n=>n.nodeType===3).forEach(n=>n.remove());}});
 document.querySelectorAll('#stats > div').forEach((e,i)=>{const n=[...e.childNodes].find(n=>n.nodeType===3);if(n)n.textContent=({es:['Hambre','Felicidad','Energía'],en:['Hunger','Happiness','Energy'],zh:['饥饿','快乐','精力']}[idiomaActual]||[])[i]||'';});
 const u=$("u"),p=$("p");if(u)u.placeholder=traducir('login.user','Usuario').replace(':','');if(p)p.placeholder=traducir('login.pass','Contraseña').replace(':','');
 $("bEntrar").textContent=traducir('login.btn_login','Entrar');$("bReg").textContent=traducir('login.btn_register','Crear cuenta');authUi();
 const intro=document.querySelector('#login > p.mini');if(intro)intro.textContent=traducirTexto('Tu compañera para cuidar tu tiempo en pantalla 💜');
}
function idiomas(){abrir('<h3>🌐 Idioma / Language / 语言</h3><p class="mini">Selecciona el idioma de la interfaz. Las traducciones de logros provienen de la versión de escritorio.</p>'+[['es','Español 🇪🇸'],['en','English 🇬🇧'],['zh','中文 🇨🇳']].map(([k,n])=>'<button class="gr idioma-btn" data-lang="'+k+'" style="display:block;width:100%;margin:8px 0">'+n+(idiomaActual===k?' ✓':'')+'</button>').join(''));
 document.querySelectorAll('.idioma-btn').forEach(b=>b.onclick=()=>{const idiomaAnterior=idiomaActual;idiomaActual=b.dataset.lang;if(S&&idiomaAnterior!==idiomaActual)evaluarLogro("poliglota",(progresoLogros.poliglota||0)+1);localStorage.setItem('az_idioma',idiomaActual);aplicarIdioma();idiomas();if(S)programar();if(S&&ONLINE)rpc('az_auth_idioma_guardar',{p_idioma:idiomaActual}).then(ok=>{if(!ok)aviso('No se guardó el idioma en la nube'); else if(ok.logros)aplicarLogrosServidor(ok.logros);}).catch(()=>aviso('Sin conexión: idioma solo en este dispositivo')); });}
$("langLogin").addEventListener('change',async e=>{
 idiomaActual=e.target.value;localStorage.setItem('az_idioma',idiomaActual);aplicarIdioma();
});
aplicarIdioma();
if(ONLINE){authUi();$('bNp').onclick=guardarNuevaClave;const enlace=procesarEnlaceAuth();try{azSession=JSON.parse(localStorage.getItem('az_auth_session')||sessionStorage.getItem('az_auth_session')||'null');}catch(e){azSession=null;}if(azSession&&enlace!=='recovery'){authProfile().then(async ok=>{if(!ok&&!(await autoPerfil()))mostrarVincular();}).catch(e=>{console.warn('Auth restore',e); if(e instanceof TypeError||!/refresh|jwt|token|sesi|401|403|invalid|not found/i.test(String(e&&e.message))){ $('authStatus').textContent=authText('offline'); } else borrarSesion();});}}

// Sincronización de extras: las recompensas se acreditan únicamente desde PostgreSQL.
let sincronizacionesLogro=Promise.resolve();
async function cargarExtrasNube(){
 try{
  const d=await rpc('az_auth_extras_leer',{});
  if(!d)throw Error('Acceso rechazado');
  // La elección realizada en la pantalla de acceso tiene prioridad.
  idiomaActual=['es','en','zh'].includes(idiomaActual)?idiomaActual:(d.idioma||'es');
  localStorage.setItem('az_idioma',idiomaActual); aplicarIdioma();
  progresoLogros={};logrosHechos=[];
  for(const a of d.logros||[]){progresoLogros[a.id]=a.progreso;if(a.completado)logrosHechos.push(a.id);}
  ultimoEnviado={...progresoLogros}; guardarExtras();
 }catch(e){console.error('Sincronización de preferencias:',e);}
}
function sincronizarLogro(id,valor){
 sincronizacionesLogro=sincronizacionesLogro.then(async()=>{
  // Primero termina un guardado pendiente para evitar que app_guardar pise las monedas del premio.
  if(pend){clearTimeout(tG);await enviar();}
  const r=await rpc('az_auth_logro_progreso',{p_id_logro:id,p_progreso:valor});
  if(!r)throw Error('No se pudo guardar el logro');
  progresoLogros[id]=r.progreso;
  if(r.completado&&!logrosHechos.includes(id)){logrosHechos.push(id);aviso('🏆 '+traducir(LOGROS_DEF.find(x=>x.id===id)?.title||id)+' +'+(LOGROS_DEF.find(x=>x.id===id)?.coins||0)+' 🪙');}
  S.monedas_gacha=r.monedas;pintar();guardarExtras();
 }).catch(e=>{console.error('Sincronización de logros:',e); ultimoEnviado[id]=0; aviso(({es:'No se pudo sincronizar el logro',en:'Achievement sync failed',zh:'成就同步失败'}[idiomaActual]));});
}

if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
