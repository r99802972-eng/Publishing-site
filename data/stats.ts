export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: 'Books Published', value: 500, suffix: '+' },
  { label: 'Professional Authors', value: 350, suffix: '+' },
  { label: 'Years Experience', value: 15, suffix: '' },
  { label: 'Global Distribution', value: 40, suffix: '+' },
];
