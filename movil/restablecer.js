"use strict";
// Página de "nueva contraseña". Recibe el enlace del correo de Supabase (#access_token=...&type=recovery).
const $=i=>document.getElementById(i);
const TXT={
 es:{t:'Crea tu nueva contraseña',info:'Escribe una contraseña nueva de al menos 8 caracteres.',p1:'Nueva contraseña',p2:'Repite la contraseña',go:'Guardar contraseña',saving:'Guardando…',short:'La contraseña debe tener al menos 8 caracteres.',mismatch:'Las contraseñas no coinciden.',ok:'✅ Contraseña actualizada. Ya puedes iniciar sesión con ella.',same:'La contraseña nueva debe ser distinta de la anterior.',weak:'La contraseña es demasiado débil. Prueba con otra más larga.',net:'No hay conexión con el servidor. Revisa tu internet.',bad:'El enlace no es válido o ya venció. Pide uno nuevo desde «¿Olvidaste tu contraseña?» en la app.',fail:'No se pudo cambiar la contraseña. Pide un enlace nuevo desde «¿Olvidaste tu contraseña?».',back:'Ir a Azurebill',backNew:'Volver a Azurebill',priv:'Política de privacidad',noCfg:'La app no está configurada.'},
 en:{t:'Create your new password',info:'Enter a new password with at least 8 characters.',p1:'New password',p2:'Repeat password',go:'Save password',saving:'Saving…',short:'The password must have at least 8 characters.',mismatch:'The passwords do not match.',ok:'✅ Password updated. You can now sign in with it.',same:'The new password must be different from the old one.',weak:'That password is too weak. Try a longer one.',net:'Cannot reach the server. Check your internet connection.',bad:'The link is invalid or has expired. Request a new one with "Forgot password?" in the app.',fail:'Could not change the password. Request a new link with "Forgot password?".',back:'Go to Azurebill',backNew:'Back to Azurebill',priv:'Privacy policy',noCfg:'The app is not configured.'},
 zh:{t:'创建新密码',info:'请输入至少 8 个字符的新密码。',p1:'新密码',p2:'重复密码',go:'保存密码',saving:'保存中…',short:'密码至少需要 8 个字符。',mismatch:'两次输入的密码不一致。',ok:'✅ 密码已更新，现在可以用新密码登录了。',same:'新密码不能与旧密码相同。',weak:'密码太弱，请换一个更长的密码。',net:'无法连接服务器，请检查网络。',bad:'链接无效或已过期。请在应用中通过“忘记密码？”重新获取。',fail:'无法修改密码。请通过“忘记密码？”重新获取链接。',back:'前往 Azurebill',backNew:'返回 Azurebill',priv:'隐私政策',noCfg:'应用尚未配置。'}
};
let lang=localStorage.getItem('az_idioma')||((navigator.language||'es').toLowerCase().startsWith('zh')?'zh':(navigator.language||'').toLowerCase().startsWith('en')?'en':'es');
if(!TXT[lang])lang='es';
let token=null,state='form',msgKey='';
// Lee el enlace y lo borra de la barra de direcciones para que el token no quede visible.
(function(){
 const h=location.hash.replace(/^#/,''); const p=new URLSearchParams(h);
 history.replaceState(null,'',location.pathname);
 if(p.get('access_token')&&!p.get('error_description')&&(p.get('type')==='recovery'||!p.get('type')))token=p.get('access_token');
 else state='bad';
})();
const cfg=window.AZ_CONFIG||{};
function paint(){
 const x=TXT[lang]; document.documentElement.lang=lang==='zh'?'zh-CN':lang; $('lang').value=lang;
 $('t').textContent=x.t; $('info').textContent=x.info; $('p1').placeholder=x.p1; $('p2').placeholder=x.p2;
 $('go').textContent=x.go; $('priv').textContent=x.priv;
 $('form').hidden=(state!=='form'); $('info').hidden=(state!=='form');
 $('back').hidden=(state==='form'); $('back').textContent=state==='done'?x.backNew:x.back;
 $('msg').textContent=msgKey?x[msgKey]:''; $('msg').className=state==='done'?'ok':(msgKey?'er':'');
}
$('lang').onchange=e=>{lang=e.target.value;localStorage.setItem('az_idioma',lang);paint();};
$('s1').onclick=()=>{const v=$('p1').type==='password';$('p1').type=v?'text':'password';$('p2').type=v?'text':'password';};
$('go').onclick=async()=>{
 if(!token){state='bad';msgKey='bad';return paint();}
 const a=$('p1').value,b=$('p2').value; msgKey='';
 if(a.length<8){msgKey='short';return paint();} if(a!==b){msgKey='mismatch';return paint();}
 if(!cfg.SUPABASE_URL||!cfg.SUPABASE_ANON_KEY){msgKey='noCfg';return paint();}
 $('go').disabled=true; $('go').textContent=TXT[lang].saving;
 try{
  const r=await fetch(new URL(cfg.SUPABASE_URL).origin+'/auth/v1/user',{method:'PUT',headers:{apikey:cfg.SUPABASE_ANON_KEY,'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify({password:a})});
  const d=await r.json().catch(()=>({}));
  if(!r.ok){const m=String(d.msg||d.error_description||d.message||'');
   if(r.status===401||r.status===403||/expired|invalid.*(jwt|token)|missing/i.test(m)){state='bad';msgKey='bad';}
   else if(/different from the old|same password/i.test(m))msgKey='same';
   else if(/weak|at least|short/i.test(m))msgKey='weak';
   else msgKey='fail';
   $('go').disabled=false; return paint();}
  // Por seguridad, cierra la sesión temporal de recuperación.
  fetch(new URL(cfg.SUPABASE_URL).origin+'/auth/v1/logout?scope=local',{method:'POST',headers:{apikey:cfg.SUPABASE_ANON_KEY,Authorization:'Bearer '+token}}).catch(()=>{});
  token=null; state='done'; msgKey='ok'; $('p1').value=$('p2').value=''; paint();
 }catch(e){ msgKey=(e&&(e instanceof TypeError||e.name==='TypeError'))?'net':'fail'; $('go').disabled=false; paint(); }
};
if(state==='bad')msgKey='bad';
paint();
