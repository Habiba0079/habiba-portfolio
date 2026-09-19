import { useState } from 'react';
import Level from './Level.jsx';
import PixelArt from './PixelArt.jsx';
import { SKILLS, SKILL_TYPES } from '../data.js';

const TABS = [
  { id: 'all', label: 'All' },
  ...Object.entries(SKILL_TYPES).map(([id, t]) => ({ id, label: t.tab })),
];

const countFor = (tab) => (tab === 'all' ? SKILLS.length : SKILLS.filter((s) => s.type === tab).length);

// Skills as an inventory: pick a tab (skill type), pick an item to equip and read what it does.
export default function Skills() {
  const [tab, setTab] = useState('all');
  const [selectedId, setSelectedId] = useState('react');

  const visible = tab === 'all' ? SKILLS : SKILLS.filter((s) => s.type === tab);
  const selected = SKILLS.find((s) => s.id === selectedId) ?? SKILLS[0];
  const kind = SKILL_TYPES[selected.type];

  const chooseTab = (id) => {
    setTab(id);
    const list = id === 'all' ? SKILLS : SKILLS.filter((s) => s.type === id);
    if (!list.some((s) => s.id === selectedId)) setSelectedId(list[0].id);
  };

  const onTabKey = (event) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = null;
    if (event.key === 'ArrowRight') next = TABS[(i + 1) % TABS.length];
    if (event.key === 'ArrowLeft') next = TABS[(i - 1 + TABS.length) % TABS.length];
    if (next) {
      event.preventDefault();
      chooseTab(next.id);
      document.getElementById(`tab-${next.id}`)?.focus();
    }
  };

  return (
    <Level id="skills" world="1-2" title="Skills" subtitle="Choose your loadout" wide>
      <article className="panel loadout">
        <h3 className="panel-title">Loadout</h3>

        <div className="loadout-tabs" role="tablist" aria-label="Skill type" onKeyDown={onTabKey}>
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              className="tab"
              aria-selected={tab === t.id}
              aria-controls="loadout-panel"
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => chooseTab(t.id)}
            >
              {t.label}
              <span className="tab-count">{countFor(t.id)}</span>
            </button>
          ))}
        </div>

        <div className="loadout-body" role="tabpanel" id="loadout-panel" aria-labelledby={`tab-${tab}`}>
          <aside className="equipped" style={{ '--type': kind.color }} aria-live="polite">
            <div className="equipped-icon">
              <PixelArt icon={selected.icon} />
            </div>
            <span className="type-badge">{kind.label}</span>
            <h4 className="equipped-name">{selected.name}</h4>
            <p className="equipped-cat">
              <span>{kind.gear}</span>
              <span>{selected.category}</span>
            </p>
            <p className="equipped-desc">{selected.desc}</p>
          </aside>

          <ul className="slots">
            {visible.map((skill) => (
              <li key={skill.id}>
                <button
                  type="button"
                  className="slot-btn"
                  style={{ '--type': SKILL_TYPES[skill.type].color }}
                  aria-pressed={skill.id === selected.id}
                  onClick={() => setSelectedId(skill.id)}
                >
                  <PixelArt icon={skill.icon} />
                  <span className="slot-name">{skill.name}</span>
                  <span className="slot-kind">{SKILL_TYPES[skill.type].label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Level>
  );
}
