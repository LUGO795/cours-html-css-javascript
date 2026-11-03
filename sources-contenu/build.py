#!/usr/bin/env python3
"""Compile les fichiers de contenu (content/*.txt) en js/data.js.

Format :
  §§chapter <id>        début d'un chapitre
  cle: valeur           en-tête (avant le premier bloc)
  §bloc [option]        début d'un bloc (intro, example html, demo-css, ...)
"""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).parent
OUT = pathlib.Path(sys.argv[1])

def parse_quiz(text):
    qs, cur = [], None
    for line in text.splitlines():
        line = line.rstrip()
        if not line:
            continue
        tag, body = line[:1], line[2:].strip()
        if tag == '?':
            cur = {'q': body, 'options': [], 'answer': -1, 'why': ''}
            qs.append(cur)
        elif tag in '-+':
            if tag == '+':
                cur['answer'] = len(cur['options'])
            cur['options'].append(body)
        elif tag == '=':
            cur['why'] = body
    for q in qs:
        assert q['answer'] >= 0 and len(q['options']) >= 3, q
    return qs

def parse_checks(text):
    out = []
    for line in text.splitlines():
        if not line.strip():
            continue
        parts = [p.strip() for p in line.split(' | ')]
        out.append(parts)
    return out

def parse_file(path):
    chapters, cur, block, buf = [], None, None, []
    def flush():
        nonlocal buf
        if cur is not None and block is not None:
            text = '\n'.join(buf).strip('\n')
            name, opt = block
            if name == 'quiz':
                cur['quiz'] = parse_quiz(text)
            elif name == 'guided-checks':
                cur['checks'] = parse_checks(text)
            elif name in ('example', 'solution-code'):
                cur.setdefault(name, []).append({'lang': opt or 'html', 'code': text})
            else:
                cur[name] = text
        buf = []
    for raw in path.read_text(encoding='utf-8').splitlines():
        if raw.startswith('§§chapter'):
            flush(); block = None
            cur = {'id': raw.split()[1]}
            chapters.append(cur)
            continue
        if raw.startswith('§') and not raw.startswith('§§'):
            flush()
            bits = raw[1:].split(None, 1)
            block = (bits[0], bits[1].strip() if len(bits) > 1 else None)
            continue
        if block is None and cur is not None:
            m = re.match(r'^(\w+):\s*(.*)$', raw)
            if m:
                cur[m.group(1)] = m.group(2)
            continue
        buf.append(raw)
    flush()
    return chapters

def main():
    data = {'chapters': []}
    for name in ['html', 'css', 'js']:
        data['chapters'] += parse_file(ROOT / 'content' / f'{name}.txt')
    ns = {}
    exec((ROOT / 'content' / 'extra.py').read_text(encoding='utf-8'), ns)
    data.update(ns['EXTRA'])
    ids_set = set(c['id'] for c in data['chapters'])
    for f in data['filRouge']:
        for cid in f['chapitres']:
            assert cid in ids_set, f"fil rouge {f['id']} : chapitre inconnu {cid}" 
    ids = [c['id'] for c in data['chapters']]
    assert len(ids) == len(set(ids)), 'id en double'
    required = ['title', 'part', 'intro', 'example', 'explain', 'guided', 'checks', 'auto', 'solution', 'quiz', 'ondea']
    for c in data['chapters']:
        for k in required:
            assert k in c, f"{c['id']} : '{k}' manquant"
        assert len(c['quiz']) == 5, f"{c['id']} : {len(c['quiz'])} questions"
    js = ('/* Ondea Academy — contenu du cours (généré par build.py, ne pas modifier à la main).\n'
          '   Chaque chapitre : explication, exemple, démonstration, exercices, correction, QCM, lien Ondea. */\n'
          'window.COURS = ' + json.dumps(data, ensure_ascii=False, indent=1) + ';\n')
    OUT.write_text(js, encoding='utf-8')
    print(f"{len(data['chapters'])} chapitres, {sum(len(c['quiz']) for c in data['chapters'])} questions -> {OUT}")

main()
