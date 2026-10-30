// Se comprueban funciones reales extraídas de app.js sin ejecutar la interfaz ni acceder a Supabase.
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('movil/app.js', 'utf8');
function loadConst(name) {
  const match = source.match(new RegExp(`(?:const |, )${name}=([^;]+);`));
  assert.ok(match, `No se encontró ${name} en app.js`);
  const line = `const ${name}=${match[1]};`;
  const context = vm.createContext({});
  return vm.runInContext(line + `\n${name}`, context);
}
const norm = loadConst('norm');
const cl = loadConst('cl');
test('normaliza un nombre válido de ítem con extensión', () => {
  assert.equal(norm('assets/assets-Items/Gato_Negro.PNG'), 'gatonegro');
});
test('mantiene valores de bienestar dentro del rango válido', () => {
  assert.equal(cl(75), 75);
});
test('caso límite: no permite bienestar fuera de 0 a 100', () => {
  assert.equal(cl(-15), 0);
  assert.equal(cl(150), 100);
});
