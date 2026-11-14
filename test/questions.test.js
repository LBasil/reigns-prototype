// Vérifie les données du jeu sans lancer l'interface : le tableau `questions` est extrait de script.js.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const start = source.indexOf('const questions = [');
const end = source.indexOf('];', start) + 2;
const questions = vm.runInNewContext(source.slice(start, end).replace('const questions =', '(') .replace(/;$/, ')'));
const STATS = ['money', 'army', 'agriculture', 'love', 'health'];

test('il y a assez de questions pour une partie', () => {
  assert.ok(questions.length >= 30, `seulement ${questions.length} questions`);
});

test('chaque question a un texte et un effet entier sur les 5 jauges', () => {
  for (const q of questions) {
    assert.equal(typeof q.text, 'string');
    assert.ok(q.text.trim().endsWith('?'), `"${q.text}" ne finit pas par ?`);
    for (const stat of STATS) {
      assert.ok(Number.isInteger(q[stat]), `${q.text} : ${stat} n'est pas un entier`);
      assert.ok(Math.abs(q[stat]) <= 5, `${q.text} : effet ${stat} trop fort`);
    }
  }
});

test('pas de question en double', () => {
  const texts = questions.map((q) => q.text.trim().toLowerCase());
  assert.equal(new Set(texts).size, texts.length);
});

test('aucune question n\'est sans effet', () => {
  for (const q of questions) {
    assert.ok(STATS.some((s) => q[s] !== 0), `${q.text} n'a aucun effet`);
  }
});

test('équilibrage : aucune jauge ne penche massivement d\'un seul côté', () => {
  for (const stat of STATS) {
    const total = questions.reduce((sum, q) => sum + q[stat], 0);
    const positives = questions.filter((q) => q[stat] > 0).length;
    const negatives = questions.filter((q) => q[stat] < 0).length;
    assert.ok(positives > 0 && negatives > 0, `${stat} : toujours dans le même sens (total ${total})`);
  }
});
