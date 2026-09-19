// The checkpoints along the level. `prop` is what the character holds in each one.
export const SECTIONS = [
  { id: 'top', label: 'Start', world: 'Start', prop: null },
  { id: 'education', label: 'Education', world: '1-1', prop: 'cap' },
  { id: 'skills', label: 'Skills', world: '1-2', prop: 'sword' },
  { id: 'projects', label: 'Projects', world: '1-3', prop: 'laptop' },
  { id: 'trophies', label: 'Trophies', world: '1-4', prop: 'trophy' },
  { id: 'contact', label: 'Contact', world: '1-5', prop: 'letter' },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);
