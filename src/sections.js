// The checkpoints along the level, in the same order as the page. `prop` is what the character holds in each one.
export const SECTIONS = [
  { id: 'top', label: 'Start', world: 'Start', prop: null },
  { id: 'education', label: 'Education', world: '1-1', prop: 'cap' },
  { id: 'experience', label: 'Experience', world: '1-2', prop: 'briefcase' },
  { id: 'projects', label: 'Projects', world: '1-3', prop: 'laptop' },
  { id: 'trophies', label: 'Trophies', world: '1-4', prop: 'trophy' },
  { id: 'skills', label: 'Skills', world: '1-5', prop: 'sword' },
  { id: 'contact', label: 'Contact', world: '1-6', prop: 'letter' },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);
