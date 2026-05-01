import * as Icons from 'lucide-react';

// Convert kebab-case to PascalCase
const toPascalCase = (str) => {
  if (!str) return 'Circle';
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

// Special mapping for known mismatches
const specialMap = {
  'laptop-code': 'Laptop',
  'chart-line': 'LineChart',
  'bullhorn': 'Megaphone',
  'chalkboard-teacher': 'School',
};

const DynamicLucideIcon = ({ name, size = 24, color = 'currentColor', strokeWidth = 1.5, style = {} }) => {
  let componentName = specialMap[name] || toPascalCase(name);
  let IconComponent = Icons[componentName];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using Circle`);
    IconComponent = Icons.Circle;
  }
  
  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} style={style} />;
};

export default DynamicLucideIcon;
